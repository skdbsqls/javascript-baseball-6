const INPUT_MESSAGE = Object.freeze({
  number: "숫자를 입력해주세요 : ",
  restart: "게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n",
});

const OUTPUT_MESSAGE = Object.freeze({
  start: "숫자 야구 게임을 시작합니다.",
  end: "3개의 숫자를 모두 맞히셨습니다! 게임 종료",
});

const HINT_MESSAGE = Object.freeze({
  none: "낫싱",
  ball: (ball) => `${ball}볼`,
  strike: (strike) => `${strike}스트라이크`,
  both: (ball, strike) => `${ball}볼 ${strike}스트라이크`,
});

const ERROR_MESSAGE = Object.freeze({
  invalidNone: "[ERROR] 입력값이 존재하지 않습니다.",
  invalidSpace: "[ERROR] 공백이 포함되어 있습니다.",
  invalidNumber: "[ERROR] 서로 다른 3개의 숫자만 입력해 주세요.",
  invalidLength: "[ERROR] 3개의 숫자를 입력해 주세요.",
  invalidZero: "[ERROR] 1에서 9까지 숫자만 입력해 주세요.",
  invalidPattern: "[ERROR] 서로 다른 3개의 숫자를 입력해 주세요.",
  invalidRestart: "[ERROR] 1 또는 2를 입력해 주세요.",
});

export { INPUT_MESSAGE, OUTPUT_MESSAGE, HINT_MESSAGE, ERROR_MESSAGE };
