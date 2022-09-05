class Github {

  constructor() {
    this.url = "https://api.github.com/users/";
  }

  async getData(userName) {
    const responseUser = await fetch(`${this.url}${userName}`);
    const responseRepo = await fetch(`${this.url}${userName}/repos`);

    const dataUser = await responseUser.json();
    const dataRepo = await responseRepo.json();

    return {
      user: dataUser,
      repo: dataRepo
    }
  }

}