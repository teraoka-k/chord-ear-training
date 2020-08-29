import { playRandomChord, playCMajor } from "../logic/sampler";
import { setRandomChord } from "../states/chord";
import { hideAnswer } from "../states/answer";
import { localisation } from "../states/localisation";

export const Buttons = () => {
  return (
    <div>
      <button onClick={playCMajor}>{localisation.playChord}</button>
      <button onClick={playRandomChord}>{localisation.randomChord}</button>
      <button
        onClick={() => {
          setRandomChord();
          hideAnswer();
        }}
      >
        {localisation.changeChord}
      </button>
    </div>
  );
};
