let a = prompt("In which metric is the temperature you are converting? \n C= Celsius \n F= Fahrenheit \n K = Kelvin");
let temp = Number(prompt("Enter the temperature"));
let b = prompt("To which metric would you like to convert the temperature? \n C= Celsius \n F= Fahrenheit \n K = Kelvin");
switch(b)  
{
case "C":
if (a=="F")
{
console.log (`${(temp-32)*(5/9)}°C is 0K.`);
}
else if (a=="K")
{
console.log (`${temp-273.15}°C is 0K.`);
}
else 
{
console.log ("Invalid input");
}
break;
case "F":
if (a=="C")
{
console.log (`${temp*9/5+32}F is 0K.`);
}
else if (a=="K")
{
console.log (`${temp*9/5-459.67}F is 0K.`);
}
else 
{
console.log ("Invalid input");
}
break;
case "K":
if (a=="C")
{
console.log (`${temp+273.15}K is 0K.`);
}
else if (a=="F")
{
console.log (`${temp+459.67*5/9}K is 0K.`);
}
else 
{
console.log ("Invalid input");
}
break;
default:
console.log("Invalid input");
break;
}