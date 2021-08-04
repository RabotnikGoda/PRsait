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
                <div class="container-buttom">
                    <div class="button" id="checkout">Заказать</div>
                </div>
            </div>
        </div>
    </div>`;
    document.querySelector(".cards-wrapper").appendChild(new_card);
  }
}
const myarray = data.cards;

// function defSort() {
//   cards.sort(function (a, b) {
//     return a.id - b.id;
//   });
//   console.log(myarray);
// }
// render();
// function boba() {
//   if (document.getElementById("price").className == "test1") {
//     $(".test1").click(function defSort() {
//       cards.sort(function (a, b) {
//         return a.disPrice - b.disPrice;
//       });
//       $("#price").removeClass("test1");
//       $(this).addClass("test2");

//       console.log(myarray);
//       render();
//     });
//   } else {
//     $(".test2").click(function defSort2() {
//       cards.sort(function (a, b) {
//         return b.disPrice - a.disPrice;
//       });
//       $("#price").removeClass("test2");
//       $(this).addClass("test1");

//       console.log(myarray);
//       render();
//     });
//   }
// }

// $("#weight-button").click(function defSort() {
//   cards.sort(function (a, b) {
//     return a.weight - b.weight;
//   });
//   console.log(myarray);
//   render();
// });

// $("#pop-button").click(function defSort() {
//   cards.sort(function (a, b) {
//     return b.wiews - a.wiews;
//   });
//   console.log(myarray);
//   render();
// });
