export default class View {
  _data;
  render(data) {
    console.log("jio")
    // if (!data) return;
    if (!this._parentElement) return;
    this._data = data;

    const markup = this._createMarkUp();

    this._clear();

    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  _clear() {
    if (this._parentElement.innerHTML === "") return;
    return (this._parentElement.innerHTML = "");
  }
}
