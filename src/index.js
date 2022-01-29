/** */

// var val1 = 'varhensu';
// console.log(val1);

// val1 = 'henkou';
// console.log(val1);

// var val1 = '再宣言';
// console.log(val1);

// let val2 = 'lethensu';
// console.log(val2);

// val2 = '上書き';
// console.log(val2);

// const val3 = 'constdayo';
// console.log(val3);

// const val4 = {
//   name: 'owawa',
//   age: 30
// };
// val4.name = 'bbbb';
// val4.addres = 'tokyo';
// console.log(val4)

// const name = 'kotomi';
// const age = 30;

// const message1 = '私の名前は' + name + 'です。年齢は' + age + 'です。'
// console.log(message1);

// const message2 = `私の名前は${name}です。年齢は${age}です。`
// console.log(message2)

// function func1(str) {
//   return str;
// }
// const func1 = function(str){
//   return str;
// }
// console.log(func1('func1です'))

// const func2 = (str) => str;
// console.log(func2('aaa'));

// const func3 = (num1,num2) => {
//   return num1 + num2;
// }
// console.log(func3(10, 20));

// const myProfile = {
//   name: 'kotomi',
//   age: 30,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`
// console.log(message1);

// const {name, age} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`
// console.log(message2);

// const myProfile = ['kotomi', 30];

// // const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`
// // console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`
// console.log(message4);

// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん！`);
// sayHello();

//

// const arr2 = [1,2,3,4,5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;

// arr8[0] = 100;
// console.log(arr8);

// const nameArr = ["sato", "suzuki", "takahashi"];
// for (let i = 0; i < nameArr.length; i++) {
//   console.log(`${i + 1}番目は${nameArr[i]}です。`);
// }

// const nameArr2 = nameArr.map((name) =>{
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name, i) => {
//   console.log(`${i + 1}番目は${name}です。`);
// })

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// })
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if(name === 'takahashi'){
//     return name
//   } else {
//     return `${name}さん`
//   }
// })
// console.log(newNameArr);

// const val1 = 1 > 0 ? 'trueです' : 'falseです'
// console.log(val1);

// const num = '1300';
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値をいれろ～';
// console.log(formattedNum)

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100超えた" : "許容範囲内です";
};
console.log(checkSum(55, 8));
