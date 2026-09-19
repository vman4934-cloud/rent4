import type { SVGProps } from "react";
const paths = {
  arrow: "M5 12h14m-6-6 6 6-6 6",
  search: "m21 21-5-5M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z",
  pin: "M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0ZM15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
  bag: "M5 7h14l1 14H4L5 7Zm3 0V5a4 4 0 0 1 8 0v2",
  grid: "M3 3h7v7H3V3Zm11 0h7v7h-7V3ZM3 14h7v7H3v-7Zm11 0h7v7h-7v-7Z",
  check: "m5 12 4 4L19 6",
  truck: "M1 4h13v13H1V4Zm13 5h5l4 5v3h-9M8 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
  clock: "M12 7v5l3 2M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z",
  plus: "M12 5v14M5 12h14",
  close: "m6 6 12 12M6 18 18 6",
  menu: "M3 6h18M3 12h18M3 18h18",
  tool: "m14 6 4 4 4-4a7 7 0 0 1-9 9l-7 7-4-4 7-7A7 7 0 0 1 18 2l-4 4Z",
};
export function Icon({ name, ...props }: SVGProps<SVGSVGElement> & { name: keyof typeof paths }) {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d={paths[name]} /></svg>;
}
