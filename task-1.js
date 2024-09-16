function calculateMoney(ticketSale){
    if(ticketSale < 0 || typeof ticketSale !== 'number'){
        return 'invalid number'
    }
    let result = ticketSale * 120 - (500 + 8 * 5);
    return result;
}
const output = calculateMoney(10);
console.log(output);
// const output = calculateMoney('10');
// console.log(output);