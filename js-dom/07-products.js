import products from './data/proucts.js';

/*
 * Создаём карточку продукта
 * - В классе продукта может быть product--on-sale product--not-available
 */


{
  /*
<article class="product">
  <h2 class="product__name">Название</h2>
  <p class="product__descr">Описание</p>
  <p product__pridct>Цена: 1111 кредитов</p>
</article>
*/
}


// const productEl = document.createElement('article');
// productEl.classList.add('product')

// const nameEl = document.createElement('h2');
// nameEl.textContent = product.name;
// nameEl.classList.add('product__name')

// const descrEl = document.createElement('p')
// descrEl.textContent = product.description
// descrEl.classList.add('product__descr')

// const priceEl = document.createElement('p')
// priceEl.textContent = `Ціна ${product.price} кредитів`
// priceEl.classList.add('product__price')

// console.log(nameEl)
// console.log(descrEl)
// console.log(priceEl)

// productEl.append(nameEl, descrEl, priceEl)

// console.log(productEl)

// document.body.appendChild(productEl)
/*
 * Пишем функцию для создания карточки продукта
 */
const productsContainerEl = document.querySelector('.js-products');

const makeProductCard = ({name, description, price}) => {
    const productEl = document.createElement('article');
    productEl.classList.add('product')

    const nameEl = document.createElement('h2');
    nameEl.textContent = name;
    nameEl.classList.add('product__name')

    const descrEl = document.createElement('p')
    descrEl.textContent = description
    descrEl.classList.add('product__descr')

    const priceEl = document.createElement('p')
    priceEl.textContent = `Ціна ${price} кредитів`
    priceEl.classList.add('product__price')

    productEl.append(nameEl, descrEl, priceEl)

    return productEl;
}

// console.log(makeProductCard(products[2]))

const elements = products.map(makeProductCard)

console.log(elements);
productsContainerEl.append(...elements)


// const makeProductCard = ({ name, description, price }) => {
//   const productEl = document.createElement('article');
//   productEl.classList.add('product');

//   const nameEl = document.createElement('h2');
//   nameEl.textContent = name;
//   nameEl.classList.add('product__name');

//   const descrEl = document.createElement('p');
//   descrEl.textContent = description;
//   descrEl.classList.add('product__descr');

//   const priceEl = document.createElement('p');
//   priceEl.textContent = `Цена: ${price} кредитов`;
//   priceEl.classList.add('product__price');

//   productEl.append(nameEl, descrEl, priceEl);

//   return productEl;
// };

// const elements = products.map(makeProductCard);

// console.log(elements);
// productsContainerEl.append(...elements);