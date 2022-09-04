const catalog = {
    1: {
        id: 1,
        name: 'Столб',
        description: 'Железный столб',
        sizes: ['1m', '2m', '3m'],
        price: 1000,
        availible: 'Да'
    },
    2: {
        id: 2,
        name: 'Забор',
        description: 'Деревянный забор',
        sizes: ['10m', '20m', '30m'],
        price: 8000,
        availible: 'Да'
    },
    3: {
        id: 3,
        name: 'Провод',
        description: 'Провод витой 3 фазы',
        sizes: ['10m', '20m', '30m'],
        price: 2000,
        availible: 'Да'
    },
    4: {
        id: 4,
        name: 'Молоток',
        description: 'Стальной молоток',
        sizes: ['20сm'],
        price: 500,
        availible: 'Да'
    },
    5: {
        id: 5,
        name: 'Шуруповерт',
        description: 'Аккумуляторный шуруповерт',
        sizes: [],
        price: 4500,
        availible: 'Да'
    }        
}
 

const basket = [
    {
        goodId: 3,
        amount: 8,
    },
    {
        goodId: 5,
        amount: 1
    }
]

// Добавление в корзину

function addTo(id, amount) {
    basket.push({'goodId': id, 'amount': amount})
    return basket
}

console.log(addTo(4, 3))

//Суммирующая функция

function total() {

    totalSum = 0
    totalAmount = 0


    for (let basketPosition = 0; basketPosition < basket.length; basketPosition++) {

        totalSum = totalSum + basket[basketPosition].amount * catalog[basket[basketPosition].goodId].price 

        totalAmount = totalAmount + basket[basketPosition].amount 

    }

    let result = 
    {
    'Общее кол-во товаров': totalAmount,
    'Общая стоимость товаров': totalSum
    }
    
     return result
}

console.log(total())

// Удаление из корзины

function delItem(id) {
    let idx = basket.findIndex(item => item.goodId == id)
    delete basket[idx]
    return basket
}

console.log(delItem(3))

// Очистка корзины

function clearBasket(x) {
    x.length = 0
    return x
}

console.log(clearBasket(basket))