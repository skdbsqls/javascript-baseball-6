class Compare {
  #random;

  #number;

  constructor(random, number) {
    this.#random = random;
    this.#number = number;
  }

  // 컴퓨터의 랜덤값과 사용자의 입력값 비교
  getResult() {
    let ball = 0;
    let strike = 0;

    for (let i = 0; i < 3; i++) {
      if (this.#random[i] === Number(this.#number[i])) {
        strike++;
      } else if (this.#random.includes(Number(this.#number[i]))) {
        ball++;
      }
    }
    return { ball, strike };
  }
}

export default Compare;
