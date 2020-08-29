import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { LanguageSet, En, Jp } from "../constant/languageSets";

export let localisation: LanguageSet;
export let setLocalisation: Dispatch<SetStateAction<LanguageSet>>;

export const useLocalisation = () => {
  [localisation, setLocalisation] = useState(En);
  useEffect(setDefaultLang, []);
};

export const setDefaultLang = () => {
  switch (true) {
    case /en/.test(navigator.language):
      setLocalisation(En);
      break;
    case /ja/.test(navigator.language):
      setLocalisation(Jp);
      break;
  }
};
