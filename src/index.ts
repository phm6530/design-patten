// 시멘트 클래스
abstract class Grimpan {
  protected static instance: Grimpan;
  protected constructor(canvas: HTMLCanvasElement | null) {
    if (!canvas) {
      throw new Error("canvas 엘리먼트를 입력하세요..");
    }
  }

  static getInstace(canvas: HTMLCanvasElement) {}
}

// Factory..
abstract class Factory {
  abstract createGrimpan(canvas: HTMLCanvasElement): Grimpan;
}

//팩토리 자식 생성
class A_Factory extends Factory {
  override createGrimpan(canvas: HTMLCanvasElement) {
    return SingleTon.getInstace(canvas);
  }
}

// SingleTon
class SingleTon extends Grimpan {
  protected static override instance: SingleTon;

  /**
   * 단일책임 원칙을 위반할 수 있음..
   * 싱글톤은 보통 하나의 인스턴스 생성을 하기위해 강결합 되어있으며,
   *
   * 1. 인스턴스가 없을 때 새로 생성하는 책임
   * 2. 기존 인스턴스를 반환하는 책임
   * 두가지 책임이라서 단일책임 위반..
   */

  static override getInstace(canvas: HTMLCanvasElement) {
    if (!canvas) {
      SingleTon.instance = new SingleTon(canvas);
    }
    return SingleTon.instance;
  }
}

const FaceotryA = new A_Factory().createGrimpan(
  document.querySelector("canvas") as HTMLCanvasElement
);
