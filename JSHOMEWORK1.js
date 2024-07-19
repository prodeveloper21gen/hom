// TASK 1
// __________________________________________

// function test(str) {
//     for (let i = 0; i < str.length; i++) {
//         let qozi = true;
//         for (let j = 0; j < str.length; j++) {
//             if (i !== j && str[i] === str[j]) {
//                 qozi = false;
//                 break;
//             }
//         }
//         if (qozi == true) {
//             return str[i];
//         }
//     }
// }

// console.log(test('hwelghlo'));

// __________________________________________

// TASK 2
// __________________________________________

// function test(str) {
//     return str + 1 >= 0 || str + 1 <= 0;
// }

// console.log(test('12345'));
// console.log(test('123_four_5'));

// __________________________________________

// TASK 3
// __________________________________________

// function test(str, num) {
//     return str.slice(0, num);
// }
// console.log(test('hello world',5));

// __________________________________________

// TASK 4
// __________________________________________

// function test(str) {
//     let ans = '';
//     for (let i = 0; i < str.length; i++){
//         if (str[i] == str[i].toUpperCase()) {
//             ans += '_' + str[i].toLowerCase();
//         }
//         else ans += str[i];
//     }
//     return ans;
// }
// console.log(test('helloWorldWideWebSite'));
// console.log(test('convertToSnakeCase'));

// __________________________________________

// TASK 5
// __________________________________________

// function test(str) {
//     let ans = '';
//     for (let i = 1; i < str.length - 1; i++){
//         if (str[i] == ' ') ans += str[i - 1].toUpperCase() + ' ' + str[i + 1].toUpperCase();
//         else if(str[i + 1] == ' ' || str[i - 1] == ' ') str[i] = '';
//         else  ans += str[i];
//     }
//     return str.at(0).toUpperCase() + ans + str.at(-1).toUpperCase();
// }
// console.log(test('hello world babycandy'));

// __________________________________________

// TASK 6
// __________________________________________

// function test(www) {
//     let ans1 = www.replaceAll('http://', '');
//     let ans2 = ans1.replaceAll('https://','');
//     let ans3 = ans2.replaceAll('/path?name=abc#','');
//     let ans4 = ans3.replaceAll('www.','');
//     let ans5 = ans4.replaceAll('sub.','');
//     let ans6 = ans5.replaceAll('/path','');
//     return ans6;
// }
// console.log(test('http://sub.domain.co.uk/path'));
// console.log(test('https://www.example.com/path'));
// console.log(test('https://domain.com'));


// __________________________________________

// TASK 7
// __________________________________________

// function test(str) {
//     let ans = '';
//     for (let i = 0; i < str.length; i++) {
//         if ((str[i] >= '0' && str[i] <= '9')||(str[i] >= 'a' && str[i] <= 'z')||(str[i] >= 'A' && str[i] <= 'Z')) {
//             ans += str[i];
//         }
//     }
//     return ans;
// }
// console.log(test('H$&e%l*%l%&o%&num%&*%$^1%^2^$&34#$5'));


// __________________________________________


// TASK 8
// __________________________________________

// function system (str){
//     ans=''
//     for(let i=str.length-1;i>=0;i--){
//         ans+=str[i]
//     }
//     return ans==str
// }
// console.log(system("madam"));


// __________________________________________


// TASK 9
// __________________________________________

// function system (str){
//     ans = '';
//     let sd = str.split(' ');
//     for (let i = sd.length - 1; i >= 0; i--) {
//         ans += sd[i] + ' ';
//     }
//     return ans;
// }
// console.log(system("madam Modmazel"));

// __________________________________________

// TASK 10
// __________________________________________

// function test(str) {
//     let f = str.at(0);
//     let l = str.at(-1);
//     let res = str.slice(1, -1);
//     return l + res + f;
// }
// console.log(test('hello'));


// __________________________________________

// TASK 11
// __________________________________________

// function test(num) {
//     let min = 999999999999;
//     for (let i = num; i > 0; i = Math.floor(i/10)) {
//         if (i%10 < min) {
//             min = i%10;
//         }
//     }
//     return min;
// }
// console.log(test(57485729173937));

// __________________________________________

//  TASK 12
// __________________________________________

// function test(num) {
//     let big = -999999999999;
//     for (let i = num; i > 0; i = Math.floor(i/10)) {
//         if (i%10 > big) {
//             big = i%10;
//         }
//     }
//     return big;
// }
// console.log(test(57485729173937));

// __________________________________________

// TASK 13
// __________________________________________

// function test(n1,n2) {
//     let ans = '';
//     if (n1 < n2) {
//         for (let i = n1; i < n2; i++) {
//             ans += i + ', ';
//         }
//         return ans + n2;
//     }
//     else return undefined;
// }
// console.log(test(5,15));

// __________________________________________

// TASK 14
// __________________________________________

// function test(n1,n2,n3) {
//     let cnt1 = n1 + n2 + n3;
//     let cnt2 = n1 - n2 - n3;
//     let cnt3 = n1 * n2 * n3;
//     let cnt4 = n1 / n2 / n3;
//     let cnt5 = n1 % n2 % n3;
//     return cnt1 + cnt2 + cnt3 + cnt4 + cnt5;
// }
// console.log(test(1,2,3));

// __________________________________________

// TASK 15
// __________________________________________

// function test(num) {
//     return Math.ceil(num.toString().length / 2);
// }
// console.log(test(123));
// console.log(test(12345));
// console.log(test(123456789));

// __________________________________________

// TASK 16
// __________________________________________

// function test(n1,n2) {
//     let cnt = 0;
//     return function () {
//         if (cnt == 0) {
//             cnt = 1;
//             return n1 + n2;
//         }
//         if (cnt == 1) {
//             cnt = 2;
//             return n1 - n2;
//         }
//         if (cnt == 2) {
//             cnt = 3;
//             return n1 * n2;
//         }
//         if (cnt == 3) {
//             cnt = 4;
//             return n1 / n2;
//         }
//         if (cnt == 4) {
//             cnt = 0;
//             return n1 % n2;
//         }
//     }
// }
// let n = test(1,2);
// console.log(n());
// console.log(n());
// console.log(n());
// console.log(n());
// console.log(n());

// __________________________________________

// TASK 17
// __________________________________________

// function test(num) {
//     let cnt = '';
//     return function () {
//     for (let i = num; i > 0; i = Math.floor(i/10)) {
//         cnt += i % 10;
//     }
//     return cnt;
//     }
// }
// let n = test(123);
// console.log(n());

// __________________________________________

// TASK 18
// __________________________________________

// function test(num) {
//     let ans = '';
//     let cnt = -1;
//     return function () {
//         for (let i = 1; i < num; i++) {
//             if (num % i == 0) {
//                 ans += i+' ';
//             }
//         }
//         cnt++;
//         let ans2 = ans = ans + num;
//         ans = '';
//         let ansd = ans2.split(' ')
//         return ansd.at(cnt);
//     }
// }
// let n = test(128);
// console.log(n());
// console.log(n());
// console.log(n());
// console.log(n());
// console.log(n());
// console.log(n());
// console.log(n());
// console.log(n());


// __________________________________________

// TASK 19
// __________________________________________

// function test(num) {
//     num = num.toString()+num.toString().at(-1);
//     let cnt = 0;
//     return function () {
//         cnt++;
//         return num.slice(cnt, -1);
//     }
// }
// let n = test(1212121212121212);
// console.log(n());
// console.log(n());
// console.log(n());
// console.log(n());
// console.log(n());
// console.log(n());
// console.log(n());
// console.log(n());
// console.log(n());
// console.log(n());
// console.log(n());
// console.log(n());
// console.log(n());
// console.log(n());
// console.log(n());

// __________________________________________
