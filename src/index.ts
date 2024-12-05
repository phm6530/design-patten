/**
 * 싱글톤 패턴을 사용하는 이유?
 * 전역적으로 하나의 인스턴스만 있어야할 때,
 */

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

const canvas1 = { id: "canvas1" } as HTMLElement;
const canvas2 = { id: "canvas2" } as HTMLElement;

const instance1 = Grimpan.getInstance(canvas1);
const instance2 = Grimpan.getInstance(canvas2);

console.log(instance1 === instance2);

export default Grimpan;
