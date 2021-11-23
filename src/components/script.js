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
                <button class="add_item" data-id="${cards[i].id}">Добавить в корзину</button>
            </div>
            <div>
                
            </div>
        </div>
    </div>`;
    document.querySelector(".cards-wrapper").appendChild(new_card);
  }

  // document.querySelector(".hystmodal").innerHTML = "";

  // for (let i = 0; i < cards.length; i++) {
  //   const new_card = document.createElement("div");

  //   new_card.innerHTML = `
  //   <div class="popup-fade modal-layer">
  //       <div class="modal-content">
  //           <div class="modal-text modal-alignment">
  //               <div class="popup"><button data-hystclose class="popup-close">закрыть</button>
  //                   <h1>Заголовок</h1>
  //                   <p>Текст</p>
  //                   <img src="${cards[i].img}" alt="Изображение" width="400" >
  //                   <p>Ещё текст</p>
  //                   <button class="add_item" data-id="5">Добавить в корзину</button>
  //               </div>
  //           </div>
  //       </div>

  //   </div>
  //       `;
  //   document.querySelector(".hystmodal").appendChild(new_card);
  // }
}
const myarray = data.cards;

$(document).ready(function ($) {
  $(".popup-open").click(function () {
    $(".popup-fade").fadeIn();
    $("body").css({
      overflow: "hidden",
    });
    $modal.show();
    return false;
  });

  $(".popup-close").click(function () {
    $(this).parents(".popup-fade").fadeOut();
    $("body").css({
      overflow: "hidden",
      overflow: "",
    });
    return false;
  });
  $(".popup-fade").click(function (e) {
    // клик по "Закрыть"
    if ($(e.target).closest(".popup").length == 0) {
      $(this).fadeOut();
      $("body").css({
        overflow: "hidden",
        overflow: "",
      });
      return false;
    }
  });
  $(document).keydown(function (e) {
    //закрытие по esc
    if (e.keyCode === 27) {
      e.stopPropagation();
      $(".popup-fade").fadeOut();
      $("body").css({
        overflow: "hidden",
        overflow: "",
      });
    }
  });
  $(".popup-fade").click(function (e) {
    // клик по фону
    if ($(e.target).closest(".popup").length == 0) {
      $(this).fadeOut();
    }
  });
});
