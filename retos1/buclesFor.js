function evenNumber(num) {
    for (var i = 0; i <= num; i++) {
        if (i % 2 == 1) {
            console.log(i);
        }
    }
}
function myRevert(myArr) {
    var newArray = [];
    for (var i = myArr.length - 1; i >= 0; i--) {
        newArray.push(myArr[i]);
    }
    return newArray;
}
function isRainbow(colors) {
    for (var i = 0; i < colors.length; i++) {
        if (colors[i] == 'Amarillo' || colors[i] == 'Naranja' || colors[i] == 'Rojo' || colors[i] == 'Verde' || colors[i] == 'Azul' || colors[i] == 'Añil' || colors[i] == 'Violeta') {
            console.log(colors[i] + '- Está en el arcoiris');
        }
        else {
            console.log(colors[i] + '- No está en el arcoiris');
        }
    }
}
function add(myWords) {
    var sumaTotal = 0;
    for (var i = 0; i < myWords.length; i++) {
        sumaTotal += myWords[i].length;
    }
    return sumaTotal;
}
var sumita = add(['coche', 'perro', 'casa']);
console.log(sumita);
