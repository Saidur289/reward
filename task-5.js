function monthlySaving(array, livingCost){
    if(Array.isArray(array) === false  || livingCost === false){
        return 'invalid input'
    }
    let totalIncome = 0;
    for(let payment of array){
        if(payment >= 3000){
            let tax = payment * 0.20;
            totalIncome = payment - tax;
        }else{
            totalIncome = totalIncome + payment;
        }
    }
    let savings = totalIncome - livingCost;
    if(savings >= 0){
        return savings;
    }else{
        return 'earn more'
    }

}
console.log(monthlySaving([1000, 2000, 2500], 5000));
console.log(monthlySaving([900, 2700, 3400], 1000));
console.log(monthlySaving(100, [1, 2, 3]));