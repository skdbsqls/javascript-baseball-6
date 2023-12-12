import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/message.js";
import NumberValidate from "../utils/validation/NumberValidate.js";
import RestartValidate from "../utils/validation/ReStartValidate.js";

const InputView = {
  // 사용자 입력값 입력
  async readNumber() {
    const number = await Console.readLineAsync(INPUT_MESSAGE.number);

    this.validateNumber(number);
    return number;
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

    this.validateRestart(restart);
    return restart;
  },
  // 게임 재시작 여부 예외 처리
  validateRestart(restart) {
    RestartValidate.notRestart(restart);
  },
};

export default InputView;
