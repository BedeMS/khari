import categoryView from "./categoryView";

class NavigationView {
  _nav = document.querySelector(".nav");
  _navContainer = document.querySelector(".nav-container-side");
  _product = document.querySelectorAll(".product");
  _navBtn = document.querySelector(".header__nav-btn");
  _man = document.querySelectorAll(".man");

  addHandlerNav(handler) {
    [this._navContainer, this._navBtn].forEach((el) => {
      el.addEventListener("click", () => {
        handler();
        // console.log("working");
      });
    });
  }

  // addHandlerCategory(handler) {
  //   window.onbeforeunload = function () {
  //     if ((window.location.href = "man.html")) {
  //       handler("man");
  //       // return;
  //     } else if ((window.location.href = "woman.html")) {
  //       handler("woman");
  //     }
  //   };

    // document.addEventListener("click", (e) => {
    //   if (e.target.classList.contains("man")) {
    //     // e.preventDefault()
    //     handler("man");
    //   } else if (e.target.classList.contains("woman")) {
    //     // handler("woman");
    //   }
    // });
    // });
  // }

  toggleNav() {
    this._nav.classList.toggle("nav-active");
    this._navContainer.classList.toggle("nav-container-active");
  }
}

export default new NavigationView();
