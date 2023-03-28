function zodiaco (dia:number, mes:number){
    if(dia >= 21 && mes == 3 || dia <= 19 && mes == 4){
        return 'Aries';
    }
    else if(dia >= 20 && mes == 4 || dia <= 20 && mes == 5){
        return 'Tauro';
    }
    else if(dia >= 21 && mes == 5 || dia <= 20 && mes == 6){
        return 'Géminis';
    }
    else if(dia >= 21 && mes == 6 || dia <= 22 && mes == 7){
        return 'Cáncer';
    }
    else if(dia >= 23 && mes == 7|| dia <= 22 && mes == 8){
        return 'Leo';
    }
    else if(dia >= 23 && mes == 8 || dia <= 22 && mes == 9){
        return 'Virgo';
    }
    else if(dia >= 23 && mes == 9|| dia <= 22 && mes == 10){
        return 'Libra';
    }
    else if(dia >= 23 && mes == 10|| dia <= 21 && mes == 11){
        return 'Escorpio';
    }
    else if(dia >= 22 && mes == 11 || dia <= 21 && mes == 12){
        return 'Sagitario';
    }
    else if(dia >= 22 && mes == 12 || dia <= 19 && mes == 1){
        return 'Capricornio';
    }
    else if(dia >= 20 && mes == 1 || dia <= 18 && mes == 2){
        return 'Acuario';
    }
    else if(dia >= 19 && mes == 2 || dia <= 20 && mes == 3){
        return 'Piscis' ;
    }
}

function continente (pais: string){
    if (pais == 'Alemania' || pais == 'Suecia' || pais == 'Dinamarca' || pais == 'Grecia' || pais == 'Lituania'){
        console.log('Estás en Europa')
    }
    else if (pais == 'Tailandia' || pais == 'China' || pais == 'Japón' || pais == 'Vietnam' || pais == 'India'){
        console.log('Estás en Asia')
    }
    else if (pais == 'Australia' || pais == 'Nueva Zelanda' || pais == 'Fiyi' || pais == 'Papúa Nueva Guinea' || pais == 'Samoa'){
        console.log('Estás en Oceanía')
    }
    else if (pais == 'Argelia' || pais == 'Gambia' || pais == 'Sudafrica' || pais == 'Nigeria' || pais == 'Kenia'){
        console.log('Estás en Africa')
    }
    else if (pais == 'Canadá' || pais == 'México' || pais == 'Estados Unidos' || pais == 'Groenlandia' || pais == 'Jamaica'){
        console.log('Estás en Norteamérica')
    }
    else if (pais == 'Chile' || pais == 'Brasil' || pais == 'Argentina' || pais == 'Uruguay' || pais == 'Perú'){
        console.log('Estás en Sudamérica')
    }
}

export function isEven(number:number){
    if (number % 2 == 0){
        console.log('El número es par')
    }
    else {
        console.log('El número es impar')
    }
}




