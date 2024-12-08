class Grimpan {
  private static instance: Grimpan;

  /**private로 외부에서 선언을 금지시키기  */
  private constructor(private readonly canvas: HTMLElement | null) {}

  initalize() {}
  initalzeMenu() {}

  static getInstance(canvas: HTMLElement | null) {
    if (!this.instance) {
      this.instance = new Grimpan(canvas);
    }
    return this.instance;
  }
}

export default Grimpan;

interface IGrimpanFactory {
  createDrawing(): IDrawing;
  createSaving(): ISaving;
}

interface IDrawing {
  draw(): void;
}

interface ISaving {
  save(): void;
}

class ChromeGrimpan {
  private static instance: ChromeGrimpan;
  private drawing: IDrawing;
  private saving: ISaving;

  private constructor(factory: IGrimpanFactory) {
    this.drawing = factory.createDrawing();
    this.saving = factory.createSaving();
  }

  static getInstance(factory: IGrimpanFactory): ChromeGrimpan {
    if (!this.instance) {
      this.instance = new ChromeGrimpan(factory);
    }
    return this.instance;
  }
}
