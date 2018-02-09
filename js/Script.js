"use strict"
/*Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.*/

function TwoNomber (x,y) {
    var week = (x == y);
        return week;
}
console.log (TwoNomber(1,2));

/*Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть функция вернет true, а если нет - false.*/

function TwoNomber2 (x,y) {
    if ((x + y)>10) {
        return true;
    }
    else {
        return false;
    }
}
console.log (TwoNomber2(11,22));

/*Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.*/

function oneNomber (x) {
    if (x<0) {
        return true;
    }
    else {
        return false;
    }
}
console.log (oneNomber(-10));

/*С помощью цикла for сформируйте строку '123456789' и запишите ее в переменную str.*/
var x = ""
var str;
for (str=1; str<10; str++) {
  x = x + str;   
}
console.log (x);

/*С помощью цикла for сформируйте строку '987654321' и запишите ее в переменную str.*/

var x = ""
var str;
for (str=1; str<10; str++) {
  x = str + x;   
}
console.log (x);

/*Нарисуйте пирамиду, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx

т.е. х - это обычный символ*/

var str = ""
for (var i=1; i<20; i++) {
  str = str + 'x';  
    console.log (str);
}

/*С помощью двух вложенных циклов нарисуйте следующую пирамидку:

1
22
333
4444
55555
666666
7777777
88888888
999999999*/

for (var i=1; i<10; i++) {
     var str = "";
    for (var x=0; x<i; x++) {
        str = str + i
    }
 console.log (str);   
}

function foo (d) {
for (var i=1; i<d; i++) {
     var str = "";
    for (var x=0; x<i; x++) {
        str = str + i
    }
 console.log (str);   
}
}
console.log (foo(10));

/*Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке*/

var arr = [1, 4, 8, 15];
console.log (arr[3], arr[2], arr[1], arr[0]);

/*Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.*/

var array = [[1, 2, 3], [4, 5], [6]];
var result = (array[0][0]+array[0][1]+array[0][2]+array[1][0]+array[1][1]+array[2][0]);
console.log (result);

/*Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].*/

function arrayFill (a, b) {
    var arr2 = [];
    for (var i=0; i<4; i++) {
      arr2[i] = a; 
    } 
    return arr2;
}
console.log (arrayFill(1, 4));

/*Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.*/

var arr3 = [1, 4, 8, 15];
var numberElement = 0;
var element = 0;
for (var m=0; m<arr3.length; m++) {
   element = element + arr3[m];
    numberElement++; 
    if (element>10) {
       console.log(numberElement)
        break;
    }     
}
 

/*Дан массив с числами. Создайте из него новый массив, где останутся лежать только положительные числа. Создайте для этого вспомогательную функцию isPositive(), которая параметром будет принимать число и возвращать true, если число положительное, и false - если отрицательное.*/
var arr4 = [5, 8, -2, 3, -4];
function isPositive(x) {
    if (x > 0) {
        return true;
    }
    else {
        return false;
    }
}
var newArr4 = [];
for (var b=0; b<arr4.length; b++) {
    if (isPositive(arr4[b])==true) {
       newArr4.unshift (arr4[b]);
    }
}
console.log (newArr4);

/*Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск. Функция должна возвращать true или false.*/
var array2 = ['мама', 'мыла', 'раму'];
function inArray(y, array2) {
    for (var g=0; g<array2.length; g++) {
        if (array2[g]===y) {
            return true;
        }
        }
        return false;
}
console.log(inArray('мыла', array2));
