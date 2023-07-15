var num1 = document.getElementById("first-num");
var num2 = document.getElementById("second-num");
var button = document.getElementById("btn");
var para = function (uservalue, uservalue2) {
    return uservalue + uservalue2;
};
button.addEventListener("click", function () {
    var uservalue = num1.value;
    var uservalue2 = num2.value;
    console.log(para(+uservalue, +uservalue2));
});
//types 
// 1. string
//2. boluean
//3.number
