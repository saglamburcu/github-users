class Storage {

  static setLocalStorage(value) {
    let searched = this.getLocalStorage();

    if (!searched.includes(value)) {
      searched.push(value);
    }

    localStorage.setItem("lastSearches", JSON.stringify(searched));
  }

  static getLocalStorage() {

    let searchList;

    if (localStorage.getItem("lastSearches") === null) {
      searchList = [];
    } else {
      searchList = JSON.parse(localStorage.getItem("lastSearches"))
    }

    return searchList;
  }

  static clearStorage() {
    localStorage.removeItem("lastSearches");
  }
}