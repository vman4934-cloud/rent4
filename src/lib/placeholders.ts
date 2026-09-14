const PLACEHOLDER = /^\[[^\]]+\]$/;

export function isPlaceholder(value: string) {
  return PLACEHOLDER.test(value.trim()) || value.includes("данные для заполнения");
}

export function displayValue(value: string) {
  return value.trim();
}
