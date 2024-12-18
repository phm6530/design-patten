/**
 * 싱글톤 패턴을 사용하는 이유?
 * 전역적으로 하나의 인스턴스만 있어야할 때,
 */

/**
 * SOLID 객체지향 원칙
 * SRP
 * 단일 책임 원칙 (Single reponsibility principle)
 *
 */

const fetchData = {
  email: "squirrl309n@naver.com",
  name: "hm",
  profileImg: null,
};

class Post {
  constructor(
    private readonly id: number,
    private readonly title: string,
    private readonly menber: Member
  ) {}

  getId() {
    return this.id;
  }
  getTitle() {
    return this.title;
  }
  getAuthorEmail() {
    return this.menber.getEmail();
  }
}

class PostRepository {
  constructor(private readonly member: Member) {}

  async getPosts(): Promise<Post[]> {
    try {
      const email = this.member.getEmail();
      // 데이터 fetch 로직...
      const data = [
        { id: 1, title: "게시물" },
        { id: 2, title: "게시물2" },
      ];

      return data.map((item) => new Post(item.id, item.title, this.member));
    } catch (error) {
      throw new Error("잘못된 요청");
    }
  }
}

// 유저
class Member {
  constructor(
    private readonly email: string,
    private readonly name: string,
    private readonly profileImg: string | null
  ) {}

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }

  getProfileImg() {
    return this.profileImg;
  }
}

const user = new Member("squirrel309@naver.com", "박현민", null);
