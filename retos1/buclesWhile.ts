function hasEven(myNums :number[]){
    let i = 0
    while (i < myNums.length){
        i++
        if (myNums[i] % 2 == 0){
            console.log('Existe un número par')
        }
    }
}

function startWithM(myNames : string[]):boolean{
    let i=0
    while (i< myNames.length){
        if (myNames[i][0] !== 'M'){
            return false
        }   
        i++   
    }
    return true
}


