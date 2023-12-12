import Hint from "./domains/Hint.js";
import Compare from "./domains/Compare.js";
import Computer from "./domains/Computer.js";
import InputView from "./views/InputView.js";
import OutputView from "./views/OutPutView.js";

class App {
  #random;

  #result;
  async play() {
    OutputView.printStart();
    this.#executeStart();
    await this.#executeProgress();
    await this.#executeEnd();
  }

  // 게임 시작
  #executeStart() {
    this.#random = new Computer().getRandom();
    console.log("랜덤값", this.#random);
  }

  // 게임 진행
  async #executeProgress() {
    let playing = true;

    while (playing) {
      const number = await InputView.readNumber();
      this.#result = new Compare(this.#random, number).getResult();

      if (this.#result.strike === 3) {
        new Hint(this.#result).getHint();
        playing = false;
      } else new Hint(this.#result).getHint();
    }
  }

  // 게임 종료
  async #executeEnd() {
    OutputView.printEnd();
    const restart = await InputView.readRestart();
    // 재시작 여부에 따른 게임 지속
  }
}

const app = new App();
app.play();

export default App;
