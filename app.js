const form = document.querySelector(".search-box");
const searchArea = document.querySelector("#search-area");
const searches = document.querySelector(".searches");
const clearAllButton = document.querySelector("#clear-all");

const github = new Github();
const ui = new UI();

function eventListeners() {
  form.addEventListener("submit", showRepositories);
  document.addEventListener("DOMContentLoaded", getAllSearched);
  clearAllButton.addEventListener("click", clearLastSearches);
  searches.addEventListener("click", clearItem);
}

const showRepositories = (e) => {
  let userName = searchArea.value.trim();

  github.getData(userName)
    .then(response => {
      if (response.user.message === "Not Found") {
        ui.showAlert("Böyle bir kullanıcı bulunamadı")
      } else {
        ui.showLastSearches(userName);
        Storage.setLocalStorage(userName);
        ui.showUserInfos(response.user)
        ui.showRepos(response.repo)
      }
    })
    .catch(err => console.log(err));

  searchArea.value = "";

  e.preventDefault();
}

const getAllSearched = () => {
  let lastSearchList = Storage.getLocalStorage();

  lastSearchList.forEach(item => (
    searches.innerHTML += `
      <div class="link">
        <p>${item}</p>
        <button class="clear-item">Sil</button>
      </div>
    `
  ))

}

const clearLastSearches = () => {
  ui.clearAll();
  Storage.clearStorage();
}

const clearItem = (e) => {
  if (e.target.className === "clear-item") {
    ui.deleteItemFromUI(e.target);
    Storage.deleteItemFromStorage(e.target.previousElementSibling.textContent)
  }
}

eventListeners();
