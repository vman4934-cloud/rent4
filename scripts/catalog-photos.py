"""Inspect public product pages and download reviewed catalog photos.

Usage: catalog-photos.py inspect|download jobs.json
Jobs are explicit product id/source URL records. Never changes catalog data.
"""
import concurrent.futures
import hashlib
import html
from html.parser import HTMLParser
import json
from pathlib import Path
import re
import sys
import urllib.parse
import urllib.request

ROOT = Path(__file__).resolve().parents[1]
CACHE = ROOT / 'tmp' / 'catalog-photos'
CACHE.mkdir(parents=True, exist_ok=True)

class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.images = []
        self.title = []
        self.in_title = False
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == 'title': self.in_title = True
        if tag == 'meta' and a.get('property', a.get('name', '')) in ['og:image', 'twitter:image']:
            self.images.append({'url': a.get('content', ''), 'alt': 'og:image', 'score': 100})
        if tag == 'img':
            for key in ['src', 'data-src', 'data-original', 'data-lazy-src', 'data-zoom-image']:
                if a.get(key): self.images.append({'url': a[key], 'alt': a.get('alt', ''), 'score': 0})
        if tag == 'a' and re.search(r'\.(jpg|jpeg|png|webp)(\?|$)', a.get('href',''), re.I):
            self.images.append({'url': a['href'], 'alt': a.get('title',''), 'score': 10})
    def handle_endtag(self, tag):
        if tag == 'title': self.in_title = False
    def handle_data(self, text):
        if self.in_title: self.title.append(text)

def fetch(url):
    request = urllib.request.Request(url, headers={'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/130.0 Safari/537.36'})
    with urllib.request.urlopen(request, timeout=25) as response:
        return response.read(), response.headers.get('Content-Type','')

def inspect(job):
    try:
        data, content_type = fetch(job['url'])
        charset = re.search(r'charset=([\w-]+)', content_type)
        text = data.decode(charset[1] if charset else 'utf-8', errors='replace')
        (CACHE / (job['id']+'.html')).write_text(text, encoding='utf-8')
        page = Page(); page.feed(text)
        for url in re.findall(r'"(?:image|imageUrl|original|contentUrl)"\s*:\s*"([^\"]+)"', text):
            page.images.append({'url':url.replace('\\/','/'),'alt':'structured image','score':75})
        model = re.sub(r'[^a-z0-9]', '', job.get('model','').lower())
        images = {}
        for item in page.images:
            url = urllib.parse.urljoin(job['url'], html.unescape(item['url']))
            if not url.startswith('http') or '.svg' in url or 'data:' in url: continue
            norm = re.sub(r'[^a-z0-9]', '', (url+' '+(item['alt'] or '')).lower())
            if model and model in norm: item['score'] += 60
            if re.search('logo|banner|icon|sprite|loading|placeholder', url, re.I): item['score'] -= 150
            item['url'] = url
            if url not in images or images[url]['score'] < item['score']: images[url] = item
        result = {**job, 'title': ' '.join(page.title), 'images': sorted(images.values(),key=lambda x:-x['score'])[:12]}
        (CACHE / (job['id']+'.json')).write_text(json.dumps(result,ensure_ascii=False,indent=2),encoding='utf-8')
        return {**job,'title':result['title'],'images':result['images'][:3]}
    except Exception as error:
        return {**job, 'error':str(error)}

def download(job):
    try:
        data, kind = fetch(job['image'])
        if not kind.startswith('image/'): raise ValueError('Not an image: '+kind)
        extension = {'image/jpeg':'.jpg','image/png':'.png','image/webp':'.webp'}.get(kind.split(';')[0])
        if not extension: raise ValueError('Unsupported image type: '+kind)
        path = ROOT / 'public' / 'products' / (job['id']+extension)
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_bytes(data)
        return {**job,'path':'/products/'+path.name,'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest()}
    except Exception as error:
        return {**job,'error':str(error)}

jobs = json.loads(Path(sys.argv[2]).read_text(encoding='utf-8-sig'))
operation = inspect if sys.argv[1] == 'inspect' else download
with concurrent.futures.ThreadPoolExecutor(max_workers=8) as executor:
    results = list(executor.map(operation,jobs))
output = CACHE / (Path(sys.argv[2]).stem+'-'+sys.argv[1]+'.json')
output.write_text(json.dumps(results,ensure_ascii=False,indent=2),encoding='utf-8')
for result in results: print(json.dumps(result,ensure_ascii=False))
