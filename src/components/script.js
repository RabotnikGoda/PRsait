const cards = data.cards;
function render() {
  document.querySelector(".cards-wrapper").innerHTML = "";

  for (let i = 0; i < cards.length; i++) {
    const new_card = document.createElement("div");

    new_card.innerHTML = `
        <div class="product-grid">
        <div class="pic-product">
            <img class="pic-border-r" src="${cards[i].img}" alt="Italian pupa">
        </div>
        <div class="all-text-product">
            <div>
                <div class="name-product">${cards[i].name}</div> 
                <div class="prices">
                <div class="discont-price-product">${cards[i].disPrice} р./кг</div>
                <div class="price-product">${cards[i].price}</div>
                </div>
                <div class="all-discrip-text-product">
                    <div class="text-product">В цену все включено</div>
                    <div class="text-product">Вес на фото: ${cards[i].weight} кг</div>
                    <div class="text-product">Посмотрели: ${cards[i].wiews} раз</div>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    </div>`;
    document.querySelector(".cards-wrapper").appendChild(new_card);
  }
}
const myarray = data.cards;

$(document).ready(function ($) {
  $(".popup-open").click(function () {
    $(".popup-fade").fadeIn();
    return false;
  });

  $(".popup-close").click(function () {
    $(this).parents(".popup-fade").fadeOut();
    return false;
  });

  $(document).keydown(function (e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $(".popup-fade").fadeOut();
    }
  });

  $(".popup-fade").click(function (e) {
    if ($(e.target).closest(".popup").length == 0) {
      $(this).fadeOut();
    }
  });
});

// document.querySelector("button").addEventListener("click", function () {
//   document.body.style.paddingRight = getComputedStyle(
//     document.querySelector(".scroll-fix")
//   ).width;
//   document.body.classList.add("modal-show");
// });
// document
//   .querySelector("div.modal-layer")
//   .addEventListener("click", function (ev) {
//     if (this !== ev.target) return;
//     document.body.classList.remove("modal-show");
//     document.body.style.paddingRight = "0px";
//   });

// const trrt = JSON.parse(cards);
// console.log(trrt);

// let html = document.documentElement;
// let scrollPosition = window.pageYOffset;
// html.style.top = -scrollPosition + "px";
// html.classList.add("hystmodal__opened");

// html.classList.remove("hystmodal__opened");
// window.scrollTo(0, scrollPosition);
// html.style.top = "";

// class HystModal {
//   constructor(props) {
//     let defauitConfig = {
//       linkAttributeName: "data-hystmodal",
//     };
//     this.config = Object.assign(defauitConfig, props);
//     this.init();
//   }
//   static _shadow = false;
//   init() {
//     this.isOpened = false;
//     this.openedWindow = false;
//     this.modalBlock = false;
//     this.starter = false;
//     this._nextWindows = false;
//     this.scrollPosition = 0;
//     if (!HystModal._shadow) {
//       HystModal._shadow = document.createElement("div");
//       HystModal._shadow.classList.add("hystmodal_shadow");
//       document.body.appendChild(HystModal._shadow);
//     }
//     this.eventsFeeler();
//   }
//   eventsFeeler() {
//     document.addEventListener(
//       "click",
//       function (e) {
//         const clickedlink = e.target.closest(
//           "[" + this.config.linkAttributeName + "]"
//         );
//         if (e.target.closest("[data-hystclose]")) {
//           this.close();
//           return;
//         }
//       }.bind(this)
//     );
//     window.addEventListener(
//       "keydown",
//       function (e) {
//         if (e == 27 && this.isOpened) {
//           e.preventDefault();
//           this.close();
//           return;
//         }
//         if (e == 9 && this.isOpened) {
//           this.focusCatcher(e);
//           return;
//         }
//       }.bind(this)
//     );
//   }
//   open(selector) {
//     this.openedWindow = this._nextWindows;
//     this._modaBlock = this.openedWindow.querySelector(".hystmodal_window");
//     this._bodyScrollControl();
//     HystModal._shadow.classList.add("histmodal_shadow--show");
//     this.openedWindow.classList.add("hysstmodal--active");
//     this.openedWindow.setAttribute("aria-hidden", "false");
//     this.focusContol();
//     this.isOpened = true;
//   }
//   close() {
//     if (!this.isOpened) {
//       return;
//     }
//     this.openedWindow.classList.add("hystmodal--moved");
//     this.openedWindow.addEventListener(
//       "transitionend",
//       this._closeAfterTransition
//     );
//     this.openedWindow.classList.remove("hystmodal--active");
//   }

//   _closeAfterTransition() {
//     this.openedWindow.classList.remove("hystmodal--moved");
//     this.openedWindow.removeEventListener(
//       "transitionend",
//       this._closeAfterTransition
//     );
//     HystModal._shadow.classList.remove("hystmodal__shadow--show");
//     this.openedWindow.setAttribute("aria-hidden", "true");
//     this.focusContol();
//     this._bodyScrollControl();
//     this.isOpened = false;
//   }
//   _bodyScrollControl() {
//     let html = document.documentElement;
//     if (this.isOpened === true) {
//       html.classList.remove("hystmodal_opened");
//       html.style.marginRight = "";
//       window.scrollTo(0, this._scrollPosition);
//       html.style.top = "";
//       return;
//     }
//     let marginSize = window.innerWidth - html.clientWidth;
//     if (marginSize) {
//       html.style.marginRight = marginSize + "px";
//     }
//     this.scrollPosition = window.pageYOffset;
//     html.style.top = -this._scrollPosition + "px";
//     html.classList.add("histmodal_opened");
//     html.style.marginRight = "";
//   }
// }
// const myModal = new HystModal({
//   linkAttributeName: "data-histmodal",
// });
