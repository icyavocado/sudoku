import './fixtures/100_completed_grid';
import Grid from 'src/components/Grid.component';
import { isEqual } from "lodash";

let goodGridObj;
let emptyGridObj;
let badGridObj;

beforeAll(async () => {
  const res = await axios.get('/completed_grid');
  const { goodGrid, emptyGrid, badGrid } = res.data;
  goodGridObj = new Grid(goodGrid);
  emptyGridObj = new Grid(emptyGrid);
  badGridObj = new Grid(badGrid);
});

describe("002 - Grid", () => {

  describe("getRow function", () => {

    it("given 0 as argument, should return first row", () => {
      const row = goodGridObj.getRow(0);
      const expected = [8, 3, 5, 4, 1, 6, 9, 2, 7];
      expect(isEqual(row, expected)).toBeTruthy();
    })

    it("given row number 0, start number 2, end number 4, should return [5, 4, 1]", () => {
      const row = goodGridObj.getRow(0, 2, 4);
      const expected = [5, 4, 1];
      expect(isEqual(row, expected)).toBeTruthy();
    })

  });

  describe("getCol function", () => {

    it("given 0 as argument, should return first row", () => {
      const col = goodGridObj.getCol(0);
      const expected = [8, 2, 4, 5, 1, 7, 6, 9 ,3];
      expect(isEqual(col, expected)).toBeTruthy();
    })

    it("given row number 0, start number 2, end number 4, should return [4, 5, 1]", () => {
      const col = goodGridObj.getCol(0, 2, 4);
      const expected = [4, 5, 1];
      expect(isEqual(col, expected)).toBeTruthy();
    })

  });

  describe("getPosition function", () => {

    it("given row 0 and col 0 as argument, should return first number which is 8", () => {
      const positionNum = goodGridObj.getPosition(0, 0);
      const expected = 8;
      expect(positionNum).toBe(expected);
    })

    it("given row number -1, should throw Error", () => {
      const col = () => goodGridObj.getPosition(-1, 0);
      expect(col).toThrowError();
    })

    it("given row 3 and col 8 as argument, should return 2", () => {
      const positionNum = goodGridObj.getPosition(3, 8);
      const expected = 2;
      expect(positionNum).toBe(expected);
    })

  });

  describe("setPosition function", () => {

    it("given row 0 and col 0 as argument, should return set value 1", () => {
      goodGridObj.setPosition(0, 0, 1);
      const positionNum = goodGridObj.getPosition(0, 0);
      const expected = 1;
      expect(positionNum).toBe(expected);
      goodGridObj.setPosition(0, 0, 8);
    })

    it("given row 3 and col 8 as argument, should return set value 1", () => {
      goodGridObj.setPosition(3, 8, 1);
      const positionNum = goodGridObj.getPosition(3, 8);
      const expected = 1;
      expect(positionNum).toBe(expected);
    })

  });

  describe("getRowAndColFromPositionNumber function", () => {

    it("given row 0, should return first row and col (0, 0)", () => {
      const positionNum = goodGridObj.getRowAndColFromPositionNumber(0);
      const expected = { row: 0, col: 0 };
      expect(isEqual(positionNum, expected)).toBeTruthy();
    })

    it("given position number -1, should throw Error", () => {
      const position = () => goodGridObj.getRowAndColFromPositionNumber(-1);
      expect(position).toThrowError();
    })

    it("given number 24, should return 3", () => {
      const positionNum = goodGridObj.getRowAndColFromPositionNumber(24);
      const expected = { row: 2, col: 6 };
      expect(isEqual(positionNum, expected)).toBeTruthy();
    })

  });

  describe("getPositionByNumber function", () => {

    it("given row 0, should return first number which is 8", () => {
      const positionNum = goodGridObj.getPositionByNumber(0);
      const expected = 8;
      expect(positionNum).toBe(expected);
    })

    it("given row number -1, should throw Error", () => {
      const col = () => goodGridObj.getPositionByNumber(-1);
      expect(col).toThrowError();
    })

    it("given number 24, should return 6", () => {
      const positionNum = goodGridObj.getPositionByNumber(24);
      const expected = 6;
      expect(positionNum).toBe(expected);
    })

  });

  describe("length function", () => {

    it("should return 9", () => {
      const length = goodGridObj.length();
      const expected = 9;
      expect(length).toBe(expected);
    })

  });

  describe("isCompleted function", () => {

    it("should return true if completed", () => {
      expect(goodGridObj.isCompleted()).toBe(true);
      expect(badGridObj.isCompleted()).toBe(true);
      expect(emptyGridObj.isCompleted()).toBe(false);
    })

  });

  describe("solve function", () => {

    it("should return a complete grid if completed", () => {
      goodGridObj.solve();
      expect(goodGridObj).toStrictEqual(goodGridObj);
      // expect(emptyGridObj.solve(emptyGridObj)).toStrictEqual(emptyGridObj.grid);
      emptyGridObj.solve(emptyGridObj);
      console.log(emptyGridObj.grid);
    })

  });

});