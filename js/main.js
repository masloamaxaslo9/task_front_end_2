// Call and Apply

// Task One
// Есть функция sum, которая суммирует все элементы массива:
function sum(arr) {
    return arr.reduce(function(a, b) {
        return a + b;
    });
}

alert( sum([1, 2, 3]) ); // 6 (=1+2+3)
// Создайте аналогичную функцию sumArgs(), которая будет суммировать все свои аргументы:
// function sumArgs() {
//     /* ваш код */
// }
//
// alert( sumArgs(1, 2, 3) ); // 6, аргументы переданы через запятую, без массива

// Вирішення:
function sumArg() {
    arguments.reduce = [].reduce;
    return arguments.reduce(function (prevItem, item, i, arr) {
        return prevItem + item;
    })
}

alert( sumArg(1, 2, 3) );

// Task Two
// Напишите функцию applyAll(func, arg1, arg2...), которая получает функцию func и
// произвольное количество аргументов.
//
// Она должна вызвать func(arg1, arg2...), то есть передать в func все аргументы, начиная со
// второго, и возвратить результат.
// Например:
// Применить Math.max к аргументам 2, -2, 3
// alert( applyAll(Math.max, 2, -2, 3) ); // 3
// Применить Math.min к аргументам 2, -2, 3
// alert( applyAll(Math.min, 2, -2, 3) ); // -2

// Вирішення:
function applyAll(func, arg1, arg2, arg3) {
    return func.apply(null, [].slice.call(arguments, 1));
}

console.log( applyAll(Math.max, 5, 6, 8, 4, 10, 1, 3) );