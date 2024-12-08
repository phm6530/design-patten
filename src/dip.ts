/**
 * 의존 역전 원칙 Dependency inversion Principle
 * 여러개의 캔버스를 받는다라고 가정
 */

// 추상화 계층 - 인터페이스 정의
interface Canvas {
  do(): void;
  view(): void;
}

// 저수준 모듈 - 구체적인 구현
class Grimpan implements Canvas {
  do(): string {
    return "그림그리기";
  }
  view(): string {
    return "뷰어";
  }
}

// 고수준 모듈
class OrderClass {
  constructor(private canvas: Canvas) {} // 추상화에 의존

  canvasView() {
    return console.log(this.canvas.view());
  }
}
