var output1 = [];

function fibonacciGenerator (n) {


    if(n===1){
        output1.push(0);
    }else if(n===2){
        output1.push(0,1);
    }else{

        output1 = [0,1];
        
        for(var i =2; i<n; i++){
            output1.push(output1[output1.length-1]+output1[output1.length-2]);
        }
    }

    

    return output1;
}

fibonacciGenerator(7);

console.log(output1);