/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
                    two2Lines();
                    two2Lines();
                    faceR();
                       
                       
                       
                       
                     
                    
                    
                    }
                    function stepOne(){
                        move();
                       putBeeper();
                       move();
                      }
                    
                    function changeLineR(){
                       turnLeft();
                       move();
                       turnLeft();
                     
                       }
                       function faceR(){
                          stepOne();
                     stepOne();
                       }
                       function step2(){
                          putBeeper();
                          move();
                          move();
                          putBeeper();
                          move();
                          move();
                          putBeeper();
                       }
                      function changeLineL(){
                         turnRight();
                         move();
                         turnRight();
                      }
                      function two2Lines(){
                          faceR();
                       changeLineR();
                       step2();
                       changeLineL();
                    
                      }
                         
                       
                       
                    
                       
                    