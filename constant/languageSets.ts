export interface LanguageSet {
  h1: string;
  h2: string;
  h3: string;
  description: string;
  playChord: string;
  randomChord: string;
  changeChord: string;
  showAnswer: string;
}

export const En: LanguageSet = {
  h1: "Chord Ear Training",
  h2: "Inversion",
  h3: "Triad",
  description:
    "In this exercise, you will hear a C major chord in random positions (i.e the tonic note may be in the highest or middle in the chord). Your goal is to guess which note is the lowest, highest, or middle.",
  playChord: "play C major with the tonic note in root (p)",
  randomChord: "play random position (r)",
  changeChord: "change position (c)",
  showAnswer: "show answer (s)",
};

export const Jp: LanguageSet = {
  h1: "和音の聴音トレーニング",
  h2: "転回",
  h3: "三和音",
  description:
    "ハ長調の三和音には、CEG(基本形)の他に、EGC(第一転回形、または6の和音)と、GCE(第二転回形、または4・6の和音)です。ランダムにハ長調の三和音を鳴らすので、どの配置か聞き取れるようになりましょう。",
  playChord: "基本配置のCコードを鳴らす (p)",
  randomChord: "ランダムの配置のCコードを鳴らす (r)",
  changeChord: "配置を入れ替える (c)",
  showAnswer: "答えを見る (s)",
};
