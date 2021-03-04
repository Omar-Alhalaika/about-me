'use strict'
alert(`Hello and welcome to my profile \nI am Omar Alhalaika, and I want to intrduce myself to you.\nBut; in a different way! \nLet's start!`);

let userName=prompt(`What can I call you dear?`);
let score=0
alert(`Welcome `+userName+`, it is my pleasure to know you!`);

let myBackground=prompt(`Try to guess this! \nDo I have an IT background? \n (yes/no)?`);
    
function background(input1) {  
if (myBackground.toLowerCase() ==`yes`||myBackground.toLowerCase() ==`y`) {
    //console.log(`Great job `+userName)
    alert(`Great job `+userName);
    score++;
}else if (myBackground.toLowerCase() ==`no`||myBackground.toLowerCase() ==`n`) {
    alert (`Actully I do have an IT background`);
    
}else  {
background(myBackground);}
}

background(myBackground);

// function experience() {
//     let myExperience=prompt(`Try to guess this too! \nDo I have more than 5 years of experience? \n (yes/no)?`);
    
// if (myExperience.toLowerCase() ==`yes`||myExperience.toLowerCase() ==`y`) {
//     //console.log(`Great job `+userName)
//     alert(`Great job `+userName);score++;
// }else if (myExperience.toLowerCase() ==`no`||myExperience.toLowerCase() ==`n`) {
//     alert (`Actully I do have more than 5 years of experience`);
    
// }else  {
// experience();}
// }
// experience();

// function hobbies() {
//     let myHobbies=prompt(`Try to guess this! \nDo you think Art is one of my fav. hobbies? \n (yes/no)?`);
    
// if (myHobbies.toLowerCase() ==`yes`||myHobbies.toLowerCase() ==`y`) {
//     //console.log(`Great job `+userName)
//     alert(`Well done `+userName);score++;
// }else if (myHobbies.toLowerCase() ==`no`||myHobbies.toLowerCase() ==`n`) {
//     alert (`In fact it is`);
    
// }else  {
// hobbies();}
// }
// hobbies();

// function spanish() {
//     let mySpanish=prompt(`Try to guess this! \nDo you think I can speak Spanish? \n (yes/no)?`);
    
// if (mySpanish.toLowerCase() ==`yes`||mySpanish.toLowerCase() ==`y`) {
//     //console.log(`Great job `+userName)
//     alert(`Great job `+userName);score++;
// }else if (mySpanish.toLowerCase() ==`no`||mySpanish.toLowerCase() ==`n`) {
//     alert (`I wish to! \nbut I can't`);
    
// }else {
// spanish();}
// }
// spanish();

// function common() {
//     let incommon=prompt(`Try to guess this! \nDo you think that we have anything in common? \n (yes/no)?`);
    
// if (incommon.toLowerCase() ==`yes`||incommon.toLowerCase() ==`y`) {
//     //console.log(`Great job `+userName)
//     alert(`Yes, I think we do `+userName);score++;
// }else if (incommon.toLowerCase() ==`no`||incommon.toLowerCase() ==`n`) {
//     alert (`Maybe \nbut I think there is something in common`);
    
// }else {
// common();}
// }
// common();

// alert(`It has been my pleasure taking you in a tour about who am I; ` +userName);

// let counter=1;
// let guessingNo=93;
// let userGuess1=prompt('I have a number in my mind (0-100);\nTry to guess it!!');
// // let userGuess=parseInt(userGuess1)
// while (counter<4) {
//     if (parseInt(userGuess1)==guessingNo) {alert('Great job '+userName);score++;counter=4;
//         break;
        
//     } else  if (parseInt(userGuess1)<guessingNo) {userGuess1=prompt('Too low '+userName+ '\nTry to guess it again!');
       
//     }else { if (parseInt(userGuess1)>guessingNo) {userGuess1=prompt('Too high '+userName+ '\nTry to guess it again!');
//             };
//     };
//      counter++;
        
//     };
//     alert('The number is 93')


// let counter2=1;
// let guessingArray=['skating','bodybuilding','boxing','walking'];
// let userGuess2=prompt('I enjoy doing sports;\nCan you guess any of them!!');

// while (counter2<6) {
//     for (let i = 0; i < guessingArray.length; i++) {
//     if (userGuess2.toLowerCase==guessingArray[i]) {alert('Great job '+userName);score++;counter2=7;
//     break;

//     } else  if (counter2!==7) {
//         userGuess2=prompt('Not exctly '+userName+ '\nTry again!');
        
   
//     };  counter2++;
//     };
   
//   }
//   alert('Well, the sporst are\nskating, bodybuilding, boxing, & walking');
  
// let userScore=alert('And here is your score out of 7\nScore : '+score);

    
    

