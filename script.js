/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */

const sendInput = document.querySelector('#input');
const containerProducts = document.querySelector('.items');

sendInput.addEventListener('keydown', function (event) {
    if(event.key == 'Enter') {

        const newGroceries = sendInput.value;

        const newGroceriesWrapper = document.createElement ('div');
        newGroceriesWrapper.textContent = newGroceries;
      
        containerProducts.append(newGroceriesWrapper);

        sendInput.value = '';

        newGroceriesWrapper.addEventListener('click', function() {
          newGroceriesWrapper.classList.toggle('done');
        })
      
    }
  })

