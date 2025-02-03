export function ValueTransform(value: number): string {
  if (value < 1000) {
    return value.toString();
  } else if (value >= 1000 && value < 1000000) {
    return (value / 1000).toFixed(1) + "К";
  } else {
    return (value / 1000000).toFixed(1) + "М";
  }
}
