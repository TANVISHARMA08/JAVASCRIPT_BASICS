let d1 = (Math.floor(Math.random()*100000).toString().substring(0,3))
let d2 = (Math.floor(Math.random()*100000).toString().substring(0,3))
let d3 = (Math.floor(Math.random()*100000).toString().substring(0,3))
let d4 = (Math.floor(Math.random()*100000).toString().substring(0,3))
let d5 = (Math.floor(Math.random()*100000).toString().substring(0,3))

let result ;
if(d2 > d1 && d2 > d3 && d2 > d4 && d2 > d5)
{result = d2;}
else if(d3 > d1 && d3 > d2 && d3 >d4 && d3 > d5)  
{result = d3;}
else if(d4 > d1 && d4 > d2 && d4 > d3 && d4 > d5)
{result = d4;}
else if(d5 > d1 && d5 > d2 && d5 > d3 && d5 > d4)
{result = d5;}
else 
{result = d1;}
console.log(result);