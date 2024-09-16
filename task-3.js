function deleteInvalid(array){
    if(!Array.isArray(array)){
        return 'invalid array';
    }
    let newArr = [];
    for(const item of array){
        if(typeof item === 'number' && isNaN(item) === false){
            newArr.push(item);
        }
    }
    return newArr;
}
// Test problem
console.log(deleteInvalid([1, null, undefined, 18, -19, NaN]));
