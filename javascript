
var name= prompt("What is your name?") ;
var uper = name.toUpperCase() ;
var length=name.length;
var lower = name.slice(1,length);
alert("Hello , Mr. " + uper.slice(0,1)+lower);
