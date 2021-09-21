//сортировка по id
function defSort() {
  cards.sort(function (a, b) {
    return a.id - b.id;
  });

  console.log(myarray);
}
render();

document.getElementById("testButtons").addEventListener("click", (event) => {
  switch (event.target.className) {
    case "prise-sort-min-max": {
      cards.sort(function (a, b) {
        return a.disPrice - b.disPrice;
      });
      $("#price").removeClass("prise-sort-min-max");
      $("#price").addClass("price-sort-max-min");

      console.log(myarray);
      render();
      break;
    }
    case "price-sort-max-min": {
      cards.sort(function (a, b) {
        return b.disPrice - a.disPrice;
      });
      $("#price").removeClass("price-sort-max-min");
      $("#price").addClass("prise-sort-min-max");

      console.log(myarray);
      render();
      break;
    }
    case "wiews-sort-min-max": {
      cards.sort(function (a, b) {
        return b.wiews - a.wiews;
      });
      $("#wiews").removeClass("wiews-sort-min-max");
      $("#wiews").addClass("wiews-sort-max-min");

      console.log(myarray);
      render();
      break;
    }
    case "wiews-sort-max-min": {
      cards.sort(function (a, b) {
        return a.wiews - b.wiews;
      });
      $("#wiews").removeClass("wiews-sort-max-min");
      $("#wiews").addClass("wiews-sort-min-max");

      console.log(myarray);
      render();
      break;
    }
    case "weight-sort-min-max": {
      cards.sort(function (a, b) {
        return a.weight - b.weight;
      });
      $("#weight").removeClass("weight-sort-min-max");
      $("#weight").addClass("weight-sort-max-min");

      console.log(myarray);
      render();
      break;
    }
    case "weight-sort-max-min": {
      cards.sort(function (a, b) {
        return b.weight - a.weight;
      });
      $("#weight").removeClass("weight-sort-max-min");
      $("#weight").addClass("weight-sort-min-max");

      console.log(myarray);
      render();
      break;
    }

    default:
      cards.sort(function (a, b) {
        return a.id - b.id;
      });
      console.log(myarray);
      render();
  }
});
