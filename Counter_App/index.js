
console.log("start");
const plus=document.querySelector(".plus");
const minise=document.querySelector(".sub");
let para=document.querySelector("p");
const resetbtn=document.querySelector(".reset");
let count=0;
function add(){
    count+=1;
    para.innerText=count;
}
function dec(){
    if(count==0)return ;
    count-=1;
    para.innerText=count;
}
function reset(){
    count=0;
    para.innerText=0;
}

plus.addEventListener("click", add);
minise.addEventListener("click", dec);

resetbtn.addEventListener("click",reset);