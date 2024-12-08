class IEGrimpan {
  private static instance: IEGrimpan;
  private constructor(canvas: HTMLElement | null) {
    if (!canvas || !(canvas instanceof ChromeGrimpan)) {
      throw new Error("canvas가 선택되지 않았습니다.");
    }
  }

  static getInstance(canvas: HTMLElement) {
    if (!this.instance) {
      this.instance = new IEGrimpan(canvas);
    }
    return this.instance;
  }
}

export default IEGrimpan;
