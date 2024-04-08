// 1.

// function oneToTen(){
//     for (let i = 0; i < 11; i++) {
//         console.log(i);
//     }
// }
// oneToTen();


// 2.

// function onlyOdd(){
//     for (let i = 0; i < 101; i++) {
//         if (i%2) {
//             console.log(i);
//         }
        
//     }
// }
// onlyOdd();


// 3.

// function sevenTable(){
//     for (let i = 7; i < 71; i+=7) {
       
//             console.log(i);
        
        
//     }
// }
// sevenTable();


// 4.

// function OnetoTenTable(){
//     for (let i = 0; i < 100; i++) {
        
        
        
//     }
// }
// OnetoTenTable();


// 5.

// let sum = 0;
// function sumOfAll(nbr){
//     for (let i = 0; i < nbr; i++) {
//         sum+=i;
        
//     }
// }
// sumOfAll(11);
// console.log(sum);


// 6.

// let factorielle = 1;
// function factorielleOf(nbr){
//     for (let i = 1; i < nbr; i++) {
//         factorielle*=i;
//         console.log(factorielle);
//     }
// }
// factorielleOf(11);


// 7. pas encore fini

// let sumOfEvenNumbers = 0;
// function sumFrom10to30() {
//     for (let i = 10; i < 31; i+=2) {
        
//             sumOfEvenNumbers+=i;
            
        
//     }
    
// }
// sumFrom10to30();
// console.log(sumOfEvenNumbers);


// 8. calculer Fahrenheit


// let FahrenheitConvert = 0;
// function calculerFahrenheit (nbr){
//     FahrenheitConvert = (nbr * 9/5) + 32;
//     return FahrenheitConvert;
// }
// calculerFahrenheit(15);
// console.log(FahrenheitConvert);


// 9. calculer Celsius

// let CelciusConvert = 0;
// function calculerCelcius (nbr){
//     CelciusConvert = (0 - 32) * 5/9;
//     return CelciusConvert;
// }
// calculerCelcius(15);
// console.log(CelciusConvert);


// 10. sum of numbers in an array

// let sum = 0;

// function calculateTheSum (arr){
//     for (let i = 0; i < arr.length; i++){
//         sum = sum + arr[i];
//     }
// }
// calculateTheSum([1,9,15,3,7]);
// console.log(sum);


// 11. average of numbers in an array

// let average = 0;

// function calculateTheAverage (arr){
//     for (let i = 0; i < arr.length; i++) {
//         average += arr[i];
        
//     }
//     average = average / arr.length;
// }
// calculateTheAverage([1,9,15,3,7]);
// console.log(average);


// 12. onlyPositive

// let tmp = 0;

// function giveMeOnlyPositive(arr){
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0){
//             tmp.push[arr[i]];
//         }
//     }
//     return tmp;
// }

// giveMeOnlyPositive([-7,-2,1,9,-4,12]);
// console.log(tmp);


// 13.

// let maxNbr = 0;

// function max(tmp){
//     for (let i = 0; i < tmp.length; i++) {
//         if (maxNbr < tmp[i]) {
//             maxNbr = tmp[i];
//         }     
//     }
//     return maxNbr;
// }
// max([2,-2,8,91,7,-21]);
// console.log(maxNbr);


// 14. Fibonacci

// let a = 0;
// let b = 1;
// let c = 0;

// function Fibonacci(nbr){
//     for (let i = 0; i < nbr; i++) {
//         c = a + b;
//         a = c;
//         a + b;
//         console.log(c);
//     }
// }
// Fibonacci(34);


// 16. Found if Prime

// let nbr = prompt("Type a number")

// function isPrime(nbr){
//  if () {
//     return true
//  } else {
//     return false
//  }
// }
// isPrime(nbr)


//Max in an array

// let tmp = [1,3,1,5,6,7,5,853];
// let maxNbr = 0;

// function max(tmp) {
//     for (let i = 0; i < tmp.length; i++) {
//         if (maxNbr < tmp[i]) {
//             maxNbr = tmp[i];
//         }
        
//     }
//     return maxNbr
// }
// max(tmp)
// console.log(maxNbr)


// 24.

// let tmp1 = [1,3,5,7,9,13,14];
// let tmp2 = [2,4,6,8,10,11,12];
// let mergeArrays = [];



// function merge(tab1,tab2,mergeTab) {

//     let plusGrand = 0

//     if (tab1.length >= tab2.length) {
//         plusGrand = tab1
//     } else {
//         plusGrand = tab2
//     }

//     for (let i = 0; i < plusGrand.length; i++) {

//             mergeTab.push(tab1[i]);
//             mergeTab.push(tab2[i]);
        
//     }
//     console.log(mergeTab)
// }
// merge(tmp1,tmp2,mergeArrays)


// 23. Reverse a string


// const stringToReverse = prompt("Ecrivez un mot");


// function reverse(stringReverse) {
//     let newString = "";
//     for(let i = stringReverse.length-1; i >= 0; i--){
//         newString = newString + stringReverse[i];
//     }
//     console.log(newString)
    
// }
// reverse(stringToReverse)



// Next Letter 

// const input = document.getElementById("input")

// let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// let preState = ""


// input.addEventListener('input', (e)=>{

// Je récupère la valeur de la lettre tappée actuelle
//     let state = e.target.value
    
//     console.log("current state", state);
//     console.log("prev state", preState);

//     if (state.length < preState.length) {
//         preState = state.length
//         return;
//     }

//     const lastInputLetter = state.at(state.length-1)

//     const capitalizeLetter = String(lastInputLetter).toUpperCase()
//     const index = alphabet.indexOf(capitalizeLetter)

//     state = preState + alphabet.at((index + 1)%26)

//     e.target.value = state
//     preState = state

// })

// let mot = prompt("Ecrit un mot")
// function compterVoyelle(s) {
//     let nbrVoyelle = 0;
//     for (let i = 0; i < s.length; i++) {
//         let lowMot = s.toLowerCase()
//         if (lowMot[i] === "a" ||lowMot[i] === "e" ||lowMot[i] === "i" ||lowMot[i] === "o" ||lowMot[i] === "u" ||lowMot[i] === "y") {
//             nbrVoyelle ++;
//         } 
//     }
//     console.log(nbrVoyelle)
// }
// compterVoyelle(mot)



// function factiorielle(num){
//     let result = 1;
//     for (let i = 2; i <= num; i++) {
//         result *= i;
//     }
//     console.log(result)
// }

// factiorielle(8)


// let newResult = 1;
// function factoRec(otherNum) {
    
//     if (otherNum === 1) {
//         return 1;
//     } else {
//         return otherNum*factoRec(otherNum-1)
//     }
// }
// console.log(factoRec(8));



// let nbrTurn = 0;
// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//         for (let k = 1; k <= 3; k++) {
//             console.log(i+j+k)
//             nbrTurn += 1;
//             }
            
//         }
        
//     }
//     console.log(nbrTurn)
    



let oldComb = [];
let backupValue = 0;


    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            for (let k = 1; k <= 3; k++) {
                backupValue = i + " " + j + " " + k + " ";
                oldComb.push(backupValue)
                }
                
            }
            
        }
let parsinter = 0;
function verification(oldComb) {
    for (let h = 0; h < oldComb.length; h++) {
       parsinter = parseInt(oldComb[i])
        
    }
}
verification(oldComb);


let nbrTurn = 0;

// backupValue.push(oldComb)
//                 console.log(oldComb)











