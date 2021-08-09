var data = {
  id: "",
  cards: [
    {
      id: 1,
      img: "images/img-proj/in16.jpg",
      filling: [],
      name: "Торт Ежовое счастье",
      disPrice: 990,
      price: "1230  р./кг",
      weight: 3.5,
      wiews: 1400,
    },
    {
      id: 10,
      img: "images/img-proj/2504_large.jpg",
      filling: [],
      name: "Торт Ягодные будни",
      disPrice: 1470,
      price: "",
      weight: 2,
      wiews: 1560,
    },
    {
      id: 3,
      img: "images/img-proj/265.jpg",
      filling: [],
      name: "Торт Рождественские будни",
      disPrice: 991,
      price: "1200  р./кг",
      weight: 3,
      wiews: 961,
    },
    {
      id: 4,
      img: "images/img-proj/2512_large.jpg",
      filling: [],
      name: "Торт Ягодный коктейль",
      disPrice: 1300,
      price: " ",
      weight: 2,
      wiews: 2160,
    },
    {
      id: 5,
      img: "images/img-proj/2515_large.jpg",
      filling: [],
      name: "Торт Ягодный рассвет",
      disPrice: 1390,
      price: " ",
      weight: 2,
      wiews: 1433,
    },
    {
      id: 6,
      img: "images/img-proj/id100550.jpg",
      filling: [],
      name: "Торт Ягоды и белый шоколад",
      disPrice: 1460,
      price: " ",
      weight: 4,
      wiews: 1690,
    },
    {
      id: 7,
      img: "images/img-proj/id100554.jpg",
      filling: [],
      name: "Торт Ягодный тандем",
      disPrice: 1340,
      price: "1460 р./кг",
      weight: 3,
      wiews: 1560,
    },
    {
      id: 8,
      img: "images/img-proj/pupa.jpg",
      filling: [],
      name: "Торт Ведьмино вариво",
      disPrice: 1560,
      price: " ",
      weight: 3,
      wiews: 1300,
    },
    {
      id: 9,
      img: "images/img-proj/ng-shary.jpg",
      filling: [],
      name: "Торт Святящиеся шары",
      disPrice: 1200,
      price: "1450 р./кг",
      weight: 2,
      wiews: 1560,
    },
    {
      id: 2,
      img: "images/img-proj/uini109.jpg",
      filling: [],
      name: "Торт Ягодный фреш",
      disPrice: 1200,
      price: " ",
      weight: 1,
      wiews: 1507,
    },
    {
      id: 11,
      img: "images/img-proj/untitled-1082.jpg",
      filling: [],
      name: "Торт Янтарый осколок",
      disPrice: 1240,
      price: "1580 р./кг",
      weight: 3,
      wiews: 2109,
    },
    {
      id: 12,
      img: "images/img-proj/untitled-2259.jpg",
      filling: [],
      name: "Торт ягодный шик",
      disPrice: 1433,
      price: " ",
      weight: 1,
      wiews: 1700,
    },
  ],
  filling: {
    peach: {
      fillingName: "Начинка Персик",
      description:
        "Нежные, кокосовые бисквиты для твоей мамаши, в сочитании с персиком кремом для твоего папаши.",
      fillingPrice: 40,
      compound:
        "мука льняная, апельсиновый сок, растительное масло, фруктоза, сода, маракуйя, персик, желатин, растительные сливки.",
      fillingImg: "images/diettopping/persikmarak.jpg",
    },
    cherry: {
      fillingName: "Начинка Вишня",
      description:
        "Нежные, апельсиновые бисквиты из льняной муки с прослойками свежей, дикой вишни, кули из клубники и сливок растительного происхождения.",
      fillingPrice: 40,
      compound:
        "льняная мука, апельсиновый сок, растительное масло, сода, фруктоза, клубника, вишня, растительные сливки, желатин",
      fillingImg: "images/diettopping/post-vishniya.jpg",
    },
    cranberryCinnamon: {
      fillingName: "Начинка Клюква/Корица",
      description:
        "Нежные, кокосовые бисквиты из льняной муки с прослойками свежей клюквы, корицы и сливок растительного происхождения!",
      fillingPrice: 50,
      compound:
        "льняная мука, апельсиновый сок, растительное масло, сода, фруктоза, клюква, корица, растительные сливки, желатин.",
      fillingImg: "images/diettopping/Post-klukva-koritsa.jpg",
    },
    poppy: {
      fillingName: "Начинка Маковая",
      description:
        "Нежные, ванильные бисквиты в сочетании со сгущеным молоком с добавлением мака.",
      fillingPrice: 50,
      compound:
        "яйцо, сахар, ваниль, сгущеное молоко, мак, растительные сливки.",
      fillingImg: "images/diettopping/Makovaia.jpg",
    },
    chiaSeeds: {
      fillingName: "Начинка с семенами Чиа",
      description:
        "Низкокаллорийные бисквиты в сочетании с нежным диетическим пуддингом с добавлением семян Чиа.",
      fillingPrice: 130,
      compound:
        "яйцо, мука, сахар, ваниль, желатин, сливки, семена чиа, молоко.",
      fillingImg: "images/diettopping/chia.jpg",
    },
    melonStrawberry: {
      fillingName: "Начинка Дыня/Клубника",
      description:
        "Шоколадные бисквиты с прослойками Cream Cheese и добавлением спелой дыни и свежей клубники.",
      fillingPrice: 50,
      compound:
        "яйцо, сахар, мука, какао, желатин, клубника, дыня, ваниль, Cream Cheese.",
      fillingImg: "images/topping/3_chokolate.jpg",
    },
    threeChocolates: {
      fillingName: "Три шоколада",
      description:
        "Деликатная бисквитная основа в сочетании с муссом на основе трех шоколадов (белого, молочного и горького)",
      fillingPrice: 90,
      compound:
        "Масло сливочное, Мука пшеничная, Разрыхлитель, Сахар, Сахар ванильный, Соль, Шоколад",
      fillingImg: "images/topping/3_chokolate.jpg",
    },
    strawberryYogurt: {
      fillingName: "Йогуртовая с Клубникой",
      description:
        "Любителям легких низкокалорийных десертов обязательно стоит попробовать нашу йогуртовую начинку! Ничего лишнего, только воздушный бисквит и легкий йогуртовый и клубничный муссы.",
      fillingPrice: 60,
      compound: "яйцо, сахар, ваниль, сгущеное молоко, сливки.",
      fillingImg: "images/topping/iog-malina.jpg",
    },
    strawberryMint: {
      fillingName: "Начинка Мята/Клубника",
      description:
        "Нежные, шоколадно-апельсиновые бисквиты в сочетании с прослойками Cream Chese с добавлением свежей мяты и сочной клубники.",
      fillingPrice: 50,
      compound:
        "Состав: апельсин, яйцо, сахар, мука, какао, клубника, желатин, мята, Cream Chese.",
      fillingImg: "images/topping/klyb-miata-apelsin.jpg",
    },
    raspberryCinnamon: {
      fillingName: "Начинка Малина/Корица",
      description:
        "Сливочные бисквиты с прослойками Cream Cheese и добавлением свежей малины и корицы.",
      fillingPrice: 50,
      compound: "яйцо, сахар, мука, ваниль, Cream Chese, малина, корица.",
      fillingImg: "",
    },
    creamyRainbow: {
      fillingName: "Радужная",
      description:
        "Разноцветные бисквитные коржи в сочетании с белоснежным муссом на основе сливочного сыра.",
      fillingPrice: 50,
      compound: "Сливочный сыр, творог, сахар, ваниль.",
      fillingImg: "images/topping/raduzhnaya.jpg",
    },
    curdCherry: {
      fillingName: "Начинка Творожно/Вишневая",
      description:
        "Легкий и воздушный творожно-сметанный мусс с прослойкой вишневого мусса и кусочками вишни.",
      fillingPrice: 50,
      compound: "творог, ваниль, пишнёвое варенье.",
      fillingImg: "images/topping/tv-v.jpg",
    },
  },
};

// data = { id: "",
//     "version": "0.0.16",
//     "menu": [
//         { id: "",
//             "name": "Овощной",
//             "description": "Соус и овощи на выбор",
//             "image": "i/sandwiches/ovoshnoy.png",
//             "price": 105,
//             "category": "sandwiches",
//             "market": "subway",
//             "type": "multiple",
//             "weight": 1,
//             "components": { id: "",
//                 "size": { id: "",},
//                 "bread": "whit-italian",
//                 "vegetable": [],
//                 "sauce": [],
// "filling": []
