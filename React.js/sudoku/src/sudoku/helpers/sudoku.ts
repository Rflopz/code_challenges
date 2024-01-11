const getRandomInt = (min = 0, max = 9) =>
  Math.floor(Math.random() * (max - min) + min);

export type TGridItem = {
  pos: string;
  val: number
}

export type TGrid = Array<Array<TGridItem>>

export const initialPosition = "00";

export const getRandomValues = (grid: TGrid, n: number) => {
  const len = grid.length - 1;

  return new Array(n).fill({}).map(() => ({
    pos: `${getRandomInt(len)}${getRandomInt(len)}`,
    val: getRandomInt(1, len)
  }))
}

export const getGrid = () => {
  const grid = Array.from(Array(9), () => new Array(9).fill({
    value: 0, enabled: true
  }))

  const values = getRandomValues(grid, 9);

  console.log(values);
  values.forEach((item: TGridItem) => {
    console.log(item);
    const [x, y] = item.pos.split("").map(i => parseInt(i));
    grid[x][y] = { value: item.val, enabled: false }
  })

  console.log(grid);

  return grid;
}


