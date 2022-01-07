/**
 * アロー関数
 */

const func3 = (num1, num2) => {
  return num1 + num2;
};
console.log(func3(10, 20));

/**
 * 分割代入
 */
const myprofile = {
  name: "コウジ",
  age: 40
};

const message1 = `名前は${myprofile.name}です。年齢は${myprofile.age}歳です。`;
console.log(message1);

// 上記のように毎回myprofileを指定するのはコードがたくさんになると大変になる
// ↓

const { name, age } = myprofile;
const message2 = `名前は${name}です。年齢は${age}歳です。`;
console.log(message2);

// 配列にも使用できる
const profile = ["コウジ", 40];

const message3 = `名前は${profile[0]}です。年齢は${profile[1]}歳です。`;
console.log(message3);
// ↓
const [myname, myage] = profile;
const message4 = `名前は${myname}です。年齢は${myage}歳です。`;
console.log(message4);

/**
 * デフォルト値、引数など
 */
const sayHello = (name = "ゲスト") => console.log(`こんにちは、${name}さん！`);
sayHello();

/**
 * スプレッド構文 ...
 */
// 配列の展開
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);

// まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];
// コピー
const arr6 = [...arr4];
console.log(arr6);
// 結合
const arr7 = [...arr4, ...arr5];
console.log(arr7);

//　 ※スプレッド構文を使ってコピーをすると、元の配列（今回の場合arr4）に影響を与えずにコピーできる

/**
 * mapやfilterを使った配列の処理
 */
// 従来のfor文
const nameArr = ["田中", "山田", "じゃけえ"];
for (let index = 0; index < nameArr.length; index++) {
  console.log(`${index + 1}番目は${nameArr[index]}です。`);
}

// mapを使用
// 新しい配列nameArry2を生成する場合
const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2);

// 単純に配列をループで処理
nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));
// 第２引数に配列の番号を設定することができる

// filterを使用
// ある条件に一致したものだけ返却して、新しい配列を生成するような関数
const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1; //奇数だけ
});
console.log(newNumArr);

// じゃけえ以外は名前の後に”さん”をつける
const newNameArr = nameArr.map((name) => {
  if (name === "じゃけえ") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの時 : 条件がfalseの時;
const val1 = 1 > 0 ? "trueです" : "falseです";
console.log(val1);

// 数値であれば３桁区切りのコロン付きで、数値以外は「数値を入力してください」
const num = "1300";
const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
};
console.log(checkSum(50, 60));

/**
 * 論理演算子の本当の意味を知ろう && ||
 */
// 実は「または」とか「かつ」という意味ではない！
// || は左側がfalseなら右側を返す（左側がtrueならそのまま左側を返す）
const setNum = null;
const fee = setNum || "金額未設定です";
console.log(fee);

// &&　は左側がtrueなら右側を返す（左側がfalseならそのまま左側を返す）
const setNum2 = null;
const fee2 = setNum2 && "何か設定されました";
console.log(fee2);
