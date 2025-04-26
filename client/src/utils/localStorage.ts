export function getValue(key: string) {
  const data = localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key)!)
    : null;
  return data;
}

export function setValue(key: string, value: string) {
  localStorage.setItem(key, value);
}
