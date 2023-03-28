function evenNumber(num:number){
    for(let i=0; i<= num; i++){
        if(i % 2 == 1){
            console.log(i)
        }
    }
}

function myRevert(myArr:number[]):number[]{
 let newArray:number[] =[];
 for (let i = myArr.length - 1; i>=0; i--){
    newArray.push(myArr[i])
 }
 return newArray
}

function isRainbow(colors:string[]){
    for(let i = 0; i < colors.length; i++){
        if(colors[i] == 'Amarillo'|| colors[i] == 'Naranja'|| colors[i] == 'Rojo'|| colors[i] == 'Verde'|| colors[i] == 'Azul'|| colors[i] == 'Añil'|| colors[i] == 'Violeta'){
            console.log(colors[i] + '- Está en el arcoiris');

        } else{
            console.log(colors[i] + '- No está en el arcoiris')
        }
    }
}

export function add(myWords: string[]): number{
    let sumaTotal: number= 0;
    for(let i = 0; i< myWords.length ; i++){
        sumaTotal += myWords[i].length
    }
    return sumaTotal
}



