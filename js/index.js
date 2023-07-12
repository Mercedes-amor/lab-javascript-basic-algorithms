// Iteration 1: Names and Input

console.log ("Estoy listo")

let hacker1= "Ana"
console.log (`The driver´s name is ${hacker1}`);

let hacker2 = "Anai"
console.log (`The navigator´s name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log (`The driver has the longest name, it has ${hacker1.length} characters`)
}

else if (hacker2.length > hacker1.length) {
    console.log (`The navigator has the longest name, it has ${hacker2.length} characters`)
}

else {
    console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

3.1

let separatedName =" "
let nameReverse =" "

for (let i = 0; i < hacker1.length; i++) {
    separatedName += hacker1[i].toUpperCase() + " "
 
}

console.log (separatedName)

//3.2
for (let j = hacker2.length -1; j >= 0; j--) {
    nameReverse += hacker2[j]
 
}

console.log (nameReverse)

//3.3

if (hacker1 === hacker2) {
    console.log ("What?! You both have the same name?")
 
} else {
for (let i = 0; i < Math.max(hacker1.length, hacker2.length); i++) {

    if (hacker1[i] < hacker2[i]) {
        console.log (`The ${hacker1} goes first`)
        break;
    }

    else {
    console.log (`Yo, the ${hacker2} goes first definitely.`)
    break;
}
}
}