import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/message.js";
import NumberValidate from "../utils/validation/NumberValidate.js";
import RestartValidate from "../utils/validation/ReStartValidate.js";

const InputView = {
  // 사용자 입력값 입력
  async readNumber() {
    const number = await Console.readLineAsync(INPUT_MESSAGE.number);
    try {
      this.validateNumber(number);
      return number;
    } catch (error) {
      Console.print(error.message);
    }
  },
  // 사용자 입력값 예외 처리
  validateNumber(number) {
    NumberValidate.doNotEnter(number);
    NumberValidate.IncludeSpace(number);
    NumberValidate.isNotNum(number);
    NumberValidate.invalidLength(number);
    NumberValidate.invalidZero(number);
    NumberValidate.duplicateNum(number);
  },

  // 게임 재시작 여부 입력
  async readRestart() {
    const restart = await Console.readLineAsync(INPUT_MESSAGE.restart);
    try {
      this.validateRestart(restart);
      return restart;
    } catch (error) {
      Console.print(error.message);
    }
  },
  // 게임 재시작 여부 예외 처리
  validateRestart(restart) {
    RestartValidate(restart);
  },
};

export default InputView;
