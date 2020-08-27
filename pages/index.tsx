import { Buttons } from "../components/buttons";
import { useChord } from "../states/chord";
import { Answer } from "../components/answer";
import { initSampler } from "../logic/sampler";
import { useEffect } from "react";
import { useShortcutKeys } from "../logic/shortcutKeys";

const Index = () => {
  useChord();
  useEffect(initSampler, []);
  useShortcutKeys();

  return (
    <div>
      <h1>Chord Ear Training</h1>
      <Buttons></Buttons>
      <Answer></Answer>
    </div>
  );
};
export default Index;
