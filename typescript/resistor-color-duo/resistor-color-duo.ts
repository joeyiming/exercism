export function decodedValue(colorList: Array<string>) {
  const colorDict:any = {
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
  let ans: number = 0;
  let carry: number = 10;
  for (let color of colorList) {
    let colorName: string = color[0].toUpperCase() + color.slice(1, color.length);
    ans += colorDict[colorName]*carry;
    carry=Math.round(carry/10);
  }
  return ans;
}
