import { useAnswer, viewsAnswer, showAnswer } from "../states/answer";
import { chord } from "../states/chord";

export const Answer = () => {
  useAnswer();
  return (
    <div>
      <button onClick={showAnswer}>view random chord (v)</button>
      {viewsAnswer ? <div>{chord.toString()}</div> : null}
    </div>
  );
};
