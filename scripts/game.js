const game1 = () => {
    let month = Number('Введите номер месяца');

    if (Number.isNaN(month) || month < 1 || month > 12) {
        return 'Вы ввели неправильное значение';
    }
    
    switch (month) {
        case 12:
        case 1:
        case 2:
            return 'Зима';
        case 3:
        case 4:
        case 5:
            return 'Весна';
        case 6:
        case 7:
        case 8:
            return 'Лето';
        case 9:
        case 10:
        case 11:
            return 'Осень';
        default:
            return 'Вы ввели неправильное значение';
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