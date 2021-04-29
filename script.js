const cards = [
    {
        img: 'images/pupa.jpg',
        name: 'сладкий рулет',
        price: '200',
        weight: '0,2',
        wiews: '1300',
    },
    {
        img: 'images/in16.jpg',
        name: 'сладкий рулет2',
        price: '200',
        weight: '0,2',
        wiews: '1400',
    },
    {
        img: 'images/pupa.jpg',
        name: 'сладкий рулет3',
        price: '200',
        weight: '0,2',
        wiews: '1560',
    },
    {
        img: 'images/pupa.jpg',
        name: 'сладкий рулет3',
        price: '200',
        weight: '0,2',
        wiews: '1560',
    },
    {
        img: 'images/pupa.jpg',
        name: 'сладкий рулет3',
        price: '200',
        weight: '0,2',
        wiews: '1560',
    },
    {
        img: 'images/pupa.jpg',
        name: 'сладкий рулет3',
        price: '200',
        weight: '0,2',
        wiews: '1560',
    },
    {
        img: 'images/pupa.jpg',
        name: 'сладкий рулет3',
        price: '200',
        weight: '0,2',
        wiews: '1560',
    }, {
        img: 'images/pupa.jpg',
        name: 'сладкий рулет3',
        price: '200',
        weight: '0,2',
        wiews: '1560',
    }, {
        img: 'images/pupa.jpg',
        name: 'сладкий рулет3',
        price: '200',
        weight: '0,2',
        wiews: '1560',
    }, {
        img: 'images/pupa.jpg',
        name: 'сладкий рулет3',
        price: '200',
        weight: '0,2',
        wiews: '1560',
    }, {
        img: 'images/pupa.jpg',
        name: 'сладкий рулет3',
        price: '200',
        weight: '0,2',
        wiews: '1560',
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