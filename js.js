var arrayOfNames = [];

arrayOfNames.push("Caleb");
arrayOfNames.push(" JP");
arrayOfNames.push(" PJ");
arrayOfNames.push(" Maddi");

document.getElementById("something").textContent = arrayOfNames;



var arrayOfNumbers = [94,13,10,22,9];

document.getElementById("thisToo").textContent= arrayOfNumbers;

arrayOfNumbers.splice(2,1);
arrayOfNumbers.splice(1,1);

document.getElementById("another").textContent=arrayOfNumbers;

// CORRECT!!!! From Kenn