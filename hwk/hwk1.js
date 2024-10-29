// 聲明不可改變的常數
var age = 25;
// 嘗試更改常數的值
// age = 30; // 這行會報錯，因為常數的值不能被更改
// 聲明可以改變的變數
var Name = "Alice";
// 更改變數的值
Name = "Bob"; // 這是合法的，因為 'name' 是使用 'let' 聲明的變數
// 輸出結果
console.log("Age: ".concat(age)); // 輸出：Age: 25
console.log("Name: ".concat(Name)); // 輸出：Name: Bob
