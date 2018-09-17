export default function truncation(value, quantity, mask) {
  if (value) {
    if (value.length <= quantity) {
      return value;
    }

    return `${value.substring(0, quantity)}${mask}`;
  }

  return '';
}
