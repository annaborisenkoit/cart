//Получение узлов из DOM:
const taskInput = document.querySelector('.js-add__input');
const addButton = document.querySelector('.js-add__btn');
const taskList = document.querySelector('.js-tasks');

//обработчик события - клика по кнопке "Добавить"
addButton.addEventListener('click', function() {
    //получаем значение из инпута:
    let taskText = taskInput.value;
    //создаем новый элемент списка:
    let task = document.createElement('li');
    //помещаем в новый элемент списка его значение, которое взяли из инпута
    task.textContent = taskText; 
    //добавляем созданный элемент в тег ул
    taskList.append(task);
    //очищаем инпут
    taskInput.value = '';
    //возвращаем курсор в инпут
    taskInput.focus();
});

taskList.addEventListener('click', function(evt) {
  if (evt.target.tagName === 'LI') {
    // Код, который будет выполнен при клике на элемент <li>
    evt.target.classList.toggle('checked'); // переключение класса
  }
});





