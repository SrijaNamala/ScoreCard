
let homeScore=document.getElementById("home-score")
let guestScore=document.getElementById("guest-score")
let num1=+homeScore.textContent
let num2=+guestScore.textContent
function add1(){
    num2++
    num1++
    guestScore.textContent=num2
    
}
function add2(){
    num2= num2+2
    num1= num1+2
    guestScore.textContent=num2
    
}
function add3(){
    num2= num2+3
    num1= num1+3
    guestScore.textContent=num2
    
}
function hadd1(){
    num1++
   
    homeScore.textContent=num1
}
function hadd2(){
   
    num1= num1+2
   
    homeScore.textContent=num1
}
function hadd3(){
  
    num1= num1+3
   
    homeScore.textContent=num1
}
