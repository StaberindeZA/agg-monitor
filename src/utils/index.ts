function generateValidSecretInteger(): number {
  const min = 48;
  const max = 122;
  const excludeNumbers = [58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 95, 96];
  const whileBreak = true;
  while (whileBreak) {
    const value = Math.floor(Math.random() * (max - min + 1) + min);
    if (!excludeNumbers.includes(value)) return value;
  }
  return min;
}

export const generateRandomString = (length: number) =>
  Array.from({length}, _ => generateValidSecretInteger())
    .map(char => String.fromCharCode(char))
    .join('');

export function validBase64(value: string) {
  const base64Regexp = new RegExp('/A-Za-z0-9+/=/');
  return base64Regexp.test(value);
}
