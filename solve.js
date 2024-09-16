function calculateMoney(ticketSale){
    if(ticketSale < 0 || ticketSale !== 'number'){
        return 'invald input';
    }
    const totalmaney = ticketSale * 120 - (500 + 8 * 50);
    return totalmaney;
}
// console.log(calculateMoney(-130));
function checkName(name){
    if(typeof name !== 'string'){
        return 'invalid';
    }
    let lastLetter = name.slice(-1).toLowerCase();
    let checkLetter = ['a','y', 'o', 'e'];
    let result = false;
    for(let char of checkLetter){
        if(char === lastLetter){
            result = true;
        }
    }
    return result?'goodman':"badname";
}
function deleteInvalid(array){
    if(Array.isArray(array) === false){
        return 'invalid';
    }
    let newArr = [];
    for(let elemant of array){
        if(typeof elemant === 'number' && isNaN(elemant) === false)
            newArr.push(elemant)
    }
    return newArr;
}
// console.log(deleteInvalid([1, 2, 4, -5, null, undefined, NaN]));
// console.log(deleteInvalid({address: 'sesra'}));
function password(obj){
    let capitalName = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
    let passwordString = capitalName + "#" + obj.name + "@" + obj.birthyear;
    return passwordString;
}
// let object = {
//     name:"kolimuddin", siteName: 'google', birthyear: 2002
// }
// let output = password(object);
// console.log(output);
function monthlySaving(array, livingCost){
    if(!Array.isArray(array)){
        return 'invald';
    }
    let totalIncome = 0;
    for(let payment of array){
        if(payment >= 3000){
            let tax = payment * 0.20;
            totalIncome = payment - tax;
        }else{
            totalIncome += payment;
        }
    }
    let savings = totalIncome - livingCost;
    if(savings < 0){
        return 'earmore'
    }else{
        return savings;
    }
}
console.log(monthlySaving([900, 2700, 3400], 10000));