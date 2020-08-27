import { useEffect, Key } from "react";
import { playRandomChord, playCMajor } from "./sampler";
import { setRandomChord } from "../states/chord";
import { showAnswer, hideAnswer } from "../states/answer";

export const useShortcutKeys = (): void => {
  useEffect(() => {
    shortcutKeys.forEach((shortcut) => {
      window.addEventListener(
        shortcut.event || "keydown",
        (e: KeyboardEvent) => {
          if (
            e.key == shortcut.key &&
            ((shortcut.alt && e.altKey) || !shortcut.alt) &&
            ((shortcut.ctrl && e.ctrlKey) || !shortcut.ctrl) &&
            ((shortcut.meta && e.metaKey) || !shortcut.meta) &&
            ((shortcut.shift && e.shiftKey) || !shortcut.shift)
          )
            shortcut.action();
        }
      );
    });
  }, []);
};

const shortcutKeys: ShortcutKey[] = [
  {
    key: "p",
    action: playCMajor,
  },
  {
    key: "r",
    action: playRandomChord,
  },
  {
    key: "c",
    action: () => {
      setRandomChord();
      hideAnswer();
    },
  },
  {
    key: "v",
    action: showAnswer,
  },
];

interface ShortcutKey {
  key: Key;
  action: () => void;
  event?: keyof WindowEventMap;
  alt?: boolean;
  ctrl?: boolean;
  meta?: boolean;
  shift?: boolean;
}
