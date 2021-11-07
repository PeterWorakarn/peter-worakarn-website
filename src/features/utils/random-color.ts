export const allAvailableColor = [
  'bg-accent_blue',
  'bg-accent_pink',
  'bg-accent_orange',
  'bg-accent_green',
  'bg-accent_gray',
  'bg-accent_purple',
]

export const randomColor = () => {
  return allAvailableColor[Math.floor(Math.random() * ((allAvailableColor.length - 1) - 0) + 0)];
}