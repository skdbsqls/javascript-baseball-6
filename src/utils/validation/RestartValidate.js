import { ERROR_MESSAGE } from "../../constants/message.js";

const RestartValidate = {
  notRestart(restart) {
    if (restart !== "1" || restart !== "2") {
      throw new Error(ERROR_MESSAGE.restart);
    }
  },
};

export default RestartValidate;
