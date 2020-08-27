import { playRandomChord, playCMajor } from "../logic/sampler";
import { setRandomChord } from "../states/chord";
import { hideAnswer } from "../states/answer";

export const Buttons = () => {
  return (
    <div>
      <button onClick={playCMajor}>C Major (p)</button>
      <button onClick={playRandomChord}>random chord (r)</button>
      <button
        onClick={() => {
          setRandomChord();
          hideAnswer();
        }}
      >
        change random chord (c)
      </button>
    </div>
  );
};
