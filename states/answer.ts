import { useState, Dispatch, SetStateAction } from "react";

export let viewsAnswer: boolean;
let setDisplay: Dispatch<SetStateAction<boolean>>;

export function useAnswer() {
  [viewsAnswer, setDisplay] = useState(false);
}

export function showAnswer() {
  setDisplay(true);
}

export function hideAnswer() {
  setDisplay(false);
}
