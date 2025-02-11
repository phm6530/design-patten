/**
 * 커피 팩토리 구성해보기
 *
 * 1. 재료 클래스를 이용해서 재고 관리
 * 2. 팩토리패턴 이용하기
 */

type IngrediensKeys = "shots" | "milk" | "inventory";
type CoffeeInventory = Record<IngrediensKeys, number>;
type CoffeeInfo = {
  coffee: string;
  useIngrediens: { shots: number; milk: number };
};

// 인벤토리 구현
class Inventory {
  private static instance: Inventory;
  protected ingredients: CoffeeInventory = {
    shots: 1000,
    milk: 1000,
    inventory: 1000,
  };

  // 싱글톤으로 같은거쓰게 하기
  static getInstance(): Inventory {
    if (!Inventory.instance) {
      this.instance = new Inventory();
    }

    return this.instance;
  }

  // 사용 Check + 양
  useIngrediens(key: IngrediensKeys, amount: number) {
    if (this.ingredients[key] < amount || amount <= 0) {
      throw new Error("재료가 소진되었거나 입력 수량이 정상적이지 않습니다.");
    }
    this.ingredients[key] -= amount;
    console.log(`${key} 사용: ${amount}, 남은 양: ${this.ingredients[key]}`);
    return true;
  }
}

// 커피 공장 구현
abstract class Coffee {
  protected inventory = Inventory.getInstance();
  abstract brew(): void;
}

// 라떼 틀
class Latte extends Coffee {
  constructor(private shots: number, private milk: number) {
    super();
  }

  brew() {
    try {
      this.inventory.useIngrediens("shots", this.shots || 2); //기본 라떼 샷 2잔
      this.inventory.useIngrediens("milk", this.milk || 500); //기본 500ml

      console.log("생성완료 결과 ", {
        coffee: "latte",
        useIngrediens: { shots: this.shots, milk: this.milk },
      });

      return {
        coffee: "latte",
        useIngrediens: { shots: this.shots, milk: this.milk },
      };
    } catch (error) {
      throw error;
    }
  }
}

// 커피 팩토리
abstract class CoffeeFactory {
  abstract createCoffee(
    shots: number | null,
    milkOrWater: number | null
  ): CoffeeInfo | null;
}

// 메뉴판등록
class LatteFactory extends CoffeeFactory {
  createCoffee(
    shots: number | null = null,
    milk: number | null = null
  ): CoffeeInfo | null {
    try {
      const latte = new Latte(shots ?? 2, milk ?? 500);
      return latte.brew();
    } catch (error) {
      console.error("⚠️  커피 생성 실패:", (error as Error).message);
      return null;
    }
  }
}

// 메뉴에 등록한 라떼
const latteFactory = new LatteFactory();
latteFactory.createCoffee();
latteFactory.createCoffee();
latteFactory.createCoffee();
