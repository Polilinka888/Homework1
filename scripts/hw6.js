////Задание 1
//const numbs = [1, 5, 4, 10, 0, 3];

//for (let i = 0; i < numbs.length; i++) {
//    console.log (numbs [i]);
//    if (numbs [i] === 0) break;
//}


////Задание 2
//const numbs = [1, 5, 4, 10, 0, 3];

//const index = numbs.indexOf (4);
//console.log (index);


////Задание 3
//const numbs = [1, 3, 5, 10, 20];

//const str = numbs.join{' '};
//console.log (str);


////Задание 4
//let arr = [];
//for (let i = 0; i < 3; i++) {
//    let innerArr = [];
//    for (let j = 0; j < 3; j++) {
//        innerArr.push(1);
//    }
//    arr.push (innerArr);
//}

//console.log(arr);


////Задание 5
//let arr = [1, 1, 1];

//arr.push(2, 2, 2);
//console.log(arr);


////Задание 6
//const arr = [9, 8, 7, 'a', 6, 5];

//arr.sort().pop();
//console.log(arr);


////Задание 7
//const arr = [9, 8, 7, 6, 5];

//const guess = Number(prompt('Угадайте число :)'));
//if (arr.includes(guess)) {
//    alert('Угадали!');
//} else {
//    alert('Не угадали(');
//}


////Задание 8
//const str = 'abcdef';
//const reverseStr = str.split("").reverse().join("");
//console.log(reverseStr);


////Задание 9
//const arr = [
//    [1, 2, 3,],
//    [4, 5, 6]
//];
//const flatArr = arr.flat();
//console.log(flatArr);


////Задание 10
//const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//for (let i = 0; i < numbs.lenght - 1; i++){
//     console.log(numbs[i] + numbs[i+1]);
//}


////Задание 11
//const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//function getSquaredNumbers(numbs) {
//    return numbs.map((num) => num * num);
//}

//getSquaredNumbers(numbs);


////Задание 12
//const getLengthWords = ['слово', '', 'слог', 'длинное предложение', 'буква'];
//
//function getLengthWords(item) {
//    return item.map((item) => item.lenght);
//}

//getLengthWords(item);


////Задание 13
//function filterPositive(array) {
//    let result = [];
//    for (let i = 0; i < array.length; i++) {
//        if (array[i] < 0) {
//            result.push(array[i]);
//        } 
//    }
//    return result;
//}

