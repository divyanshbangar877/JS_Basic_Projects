
console.log("hello");
let nums=document.querySelectorAll(".num");
const operators=document.querySelectorAll(".opr");
const screen=document.querySelector(".screen p");
const resetbtn=document.querySelector(".reset");
const deletebtn=document.querySelector(".delete");
let equal=document.querySelector(".equal");
let currentNumber="";
let firstNumber=null;

let op=null;

nums.forEach((num)=>{
    num.addEventListener("click", ()=>{
        currentNumber+=num.innerText;
        screen.innerText=currentNumber;
    })
})

operators.forEach((opr)=>{
    opr.addEventListener("click", ()=>{
        
        if (currentNumber === "") return;
        firstNumber=Number(currentNumber);
     
     screen.innerText+=opr.innerText;
        op=opr.innerText;
        currentNumber="";
    })
})


equal.addEventListener("click",()=>{
      if (currentNumber === "" || firstNumber === null || opr === null) {
        return;
    }
    const secondNumber=Number(currentNumber);
    currentNumber="";
    let result;
    if(op==="+"){
     result=firstNumber+secondNumber;
    }
    else if(op==="-"){
         result=firstNumber-secondNumber;
    }
    else if(op==="*"){
   result=firstNumber*secondNumber;
    }
    else if(op==="/") {
         if (secondNumber === 0) {
            screen.innerText = "Error";
            return;
        }
         result=firstNumber/secondNumber;
    }
    screen.innerText=result;
   
    currentNumber=String(result);

})
resetbtn.addEventListener("click", ()=>{
    screen.innerText="0";
    currentNumber="";
    firstNumber=null;
    op=null;
})

deletebtn.addEventListener("click",()=>{
    currentNumber=currentNumber.slice(0,-1);
    if(currentNumber===""){
        screen.innerText="0";
    }
    else {
       screen.innerText = currentNumber;
    }

});