import { ERROR_MESSAGE } from "../../constants/message.js";

const RestartValidate = {
  // 입력값이 1 또는 2가 아닌 경우
  notRestart(restart) {
    if (restart !== "1" && restart !== "2") {
      throw new Error(ERROR_MESSAGE.invalidRestart);
    }
  },
};

export default RestartValidate;
