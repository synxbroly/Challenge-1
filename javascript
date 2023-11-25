
var name= prompt("What is your name?") ;
var uper = name.toUpperCase() ;
var length=name.length;
var lower = name.slice(1,length);
alert("Hello , Mr. " + uper.slice(0,1)+lower);

-- --
-
//guest list check javascript code
var name = prompt("what is your name?");

 let guestList = ["gaurav","tamanna","pu","kannu","tanshu"];

if (guestList.includes(name)) {
 alert("welcome,Sir!")
}else{
 alert("Sorry ,maybe next time.")
}
---
