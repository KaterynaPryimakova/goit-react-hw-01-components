export function generateRandomColor() {
  return `rgb(${(Math.random() * 256) | 0}, ${(Math.random() * 256) | 0}, ${
    (Math.random() * 256) | 0
  })`;
}
