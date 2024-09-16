// function checkName(name){
//     if(typeof name !== 'string'){
//         return 'invalid string'
//     }
//     let lastLetter = name[name.length - 1].toLowerCase();
//     let newArr = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
//     let result = false;
//     for(let char of newArr){
//         if(char === lastLetter){
//             result = true;
//         }
//     }
//     return result?'Good Name':'Bad Name';
// }
// console.log(checkName('sakko'));
function checkName(name){
    let lastLetter = name.slice(-1).toLowerCase();
    let chackLatter =  ['a', 'y', 'i', 'e', 'o', 'u', 'w'];
    let result = chackLatter.includes(lastLetter);
    return result?'Good Name':'Bad Name';
}
 console.log(checkName('salma'));

