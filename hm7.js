////Задание 1
//let str = "js";
//str = str.toUpperCase();

//console.log(str);

////Задание 2
//function searchStart(array, startStr) {
//    return array.filter(item => item.toLowerCase().startsWith(startStr.toLowerCase()));
//}
//console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'))

////Задание 3
//let number = 32.58884;
//console.log(Math.floor(number));
//console.log(Math.ceil(number));
//console.log(Math.round(number));


////Задание 4
//let numbs = [52, 53, 49, 77, 21, 32];
//console.log(Math.min(...numbs));
//console.log(Math.max(...numbs));


////Задание 5
//function randomOneToTen(){
//    console.log(Math.floor(Math.random() * 10) + 1);
//}


////Задание 6
//function randomNumbers(n) {
//    let result = [];
//    for (let i = 0; i < n/2; i++) {
//        result.push(Math.floor(Math.random() * n)); 
//    }
//    return result;
//}


////Задание 7
//function randomBetween(min, max) {
//    return Math.floor(Math.random() * (max - min + 1) + min);
//}


////Задание 8
//console.log(new Date());


////Задание 9
//let currentDate = new Date();
//currentDate.setDate(currentDate.getDate() + 73);

//console.log(currentDate);


////Задание 10
//function formatDate(date) {
//    let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
//    let months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
//    return `Дата: ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} - это ${days[date.getDay()]}\nВремя: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
//}

//console.log(formatDate(new Date()));


////Задание 11
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
