import './fixtures/100_completed_grid';
import Verification from 'src/components/Verification.component';
import Grid from 'src/components/Grid.component';

let goodVerfication;
let badVerfication;
let emptyVerfication;

beforeAll(async () => {
  const res = await axios.get('/completed_grid');
  const { goodGrid, badGrid, emptyGrid } = res.data;
  goodVerfication = new Verification(new Grid(goodGrid));
  badVerfication = new Verification(new Grid(badGrid));
  emptyVerfication = new Verification(new Grid(emptyGrid));
});

describe("001 - Validate grid functions", () => {

  test("checkSquare", () => {
    expect(goodVerfication.checkSquare(0)).toBeTruthy();
    expect(emptyVerfication.checkSquare(0)).toBeTruthy();
    expect(badVerfication.checkSquare(0)).toBeFalsy();
  })

  test("checkRow function", () => {
    expect(goodVerfication.checkRow(0)).toBeTruthy();
    expect(emptyVerfication.checkRow(0)).toBeTruthy();
    expect(badVerfication.checkRow(0)).toBeFalsy();
  });

  test("checkCol function", () => {
    expect(goodVerfication.checkCol(2)).toBeTruthy();
    expect(emptyVerfication.checkCol(2)).toBeTruthy();
    expect(badVerfication.checkCol(2)).toBeFalsy();
  });

  test("checkStructure function", () => {
    expect(goodVerfication.checkStructure()).toBeTruthy();
    expect(emptyVerfication.checkStructure()).toBeTruthy();
    expect(badVerfication.checkStructure()).toBeFalsy();
  });

});