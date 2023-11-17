const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonGrantDiscount = document.querySelector('.grant-discount')
const buttonSumAll = document.querySelector('.somar-tudo')
const filterVegan = document.querySelector('.vegan-line')

let myLi = ''

function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL',
    })
    return newValue
}

function showAll(productsArray) {
    let myLi = ''

    productsArray.forEach((product) => {
        myLi += `
            <li>
               <img src=${product.src}>
                <p>${product.name}</p>
                <p class="item-price">${formatCurrency(product.price)}</p>
            </li>
        `
    })
    list.innerHTML = myLi
}

function mapDiscounts() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: (product.price * 0.8).toFixed(2),

    }))

    showAll(newPrices)
}

function sumAllItems() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `
    <li>
        <p>O valor Total dos itens é ${formatCurrency(totalValue)}</p> 
    </li>
    `
}

function veganShow() {
    const filterVegan = menuOptions.filter((product) => product.vegan)
    showAll(filterVegan)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonGrantDiscount.addEventListener('click', mapDiscounts)
buttonSumAll.addEventListener('click', sumAllItems)
filterVegan.addEventListener('click', veganShow)