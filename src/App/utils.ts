export const randomColor = (arr: Array<any>, key: number) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const object = arr[randomIndex];
  return object[key];
};

export const appColors = [
  {
    1: "#00ff87",
    2: "#60efff",
  },
  {
    1: "#0061ff",
    2: "#60efff",
  },
  {
    1: "#ff1b6b",
    2: "#45caff",
  },
  {
    1: "#40c9ff",
    2: "#e81cff",
  },
  {
    1: "#ff930f",
    2: "#fff95b",
  },
  {
    1: "#ff0f7b",
    2: "#f89b29",
  },
];

export const color1: string = randomColor(appColors, 1);
export const color2: string = randomColor(appColors, 2);
