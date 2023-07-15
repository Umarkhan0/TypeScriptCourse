let num1 = document.getElementById("first-num")! as HTMLInputElement
let num2 = document.getElementById("second-num")! as HTMLInputElement
let button = document.getElementById("btn")!
const para = (uservalue: number ,uservalue2: number ) =>{
return uservalue + uservalue2
}
button.addEventListener("click",()=>{
const uservalue = num1.value;
const uservalue2 = num2.value; 
console.log(para(+uservalue , +uservalue2))
})





//types 
// 1. string
//2. boluean
//3.number