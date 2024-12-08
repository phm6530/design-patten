/**
 * 인터페이스 분리 원칙
 * interface Segregation principle
 *
 * 인터페이스 분리원칙은 종류 인터페이스 끼리 분리하여
 * 불필요한 타입이나 메소드를 반영하지 않아야한다.
 *
 * 범용보다 특정 Client를 위한 여러 인터페이스가 큰 범용 인터페이스보다 낫다.
 */

interface Animal {
  speak(): string;
}

interface Bird {
  fly(): string;
}

class Egle implements Animal, Bird {
  speak(): string {
    return "quack";
  }
  fly(): string {
    return "wing";
  }
}
