const getTasksButton = document.getElementById('getTasksButton');
const userIdInput = document.getElementById('userId');
const message = document.getElementById('message');
const taskList = document.getElementById('taskList');

getTasksButton.addEventListener('click', () => {
  // Получаем ID пользователя из поля ввода
  const userId = userIdInput.value;

  // Очищаем список задач
  taskList.innerHTML = '';

  // Отправляем запрос на сервер
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
    .then(response => {
      if (!response.ok) {
        // Если получили ошибку, выводим сообщение об ошибке
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(json => {
      if (json.length === 0) {
        // Если получили пустой список задач, выводим сообщение
        message.textContent = 'Список задач пуст';
      } else {
        // Если получили список задач, выводим его в списке
        message.textContent = '';
        json.forEach(task => {
          const li = document.createElement('li');
          li.textContent = task.title;
          if (task.completed) {
            li.classList.add('completed');
          }
          taskList.appendChild(li);
        });
      }
    })
    .catch(error => {
      // Если получили ошибку при отправке запроса, выводим сообщение об ошибке
      message.textContent = error.message;
    });
});