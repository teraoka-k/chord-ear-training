import { Buttons } from "../components/buttons";
import { useChord } from "../states/chord";
import { Answer } from "../components/answer";
import { initSampler } from "../logic/sampler";
import { useEffect } from "react";
import { useShortcutKeys } from "../logic/shortcutKeys";
import { useLocalisation, localisation } from "../states/localisation";

const Index = () => {
  useChord();
  useLocalisation();
  useEffect(() => {
    initSampler();
  }, []);
  useShortcutKeys();

  return (
    <div>
      <h1>{localisation.h1}</h1>
      <h2>{localisation.h2}</h2>
      <h3>{localisation.h3}</h3>
      <p>{localisation.description}</p>
      <Buttons></Buttons>
      <br></br>
      <Answer></Answer>
    </div>
  );
};
export default Index;
