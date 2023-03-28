import { add } from "./buclesFor";
import { isEven } from "./condicionales";

let arr1 = add(['Casa','Coche','Ciudad','Cesta']);
let arr2 = add(['Barco', 'Baca', 'Bicicleta', 'Balon', 'Bisiesto', 'Brasil']);
let arr3 = add(['Venezuela', 'Veneno', 'Voltaje']);

let total = arr1 + arr2 + arr3

isEven(total)