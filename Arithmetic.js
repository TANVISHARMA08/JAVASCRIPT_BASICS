// Find Min And Max Of Arthemaic Operations

let V1 = Math.floor(Math.random()*100);
let V2 = Math.floor(Math.random()*100);
let V3 = Math.floor(Math.random()*100);
console.log("A: "+V1);
console.log("B: "+V2);
console.log("C: "+V3);
let operation1 = V1+V2*V3;
let opertion2 = V1%V2+V3;
let operation3 = V3+V1/V2;
let operation4 = V1*V2+V3;

let max = operation1;
if(opertion2>max)
    max = opertion2;
if(operation3>max)
    max = operation3;
if(operation4>max)
    max = operation4;

console.log("Maximum value is : "+max);

let min = operation1;
if(opertion2<min)
    min = opertion2;
if(operation3<min)
    min = operation3;
if(operation4<min)
    min = operation4;

console.log("Minimum value is : "+min);