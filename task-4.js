function password(obj){
    if(obj.name === undefined || obj.birthyear === undefined || obj.sitename === undefined || obj.birthyear.toString().length !== 4){
        return 'invalid';
    }
    let capitalName = obj.sitename[0].toUpperCase() + obj.sitename.slice(1);
    let passwordString = capitalName + '#' + obj.name + obj.birthyear;
    return passwordString;
}
let obj = {name:'kolimuddin', sitename: 'facebook', birthyear: 2002};
console.log(password(obj));
