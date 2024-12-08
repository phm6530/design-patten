/**
 * 개방 폐쇄 원칙
 */

class User {
  constructor(
    private readonly nickName: string,
    private readonly selectClass: Unit
  ) {}

  getUserCrector() {
    return {
      nickname: this.nickName,
      class: this.selectClass.classType,
    };
  }

  getSkillTree() {
    return {
      ...this.selectClass.skill(),
    };
  }
}

// 요닛 스킬
interface Unit {
  classType: string;
  skill(): Record<string, string>;
}

//워리어
class Warrer implements Unit {
  classType: string = "warrer";
  skill() {
    return {
      hit: "검술",
    };
  }
}

//아처
class Archer implements Unit {
  classType: string = "archer";
  skill() {
    return {
      hit: "화살",
    };
  }
}

//캐릭터 생성 유틸
class ClassUtil {
  private static creators: Map<string, Unit> = new Map();

  static createUnit(type: string): Unit {
    const creator = this.creators.get(type);
    if (!creator) throw new Error("Invalid class type");
    return creator;
  }

  // class 등록
  static registerClass(classType: Unit) {
    this.creators.set(classType.classType, classType);
  }

  static getClass() {
    return this.creators;
  }
}

//워리어 등록
ClassUtil.registerClass(new Warrer());
ClassUtil.registerClass(new Archer());

const selectClass = ClassUtil.createUnit("warrer");

const user = new User("전사", selectClass);
const userCreator = user.getUserCrector();

const skills = user.getSkillTree();
console.log(skills);

function fetch(): string {
  try {
    /**fetch 가정 */
    return "test";
  } catch (error) {
    throw new Error("Error");
  }
}
console.log(fetch());

//OCP는 지키면서 DIP는 위반하는 예시
//OCP는 확장에는 열려있어야하며, 변경에는 폐쇄적이어야 한다.

interface Default {
  view(): void;
}

class OcpFirst implements Default {
  view() {
    console.log("first");
  }
}

class OcpSecond implements Default {
  view(): void {
    console.log("Second");
  }
}

class OrderClass {
  constructor(private targetOcp: Default) {}
  getView() {
    return this.targetOcp.view();
  }
}

export {};
