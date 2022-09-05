class UI {

  constructor() {
    this.repoList = null;
  }

  showUserInfos(person) {
    const user = document.querySelector(".user");
    user.innerHTML = `
      <img src=${person.avatar_url} style="width: 200px; height: 200px" alt="#">
      <div class="infos">
        <p>Email: ${person.email}</p>
        <p>Blog: ${person.blog}</p>
        <p>Public Repos: ${person.public_repos}</p>
      </div>
      `
  }

  showRepos(repoList) {
    const repos = document.querySelector(".repos");
    repos.innerHTML = "";

    repoList.forEach(repo => (
      repos.innerHTML +=
      `
      <div class="repo">
        <a href=${repo.html_url} target="_blank">${repo.name}</a>
        <div id="stars">Starlar <span>${repo.stargazers_count}</span></div>
        <div id="forks">Forklar <span>${repo.forks_count}</span></div>
      </div>
      `
    ));
  }

  showAlert(message) {
    const alert = document.querySelector(".alert");

    const p = document.createElement("p");
    p.textContent = message;

    alert.append(p);

    setTimeout(() => {
      alert.remove();
    }, 2000);

  }

  showLastSearches(value) {
    const searches = document.querySelector(".searches");

    let list = Storage.getLocalStorage();

    if (!list.includes(value)) {
      const div = document.createElement("div");
      div.className = ("link");

      const p = document.createElement("p");
      p.textContent = value;

      div.append(p);
      searches.append(div);
    }
  }

  clearAll() {
    const searches = document.querySelector(".searches");

    while (searches.firstElementChild !== null) {
      searches.firstElementChild.remove();
    }
  }
}