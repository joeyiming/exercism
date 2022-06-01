export class Matrix {
  origin: string
  constructor(origin:string) {
    this.origin=origin
  }

  get rows(): any {
    let strList = this.origin.split('\n')
    let rowList = strList.map(str=>str.split(' ').map(n=>parseInt(n)))
    return rowList
  }

  get columns(): any {
    let rowList = this.rows
    let colList = []
    for (let i = 0; i < rowList[0].length; i++) {
      let col = []
      for (let j = 0; j < rowList.length; j++) {
        const ele = rowList[j][i];
        col.push(ele)
      }
      colList.push(col)
    }
    return colList
  }
}
