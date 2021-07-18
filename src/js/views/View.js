export default class View {
  _data;
  render(data) {
    // if (!data) return;
    if (!this._parentElement) return;
    this._data = data;
    const markup = this._createMarkUp();

    this._clear();

    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  _clear() {
    return (this._parentElement.innerHTML = "");
  }
}
