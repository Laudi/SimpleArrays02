let groupArray = ['Bob', 'Joe', 'Ted'];
console.log(groupArray);
groupArray.push('Bill');
console.log(groupArray);
let removArray = groupArray.shift();
console.log(removArray + ' удален');
console.log(groupArray);

let str = '32, 31, 34, 36, 31';
console.log(str);
str = str.split(',');
console.log(str);
str = str.join(';');
console.log(str);
