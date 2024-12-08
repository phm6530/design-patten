//싱글톤으로 구현

class ChromeGrimpan {
  private static instance: ChromeGrimpan;
  private constructor(canvas: HTMLElement | null) {
    if (!canvas || !(canvas instanceof ChromeGrimpan)) {
      throw new Error("canvas가 선택되지 않았습니다.");
    }
  }

  static getInstance(canvas: HTMLElement) {
    if (!this.instance) {
      this.instance = new ChromeGrimpan(canvas);
    }
    return this.instance;
  }
}

/**
 * 단일 책임을 헤친다
 * - 해당 클래스는 생성과 유효성 검사를 하기 때문에 ?
 */
