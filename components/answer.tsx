import { useAnswer, viewsAnswer, showAnswer } from "../states/answer";
import { chord } from "../states/chord";
import { localisation } from "../states/localisation";

export const Answer = () => {
  useAnswer();
  return (
    <div>
      <button onClick={showAnswer}>{localisation.showAnswer}</button>
      {viewsAnswer ? <div>{chord.toString()}</div> : null}
    </div>
  );
};
