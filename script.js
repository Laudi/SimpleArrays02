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

const numFirst = [32, 31, 34, 36, 37, 43, 57, 89, 30, 49];
const [numOne, numTwo, ...numSecond] = numFirst;
console.log(numOne, numTwo);
console.log(numSecond);

const numFirst = [32, 31, 34, 36, 37, 43, 57, 89, 30, 49];
console.log(numFirst);
let maxM = Math.max(...numFirst);
console.log(maxM + ' is maximum');

const numFirst = [32, 31, 34, 36, 37];
console.log('numFirst is ' + numFirst);
const numSecond = [...numFirst];
/* for (let i = 0; i < numSecond.length; i++) {
  numSecond[i] = numSecond[i]*2;
}
*/
for (i in numSecond) {
    numSecond[i] = numSecond[i] * 2;
}

/* numSecond.foreach ()
 */
console.log(`numSecond is ${numSecond}`);
console.log('numFirst is ' + numFirst);
