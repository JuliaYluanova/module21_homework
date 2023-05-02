const generateRandomNumber = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        if (randomNumber % 2 === 0) {
          resolve(randomNumber);
        } else {
          reject(randomNumber);
        }
      }, 3000);
    });
  };
  
  generateRandomNumber()
    .then((randomNumber) => {
      console.log(`Завершено успешно. Сгенерированное число — ${randomNumber}`);
    })
    .catch((randomNumber) => {
      console.log(`Завершено с ошибкой. Сгенерированное число — ${randomNumber}`);
    });