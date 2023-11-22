here is little code I wrote ,it convert the first letter of prompt input by user into upper case and then show it as alert :-

  
var name= prompt("What is your name?") ;
var uper = name.toUpperCase() ;
var length=name.length;
var lower = name.slice(1,length);
alert("Hello , Mr. " + uper.slice(0,1)+lower);
