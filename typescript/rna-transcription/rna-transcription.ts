export function toRna(origin:string) {
  const validChars = 'GCTA'
  const replaceDict:any = {
    'G':'C',
    'C':'G',
    'T':'A',
    'A':'U',
  }
  let output:string = ''
  for (const char of origin) {
    if (validChars.includes(char)){
      output+=replaceDict[char]
    }else{
      throw Error("Invalid input DNA.")
    }
  }
  return output
}
