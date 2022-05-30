export function decodedResistorValue(colorList: Array<string>): string {
  const colorDict: any = {
    "Black": 0,
    "Brown": 1,
    "Red": 2,
    "Orange": 3,
    "Yellow": 4,
    "Green": 5,
    "Blue": 6,
    "Violet": 7,
    "Grey": 8,
    "White": 9,
  };
  let postfix = 'ohms';
  let ans = 0;
  let carry = 10;
  for (let index = 0; index < colorList.length; index++) {
    const color = colorList[index];
    const colorName = color[0].toUpperCase() + color.slice(1, color.length);
    if (index < colorList.length - 1) {
      ans += colorDict[colorName] * carry;
      carry = Math.round(carry / 10);
    } else {
      carry = Math.pow(10,colorDict[colorName]);
      if (carry !== 0) {
        ans *= carry;
      }
      if (ans >= 1000) {
        ans /= 1000;
        postfix = 'kiloohms';
      }
    }
  }

  return `${ans} ${postfix}`;
}
