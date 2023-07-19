type myintro = {
  name: string;
  fatherName: string;
  roolNo: number;
  passing: boolean;
  hobbies: string[]
}


let obj: myintro = {
  name: "umar",
  fatherName: "Aamir",
  roolNo: 104429,
  passing: true,
  hobbies: ["cooding"]
}
const myintroMyBroIntro: myintro[] = [];
myintroMyBroIntro.push({
  name: "Ahsan",
  fatherName: "Aamir",
  roolNo: 10449,
  passing: true,
  hobbies: ["cooding"]
})
console.log(myintroMyBroIntro);