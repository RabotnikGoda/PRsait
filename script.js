
const cards = [
    {
        img: 'images/img-proj/in16.jpg',
        name: 'Торт Ежовое счастье',
        disPrice: '990',
        price: '1230  р./кг',
        weight: '3,5',
        wiews: '1400',
    },
    {
        img: 'images/img-proj/2504_large.jpg',
        name: 'Торт Ягодные будни',
        disPrice: '1470',
        price: '',
        weight: '2',
        wiews: '1560',
    },
    {
        img: 'images/img-proj/265.jpg',
        name: 'Торт Рождественские будни',
        disPrice: '990',
        price: '1200  р./кг',
        weight: '3',
        wiews: '961',
    },
    {
        img: 'images/img-proj/2512_large.jpg',
        name: 'Торт Ягодный коктейль',
        disPrice: '1300',
        price: ' ',
        weight: '2',
        wiews: '2160',
    },
    {
        img: 'images/img-proj/2515_large.jpg',
        name: 'Торт Ягодный рассвет',
        disPrice: '1390',
        price: ' ',
        weight: '2',
        wiews: '1433',
    },
    {
        img: 'images/img-proj/id100550.jpg',
        name: 'Торт Ягоды и белый шоколад',
        disPrice: '1460',
        price: ' ',
        weight: '4',
        wiews: '1690',
    }, {
        img: 'images/img-proj/id100554.jpg',
        name: 'Торт Ягодный тандем',
        disPrice: '1340',
        price: '1460 р./кг',
        weight: '3',
        wiews: '1560',
    },
    {
        img: 'images/img-proj/pupa.jpg',
        name: 'Торт Ведьмино вариво',
        disPrice: '1560',
        price: ' ',
        weight: '3',
        wiews: '1300',
    }, {
        img: 'images/img-proj/ng-shary.jpg',
        name: 'Торт Святящиеся шары',
        disPrice: '1200',
        price: '1450 р./кг',
        weight: '2',
        wiews: '1560',
    }, {
        img: 'images/img-proj/uini109.jpg',
        name: 'Торт Ягодный фреш',
        disPrice: '1200',
        price: ' ',
        weight: '1',
        wiews: '1507',
    }, {
        img: 'images/img-proj/untitled-1082.jpg',
        name: 'Торт Янтарый осколок',
        disPrice: '1240',
        price: '1580 р./кг',
        weight: '3',
        wiews: '2109',
    }, {
        img: 'images/img-proj/untitled-2259.jpg',
        name: 'Торт ягодный шик',
        disPrice: '1433',
        price: ' ',
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
    document.querySelector('.cards-wrapper').appendChild(new_card);
}
var btn = document.getElementById('buton');
var toggle = false;
