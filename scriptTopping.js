const dietTopping = [
    {
        img: 'images/diettopping/persikmarak.jpg',
        name: 'Начинка Персик',
        text: 'Нежные, кокосовые бисквиты для твоей мамаши, в сочитании с персиком кремом для твоего папаши.',
        structure: 'Состав: мука льняная, апельсиновый сок, растительное масло, фруктоза, сода, маракуйя, персик, желатин, растительные сливки.',
    }, {
        img: 'images/diettopping/post-vishniya.jpg',
        name: 'Начинка Вишня',
        text: 'Нежные, апельсиновые бисквиты из льняной муки с прослойками свежей, дикой вишни, кули из клубники и сливок растительного происхождения.',
        structure: 'Состав: льняная мука, апельсиновый сок, растительное масло, сода, фруктоза, клубника, вишня, растительные сливки, желатин.',
    }, {
        img: 'images/diettopping/Post-klukva-koritsa.jpg',
        name: 'Начинка Клюква/Корица',
        text: 'Нежные, кокосовые бисквиты из льняной муки с прослойками свежей клюквы, корицы и сливок растительного происхождения!',
        structure: 'Состав: льняная мука, апельсиновый сок, растительное масло, сода, фруктоза, клюква, корица, растительные сливки, желатин.',
    },
    {
        img: 'images/diettopping/Makovaia.jpg',
        name: 'Начинка Маковая',
        text: 'Нежные, ванильные бисквиты в сочетании со сгущеным молоком с добавлением мака. (+50 ₽/кг)',
        structure: 'Состав: яйцо, сахар, ваниль, сгущеное молоко, мак, растительные сливки.',
    },
    {
        img: 'images/diettopping/chia.jpg',
        name: 'Начинка с семенами Чиа',
        text: 'Низкокаллорийные бисквиты в сочетании с нежным диетическим пуддингом с добавлением семян Чиа. (+130 ₽/кг)',
        structure: 'Состав: яйцо, мука, сахар, ваниль, желатин, сливки, семена чиа, молоко.',
    },
    {
        img: 'images/diettopping/Dynia-klybnika.jpg',
        name: 'Начинка Дыня/Клубника',
        text: 'Шоколадные бисквиты с прослойками Cream Cheese и добавлением спелой дыни и свежей клубники. (+50 ₽/кг)',
        structure: 'Состав: яйцо, сахар, мука, какао, желатин, клубника, дыня, ваниль, Cream Cheese.',
    },

    // {
    //     img: 'images',
    //     name: '',
    //     text: '',
    //     structure: '',
    // },

]

for (let i = 0; i < dietTopping.length; i++) {
    const new_dietTopping = document.createElement('div');

    new_dietTopping.innerHTML = `
    <div class="topping-grid">
    <div class="pic-topping">
        <img class="pic-border-topping" src="${dietTopping[i].img}" alt="Italian DietPupa">
    </div>
    <div class="all-text-topping">
        <div>
            <div class="name-topping">${dietTopping[i].name}</div>
            <div class="text-topping">${dietTopping[i].text}</div>

            <div class="structure-topping">${dietTopping[i].structure}</div>
        </div>
    </div>
</div>`;

    document.querySelector('.cards-wrapper-diettopping').appendChild(new_dietTopping);
}
const topping = [
    {
        img: 'images/topping/3_chokolate.jpg',
        name: 'Три шоколада',
        text: 'Деликатная бисквитная основа в сочетании с муссом на основе трех шоколадов (белого, молочного и горького). (+90 ₽/кг)',
        structure: 'Состав: Масло сливочное, Мука пшеничная, Разрыхлитель, Сахар, Сахар ванильный, Соль, Шоколад',
    },
    {
        img: 'images/topping/iog-malina.jpg',
        name: 'Йогуртовая с Клубникой',
        text: 'Любителям легких низкокалорийных десертов обязательно стоит попробовать нашу йогуртовую начинку! Ничего лишнего, только воздушный бисквит и легкий йогуртовый и клубничный муссы.',
        structure: 'Состав: яйцо, сахар, ваниль, сгущеное молоко, сливки.',
    },
    {
        img: 'images/topping/klyb-miata-apelsin.jpg',
        name: 'Начинка Мята/Клубника',
        text: 'Нежные, шоколадно-апельсиновые бисквиты в сочетании с прослойками Cream Chese с добавлением свежей мяты и сочной клубники. (+50 ₽/кг)',
        structure: 'Состав: Состав: апельсин, яйцо, сахар, мука, какао, клубника, желатин, мята, Cream Chese.',
    }, {
        img: 'images/topping/Mal-kor-iogyrt.jpg',
        name: 'Начинка Малина/Корица',
        text: 'Сливочные бисквиты с прослойками Cream Cheese и добавлением свежей малины и корицы. (+50 ₽/кг)',
        structure: 'Состав: яйцо, сахар, мука, ваниль, Cream Chese, малина, корица.',
    }, {
        img: 'images/topping/raduzhnaya.jpg',
        name: 'Радужная',
        text: 'Разноцветные бисквитные коржи в сочетании с белоснежным муссом на основе сливочного сыра. (+50 ₽/кг)',
        structure: 'Состав:   ',
    }, {
        img: 'images/topping/tv-v.jpg',
        name: 'Начинка Творожно/Вишневая',
        text: 'Легкий и воздушный творожно-сметанный мусс с прослойкой вишневого мусса и кусочками вишни.',
        structure: 'Состав:',
    },
]
for (let i = 0; i < topping.length; i++) {
    const new_topping = document.createElement('div');

    new_topping.innerHTML = `
    <div class="topping-grid">
    <div class="pic-topping">
        <img class="pic-border-topping" src="${topping[i].img}" alt="Italian Pupa">
    </div>
    <div class="all-text-topping">
        <div>
            <div class="name-topping">${topping[i].name}</div>
            <div class="text-topping">${topping[i].text}</div>

            <div class="structure-topping">${topping[i].structure}</div>
        </div>
    </div>
</div>`;

    document.querySelector('.cards-wrapper-topping').appendChild(new_topping);
}