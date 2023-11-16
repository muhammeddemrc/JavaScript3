var output = [];

var numberr = 1;

function increase (){

 if (numberr % 5 === 0 && numberr % 3 === 0){

     output.push("fizzbuzz");     

 } else if (numberr % 5 === 0){
     
     output.push("buzz"); 
     
 }else if(numberr % 3 === 0){

     output.push("fizz")
     
 }else{

     output.push(numberr);

 }
  console.log(output);

    numberr = numberr +1;  
    
}