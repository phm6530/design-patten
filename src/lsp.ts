/**
 * 리스코프 치환원칙
 * 
 * 
반환 타입: Child의 반환 타입은 Parent보다 더 좁은 타입이어야 합니다 (공변성)
파라미터 타입: Child는 Parent보다 더 넓은 타입이어야 합니다 (반공변성)
    메서드 예외: 하위 클래스는 상위 클래스보다 더 많은 예외를 던질 수 없음
    사전조건: 하위 클래스는 더 약한 사전조건만 가능
    사후조건: 하위 클래스는 더 강한 사후조건만 가능
 */

interface TParents {
  method: (name: string) => Record<string, string>;
}

interface TParents {
  method: (name: string) => Record<string, string>;
}

class Parents implements TParents {
  // 좁은 파라미터 - 반공변성작용
  method(name: string) {
    // 좁은 반환 타입 - 공변성 작용
    return { key: "" };
  }
}

class Child extends Parents {
  // 넓은 파라미터
  override method(name: string, test?: string) {
    // 넓은 반환 타입
    return { key: "", name: "" };
  }
}

const pe = new Parents();
const values = pe.method("test");
values.key;

const ch = new Child();
const value = ch.method("test", "tt");
value.key;

function test(type: string) {}

test("tt"); // 문자열 리터럴은 string보다 좁은 타입으로 공변성 가능
test("tets");
