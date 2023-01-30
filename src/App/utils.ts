export const randomColor = (arr: object[]) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  return item;
};

export const colors = [
  { color: "linear-gradient(45deg,#00d4ff,#2658a9,#3131b1,#2658a9,#00d4ff)10" },
  { color: "linear-gradient(45deg,#00ffa2,#00ae6e,#044c31,#00ae6e,#00ffa2)10" },
  { color: "linear-gradient(45deg,#b04fe0,#873eac,#53226c,#873eac,#b04fe0)10" },
  { color: "linear-gradient(45deg,#d6a54b,#a37a2e,#574015,#a37a2e,#d6a54b)10" },
  { color: "linear-gradient(45deg,#cb446d,#953c57,#5a1e30,#953c57,#cb446d)10" },
  { color: "linear-gradient(45deg,#e3cb43,#84772a,#5e5318,#84772a,#e3cb43)10" },
  { color: "linear-gradient(45deg,#d453c7,#a668a0,#8d2e83,#a668a0,#d453c7)10" },
  { color: "linear-gradient(45deg,#2b61d5,#173984,#08142d,#173984,#2b61d5)10" },
  { color: "linear-gradient(45deg,#33df27,#228b1a,#11380e,#228b1a,#33df27)10" },
  { color: "linear-gradient(45deg,#d51f1c,#7d110f,#3f0e0e,#7d110f,#d51f1c)10" },
];
