const info = [
    {
        img: 'images/info-pic/foto-torta.jpg',
        name: 'ФОТО ТОРТА',
        text: 'Перед отправкой торта вы получаете фото торта прямо с производства. Вы будете уверены, что вы получите именно желаемый торт.'
    }, {
        img: 'images/info-pic/degust.jpg',
        name: 'ДЕГУСТАЦИИ',
        text: 'Бесплатные дегустации продукции. Вы всегда можете приехать к нам и попробовать наши начинки.'
    }, {
        img: 'images/info-pic/otslej.jpg',
        name: 'ОТСЛЕЖИВАНИЕ',
        text: 'Вам приходят смс об изменении статуса вашего заказа. Вы всегда видите, на каком этапе находится ваша продукция.'
    }, {
        img: 'images/info-pic/skidki.jpg',
        name: 'РОСТ СКИДКИ',
        text: 'Гибкие условия работы и прогрессивный процент. Ваша скидка растет в зависимости от количества покупаемых тортов.'
    }, {
        img: 'images/info-pic/cena.jpg',
        name: 'ЧЕСТНАЯ ЦЕНА',
        text: 'Никаких наценок и скрытых платежей. Цена указана с учетом оформления, декора и фигурок.'
    }, {
        img: 'images/info-pic/40min.jpg',
        name: 'ОТ 40 МИНУТ',
        text: 'Мы можем изготовить вам торт через 40 минут после оформления заказа. У нас самая высокая скорость изготовления и доставки тортов.'
    }, {
        img: 'images/info-pic/servis.jpg',
        name: 'ВЫСОКИЙ СЕРВИС',
        text: 'Все наши менеджеры - высококлассные специалисты, которые знают продукцию от и до. Вы всегда получите профессиональную консультацию и помощь в выборе.'
    }, {
        img: 'images/info-pic/kaces.jpg',
        name: 'КАЧЕСТВО',
        text: 'Наши торты всегда свежие и натуральные. Торты имеют все сертификаты качества. Заказывая торт у нас, вы заказываете торт у профессионалов.'
    },
]
for (let i = 0; i < info.length; i++) {
    const new_info = document.createElement('div');

    new_info.innerHTML = `
    <div class="info-cart">
        <div class="img-info">
        <img class="pic-border-info" src="${info[i].img}"
        </div>
        <div class="name-info">${info[i].name}</div>
        <div class="text-info">${info[i].text}</div>
    </div>`;
    document.querySelector('.info-carts').appendChild(new_info);
}
