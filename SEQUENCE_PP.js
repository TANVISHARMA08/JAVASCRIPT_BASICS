//SEQUENCE PRACTICE PROBLEMS

//UC1
{
    let digit = Math.floor(Math.random()*10);
    console.log(digit);
}

//UC2
{
    let digit = Math.floor(Math.random()*10)%6+1;
    console.log("Dice Roll: "+digit);
}

//UC3
{
    let dice1 = Math.floor(Math.random()*10)%6+1;
    let dice2 = Math.floor(Math.random()*10)%6+1;
    let add = dice1+dice2;
    console.log("Dice Roll Sum: "+add);
}

//UC4
{
    let d1 = Math.floor(Math.random()*100);  
    let d2 = Math.floor(Math.random()*100);
    let d3 = Math.floor(Math.random()*100);
    let d4 = Math.floor(Math.random()*100);
    let d5 = Math.floor(Math.random()*100);
    let sum = d1+d2+d3+d4+d5;
    let avg = sum/5;
    console.log("Sum: "+ sum+ " Average: "+avg); 
}

//UC5
const inch = 1/12;
console.log(42 * inch + "ft");
const meter = 0.3048;
console.log(60 * meter + " X " + 40 * meter + " Meters");
let areaInMeters = 60*meter*40*meter;
const noOfPlots = 25;
const acre = 4046.86;
console.log(areaInMeters * acre * noOfPlots + " Acres");