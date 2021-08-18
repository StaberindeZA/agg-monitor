function generateValidSecretInteger(): number {
  const min = 48;
  const max = 122;
  const excludeNumbers = [58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 95, 96];
  const whileBreak = true;
  while (whileBreak) {
    const value = Math.floor(Math.random() * (max - min + 1) + min);
    console.log('Heres the random Int', value);
    if (!excludeNumbers.includes(value)) return value;
  }
  return min;
}

export function generateRandomString(length: number) {
  const random = Array.from({length: 5}, _ => generateValidSecretInteger());
  console.log(random);
  // const randomString = random
  //   .map((_: any) => {
  //     const theInt = generateValidSecretInteger();
  //     console.log(theInt);
  //     return String.fromCharCode(generateValidSecretInteger());
  //   })
  //   .join('');
  const randomString = random.map(char => String.fromCharCode(char)).join('');
  console.log('This is the random', randomString);
  return randomString;
}

export function validBase64(value: string) {
  const base64Regexp = new RegExp('/A-Za-z0-9+/=/');
  return base64Regexp.test(value);
}
