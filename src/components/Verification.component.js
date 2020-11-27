class Verification {
  constructor(grid) {
    if (!grid) throw Error('Initialize this.grid to verify.');
    this.grid = grid
  }

  checkStructure() {
    if (this.grid.length() !== 9) return false;
    let valid = true;
    for (let i = 0; i < this.grid.length() && valid; i++) {
      valid = this.checkRow(i) && this.checkCol(i) && this.checkSquare(i);
    }
    return valid;
  }

  checkSquare(squareNumber) {
    let squares = this.grid.getSquare(squareNumber);
    return this._isUnique(squares);
  }

  checkRow(rowNumber) {
    let rows = this.grid.getRow(rowNumber);
    return this._isUnique(rows);
  }

  checkCol(colNumber) {
    let cols = this.grid.getCol(colNumber);
    return this._isUnique(cols);
  }

  isEmpty() {
    return true;
  }

  _isUnique(rowNumbers) {
    let seen = {};
    let check = rowNumbers.map(el => {
      if (el < 0 || el > 9) return false;
      if (!seen[el] || el === 0) {
        seen[el] = 1;
        return true;
      } else {
        return false;
      }
    });
    return check.filter(el => !el).length === 0;
  }

}

module.exports = Verification