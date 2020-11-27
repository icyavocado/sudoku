import Verification from './Verification.component';

class Grid {
  constructor(grid) {
    if (!grid) this.grid = this.emptyGrid();
    this.grid = grid;
  }

  getRow(rowNumber, start = 0, end = 8) {
    this._checkRowColValue(rowNumber, start, end);
    return this.grid[rowNumber].slice(start, end + 1);
  }

  getCol(colNumber, start = 0, end = 8) {
    this._checkRowColValue(colNumber, start, end);
    const col = [];
    this.grid.forEach(row => {
      col.push(row[colNumber]);
    });
    return col.slice(start, end + 1);
  }

  getSquare(squareNumber) {
    if (!squareNumber && squareNumber != 0) return false;
    let squareNumbers = [];
    const squareRow = Math.floor(squareNumber / 3) * 3;
    let start = Math.floor(squareNumber % 3) * 3;
    Array(3).fill(0).forEach((el, index) => {
      const squareRowNumbers = this.getRow(squareRow + index, start, start + 2);
      squareNumbers = [...squareNumbers, ...squareRowNumbers];
    });
    return squareNumbers;
  }

  getPosition(row = undefined, col = undefined) {
    this._checkRowColValue(row);
    this._checkRowColValue(col);
    const rowArray = this.getRow(row);
    const positionNum = rowArray[col];
    return positionNum;
  }

  setPosition(row = undefined, col = undefined, value = undefined) {
    this._checkRowColValue(row);
    this._checkRowColValue(col);
    this.grid[row][col] = value;
  }

  getRowAndColFromPositionNumber(num) {
    this._checkPostion(num);
    const col = num % 9;
    const row = Math.floor(num / 9);
    return { row, col }
  }

  getPositionByNumber(num) {
    this._checkPostion(num);
    const { row, col } = this.getRowAndColFromPositionNumber(num);
    return this.getPosition(row, col);
  }

  setPositionByNumber(num, value) {
    this._checkPostion(num);
    const { row, col } = this.getRowAndColFromPositionNumber(num);
    this.setPosition(row, col, value);
  }

  findNextEmpty() {
    const arr = [].concat(...this.grid);
    const indexOfNextZero = arr.indexOf(0);
    console.log('indexOfNextZero', indexOfNextZero, arr);
    if (indexOfNextZero >= 0) {
      return this.getRowAndColFromPositionNumber(indexOfNextZero);
    } else {
      return false;
    }
  }

  verifyGrid() {
    const verification = new Verification(this);
    return verification.checkStructure();
  }

  solve(rowBefore, colBefore) {
    if (this.isCompleted()) return;
    while (!this.isCompleted()) {
      for (let i = 0; i < 9; i++) {
        if (this.verifyGrid()) {
          const { row, col } = this.findNextEmpty();
          this.setPosition(row, col, i + 1);
          this.solve(row, col);
        } else {
          this.setPosition(rowBefore, colBefore, 0);
          return;
        }
      }
    }
  }

  emptyGrid() {
    return Array(9).fill(Array(9).fill(0));
  }
  
  length() {
    return this.grid.length;
  }

  isCompleted() {
    console.log(this.grid);
    const arrayJustNumber = [].concat(...this.grid);
    return arrayJustNumber.filter(el => el === 0).length === 0;
  }

  _checkPostion(num) {
    if (!num && num != 0) throw Error('Need to pass in a number');
    if (num < 0 || num > 80) throw Error('Num between 0 and 80');
  }

  _checkRowColValue(value, start, end) {
    if (value === undefined) throw Error('Need a number');
    if (value > 8) throw Error('Number need to be smaller than to 9');
    if (value < 0) throw Error('Number need to be larger than to 0');
    if (start < 0) throw Error('Start number need to be larger or equal to 0');
    if (start > 8) throw Error('Start number need to be smaller than 9');
    if (end < 0) throw Error('End number need to be larger or equal to 0');
    if (end > 8) throw Error('End number need to be smaller than 9');
    if (end <= start) throw Error('End number should be larger than start number');
  }

}

module.exports = Grid