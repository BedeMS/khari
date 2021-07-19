import View from "../View";

class features extends View {
  _parentElement = document.querySelector(".featured");
  _featuredMainBtn = document.querySelector(".featured__main-btn");

  constructor() {
    super();
  }

  // links for featured section
  initRender(){
      this._featuredMainBtn.href
  }
}

export default new features();
