// Получаем имя пользователя из localStorage
let userName = localStorage.getItem('userName');

// Если имя пользователя не сохранено в localStorage, выводим prompt
if (!userName) {
  userName = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя');
  
  // Записываем имя пользователя, дату и время визита в localStorage
  localStorage.setItem('userName', userName);
  localStorage.setItem('lastVisit', new Date().toLocaleString());
} else {
  // Если имя пользователя сохранено в localStorage, выводим сообщение с датой последнего визита
  const lastVisit = localStorage.getItem('lastVisit');
  alert(`Добрый день, ${userName}! Давно не виделись. В последний раз вы были у нас ${lastVisit}`);
  
  // Обновляем дату последнего визита в localStorage
  localStorage.setItem('lastVisit', new Date().toLocaleString());
}
