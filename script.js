/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */

const sendInput = document.querySelector('#input');
const containerProducts = document.querySelector('.groceries');


sendInput.addEventListener('keydown', function(event) {
    if(event.key == 'Enter') {

    const groceryListText = sendInput.value;

    const newProduct = document.createElement ('div');
    newProduct.classList.add('products');
    newProduct.textContent = groceryListText;

    containerProducts.append(newProduct);

    sendInput.value = '';

        const products = document.querySelectorAll('.products');

        for (let item of products) { 
            item.addEventListener('click', function () {
              item.classList.toggle('done');
            })
        }
      
    }
  })

