import OutputView from "../views/OutPutView.js";

class Hint {
  #ball;

  #strike;

  constructor(result) {
    this.#ball = result.ball;
    this.#strike = result.strike;
  }

  // 힌트 출력
  getHint() {
    if (this.#ball === 0 && this.#strike === 0) {
      OutputView.printNothing();
    }
    if (this.#ball > 0 && this.#strike === 0) {
      OutputView.printBall(this.#ball);
    }
    if (this.#strike > 0 && this.#ball === 0) {
      OutputView.printStrike(this.#strike);
    }
    if (this.#ball > 0 && this.#strike > 0) {
      OutputView.printBoth(this.#ball, this.#strike);
    }
  }
}

export default Hint;
