//todo:  Algorithms

// ! Har bir masalaga 10 daqiqadan vaqt sarflang oshib ketmasin...

// Masala - 1

// Arraydagi eng katta sonni topish kerak for loop bilan

const numbers = [23, 45, 67, 89, 34, 56, 33, 151, 78, 20];
let getTheMaxValue = (nums) => {
  let maxValue = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (maxValue < nums[i]) {
      maxValue = nums[i];
    }
  }
  return maxValue;
};
// console.log(getTheMaxValue(numbers));

// Masala - 2

// Arraydagi eng uzun so'zni topib uning oxirgisidan bitta oldingi harfini topish

// const fruites = ["Olma", "Nok", "Anor", "Chegara"];

let getTheLongestword = (str) => {
  let res = "";
  let maxLength = 0;
  for (let i = 0; i < str.length; i++) {
    if (maxLength < str[i].length) {
      res = str[i].at(-2);
    }
  }
  return res;
};
// console.log(getTheLongestword(fruites));

// Masala - 3

// Arraydagi barcha stringning lengthini topish

// const arr = ["Olma", "anor", "Nok"];

let getTheLengthOfAll = (arrStr) => {
  let sum = 0;
  for (let i = 0; i < arrStr.length; i++) {
    sum += arrStr[i].length;
  }
  return sum;
};
// console.log(getTheLengthOfAll(arr));

// Masala - 4

// Arrayda kamida 6 ta toq va juft son bor, va shundan juft sonlarning yarmini ya'ni 18 juft soni bo'lsa uning yarmi 9 sonini bir arrayga solib qaytarib bersin ya'ni hamma juftlarning yarmini bitta arrayga joylash kerak
let arrayNums = [4, 8, 7, 5, 8, 12, 115];
let evenSeperate = (arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      let devide = arr[i] / 2;
      res.push(devide);
    }
  }
  return res;
};
// console.log(evenSeperate(arrayNums));
// const numbers = [23, 58, 96, 31, 74, 44, 152, 531, 26];

// Masala - 5

// Arraydagi katta harf bilan boshlangan so'zlarning birinchi harfini kichik qolgan harfini katta qilib, kichik harf bilan boshlanganlarini birinchi harfini katta qolganlarini kichkina qib bersin
// const arr = ["Olma", "anor", "Nok"];

function convertToUpperOrLower(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === arr[i][0].toUpperCase()) {
      res.push(arr[i][0].toLowerCase() + arr[i].slice(1));
    } else {
      res.push(arr[i][0].toUpperCase() + arr[i].slice(1));
    }
  }
  return res;
}

// console.log(convertToUpperOrLower(arr));

// Masala - 6

// Promptdan bir so'z kiritish kerak va shu so'zni 3 marta space bilan chiqarib berish kerak for loop da

// let promptWord = prompt("Enter a word...");
function repeatWord(str) {
  let repeatedString = "";
  for (let i = 0; i < 3; i++) {
    repeatedString += str + " ";
  }
  return repeatedString.trim();
}
// console.log(repeatWord(promptWord));

// Masala - 7
// Ichma ich array bor va shu arrayning juft arraylarning birinchi elementining birinchi harflarini birlashtirib qaytarib bersin

// const fruitsArray = [
//   ["Olma"],
//   ["Bexi"],
//   ["Anor"],
//   ["Xurmo"],
//   ["GIlos"],
//   ["Kiwi"],
//   ["Banan"],
// ];

function changeLetter(array) {
  let res = "";
  for (let i = 0; i < array.length; i += 2) {
    const innerArray = array[i];
    if (innerArray && innerArray.length > 0) {
      const firstElemnt = innerArray[0];
      if (firstElemnt.length > 0) {
        res += firstElemnt[0];
      }
    }
  }

  return res;
}
// console.log(changeLetter(fruitsArray));
