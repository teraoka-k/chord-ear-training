import { useState, Dispatch, SetStateAction } from "react";

export let chord: string[];
let setChord: Dispatch<SetStateAction<string[]>>;

export function useChord(): void {
  [chord, setChord] = useState(getRandomChord());
}

export function setRandomChord(): void {
  setChord(getRandomChord());
}

function getRandomChord(): string[] {
  const randomInt = Math.floor(Math.random() * 6);
  switch (randomInt) {
    case 0:
      return ["C3", "E3", "G3"];
    case 1:
      return ["C4", "E4", "G4"];
    case 2:
      return ["E3", "G3", "C4"];
    case 3:
      return ["E4", "G4", "C5"];
    case 4:
      return ["G3", "C4", "E4"];
    case 5:
      return ["G2", "C3", "E3"];
  }
}
