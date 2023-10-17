import { atom } from "recoil";

export const themeModeAtom = atom<"light" | "dark">({
  key: "currentthemeMode",
  default: "light",
});
