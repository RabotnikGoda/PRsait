
const cards = [
    {
        img: 'images/img-proj/pupa.jpg',
        name: 'Торт Ведьмино вариво',
        price: '1560',
        weight: '3',
        wiews: '1300',
    },
    {
        img: 'images/img-proj/in16.jpg',
        name: 'Торт Ежовое счастье',
        price: '1230',
        weight: '3,5',
        wiews: '1400',
    },
    {
        img: 'images/img-proj/2504_large.jpg',
        name: 'Торт Ягодные будни',
        price: '1470',
        weight: '2',
        wiews: '1560',
    },
    {
        img: 'images/img-proj/265.jpg',
        name: 'Торт Рождественские будни',
        price: '1200',
        weight: '3',
        wiews: '961',
    },
    {
        img: 'images/img-proj/2512_large.jpg',
        name: 'Торт Ягодный коктейль',
        price: '1300',
        weight: '2',
        wiews: '2160',
    },
    {
        img: 'images/img-proj/2515_large.jpg',
        name: 'Торт Ягодный рассвет',
        price: '1390',
        weight: '2',
        wiews: '1433',
    },
    {
        img: 'images/img-proj/id100550.jpg',
        name: 'Торт Ягоды и белый шоколад',
        price: '1460',
        weight: '4',
        wiews: '1690',
    }, {
        img: 'images/img-proj/id100554.jpg',
        name: 'Торт Ягодный тандем',
        price: '1460',
        weight: '3',
        wiews: '1560',
    }, {
        img: 'images/img-proj/ng-shary.jpg',
        name: 'Торт Святящиеся шары',
        price: '1450',
        weight: '2',
        wiews: '1560',
    }, {
        img: 'images/img-proj/uini109.jpg',
        name: 'Торт Ягодный фреш',
        price: '1200',
        weight: '1',
        wiews: '1507',
    }, {
        img: 'images/img-proj/untitled-1082.jpg',
        name: 'Торт Янтарый осколок',
        price: '1580',
        weight: '3',
        wiews: '2109',
    }, {
        img: 'images/img-proj/untitled-2259.jpg',
        name: 'Торт ягодный шик',
        price: '1430',
        weight: '1',
        wiews: '1700',
    },
]
for (let i = 0; i < cards.length; i++) {
    const new_card = document.createElement('div');

    new_card.innerHTML = `
    <div class="product-grid">
    <div class="pic-product">
        <img class="pic-border-r" src="${cards[i].img}" alt="Italian pupa">
    </div>
    <div class="all-text-product">
        <div>
            <div class="name-product">${cards[i].name}</div> 
            <div class="price-product">${cards[i].price} р./кг</div>
            <div class="all-discrip-text-product">
                <div class="text-product">В цену все включено</div>
                <div class="text-product">Вес на фото: ${cards[i].weight} кг</div>
                <div class="text-product">Посмотрели: ${cards[i].wiews} раз</div>
            </div>
        </div>
        <div>
            <div class="container-buttom">
                <div class="button">Заказать</div>
            </div>

        </div>
    </div>
</div>`;
    document.querySelector('.cards-wrapper').appendChild(new_card);
}

