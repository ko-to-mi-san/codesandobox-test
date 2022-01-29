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

const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん！`);
sayHello();
