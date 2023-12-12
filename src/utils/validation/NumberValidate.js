import { ERROR_MESSAGE } from "../../constants/message.js";

const NumberValidate = {
  // 입력값이 없는 경우
  doNotEnter(number) {
    if (number === "") {
      throw new Error(ERROR_MESSAGE.invalidNone);
    }
  },
  // 공백이 포함된 경우
  IncludeSpace(number) {
    if (number.includes(" ")) {
      throw new Error(ERROR_MESSAGE.invalidSpace);
    }
  },
  // 숫자가 아닌 경우
  isNotNum(number) {
    if (isNaN(number)) {
      throw new Error(ERROR_MESSAGE.invalidNumber);
    }
  },
  // 길이가 3이 아닌 경우
  invalidLength(number) {
    if (number.length !== 3) {
      throw new Error(ERROR_MESSAGE.invalidLength);
    }
  },
  // 0이 포함된 경우
  invalidZero(number) {
    if (number.includes("0")) {
      throw new Error(ERROR_MESSAGE.invalidZero);
    }
  },
  // 중복된 숫자가 있는 경우
  duplicateNum(number) {
    const set = [...new Set(number)];

    if (number.length !== set.length) {
      throw new Error(ERROR_MESSAGE.invalidPattern);
    }
  },
};

export default NumberValidate;
