import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constants/message.js";

const OutputView = {
  // 게임 시작 메시지 출력
  printStart() {
    Console.print(OUTPUT_MESSAGE.start);
  },
  // 게임 종료 메시지 출력
  printEnd() {
    Console.print(OUTPUT_MESSAGE.end);
  },
  // 게임 힌트 메시지 출력
  printNothing() {
    Console.print(OUTPUT_MESSAGE.none);
  },
  printBall(ball) {
    Console.print(OUTPUT_MESSAGE.ball(ball));
  },
  printStrike(strike) {
    Console.print(OUTPUT_MESSAGE.strike(strike));
  },
  printBoth(ball, strike) {
    Console.print(OUTPUT_MESSAGE.both(ball, strike));
  },
};

export default OutputView;
