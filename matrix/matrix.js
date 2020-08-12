export class Matrix {
  constructor(matrix) {
    this._rows = matrix.split('\n').map(stringRow => stringRow.split(' ').map(value => Number(value)))
    this._cols = this._rows[0].map((col, i) => this._rows.map(row => row[i]))
  }

  get rows() {
    return this._rows
  }

  get columns() {
    return this._cols
  }
}