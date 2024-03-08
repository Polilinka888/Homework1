const game1 = () => {
    let month = prompt('Введите номер месяца');
    
        if (month === 12 || month === 1 || month === 2){
            alert ('Зима');
        } else if (month >= 3 && month <= 5) {
            alert ('Весна');
        } else if ( month >= 6 && month <= 8) {
            alert ('Лето');
        } else if ( month >= 9 && month <= 11) {
            alert ('Осень');
        } else {
            alert ('Неизвестное значение');
        }
      
}



const game2 = () => {
    let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

    fruits = fruits.sort(() => Math.random() - 0.5);
    alert(fruits);

    let firstGuess = prompt("Чему равнялся первый элемент массива?");
    let lastGuess = prompt("Чему равнялся послдений элемент массива?");

    if (firstGuess === fruits[0] && lastGuess === fruits[fruits.length - 1]) {
        alert ("Поздравляем! Вы угадали оба слова!!!");
    }
    else if (firstGuess === fruits[0] || lastGuess === fruits[fruits.length - 1]) {
        alert ("вы были близки к победе!");
    }
    else {
        alert ("Вы не угадали ни одного слова(");
    }

}