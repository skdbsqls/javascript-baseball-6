import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/message.js";

const InputView = {
  // 사용자 입력값 입력
  async readNumber() {
    const number = await Console.readLineAsync(INPUT_MESSAGE.number);

    return number;
  },
  // 게임 재시작 여부 입력
  async readRestart() {
    const restart = await Console.readLineAsync(INPUT_MESSAGE.restart);

    return restart;
  },
};

export default InputView;
