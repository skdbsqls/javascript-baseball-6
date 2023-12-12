import Computer from "./domains/Computer.js";
import InputView from "./views/InputView.js";
import OutputView from "./views/OutPutView.js";

class App {
  #random;

  async play() {
    OutputView.printStart();
    this.#executeStart();
    await this.#executeProgress();
    await this.#executeEnd();
  }

  // 게임 시작
  #executeStart() {
    this.#random = new Computer().getRandom();
  }

  // 게임 진행
  async #executeProgress() {
    const number = await InputView.readNumber();
    // 랜덤값과 입력값 비교
    // 힌트 출력
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
