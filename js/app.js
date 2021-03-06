'use strict'
alert(`Hello and welcome to my profile \nI am Omar Alhalaika, and I want to intrduce myself to you.\nBut; in a different way! \nLet's start!`);

let userName=prompt(`What can I call you dear?`);
let score=0
alert(`Welcome `+userName+`, it is my pleasure to know you!`);

    
function background(input1) {    
    let myBackground=prompt(`Try to guess this! \nDo I have an IT background? \n (yes/no)?`);
  
if (myBackground.toLowerCase() ==`yes`||myBackground.toLowerCase() ==`y`) {
    //console.log(`Great job `+userName)
    alert(`Great job `+userName);
    score++;
}else if (myBackground.toLowerCase() ==`no`||myBackground.toLowerCase() ==`n`) {
    alert (`Actully I do have an IT background`);
 
}
else  {
background();
};
}

background();


function experience(input2) {
    let myExperience=prompt(`Try to guess this too! \nDo I have more than 5 years of experience? \n (yes/no)?`);
if (myExperience.toLowerCase() ==`yes`||myExperience.toLowerCase() ==`y`) {
    //console.log(`Great job `+userName)
    alert(`Great job `+userName);score++;
}else if (myExperience.toLowerCase() ==`no`||myExperience.toLowerCase() ==`n`) {
    alert (`Actully I do have more than 5 years of experience`);
    
}
else  {
experience(myExperience);
}
}
experience();

let myHobbies=prompt(`Try to guess this! \nDo you think Art is one of my fav. hobbies? \n (yes/no)?`);

function hobbies(input3) {   
    let myHobbies=prompt(`Try to guess this! \nDo you think Art is one of my fav. hobbies? \n (yes/no)?`);
if (myHobbies.toLowerCase() ==`yes`||myHobbies.toLowerCase() ==`y`) {
    //console.log(`Great job `+userName)
    alert(`Well done `+userName);score++;
}else if (myHobbies.toLowerCase() ==`no`||myHobbies.toLowerCase() ==`n`) {
    alert (`In fact it is`);
    
}
else  {
hobbies(myHobbies);
}
}
hobbies();

    
function spanish(input4) {  
    let mySpanish=prompt(`Try to guess this! \nDo you think I can speak Spanish? \n (yes/no)?`);
if (mySpanish.toLowerCase() ==`yes`||mySpanish.toLowerCase() ==`y`) {
    //console.log(`Great job `+userName)
    alert(`Great job `+userName);score++;
}else if (mySpanish.toLowerCase() ==`no`||mySpanish.toLowerCase() ==`n`) {
    alert (`I wish to! \nbut I can't`);
    
}
else {
spanish(mySpanish);
}
}
spanish();


function common(input5) {
    let incommon=prompt(`Try to guess this! \nDo you think that we have anything in common? \n (yes/no)?`);
if (incommon.toLowerCase() ==`yes`||incommon.toLowerCase() ==`y`) {
    //console.log(`Great job `+userName)
    alert(`Yes, I think we do `+userName);score++;
}else if (incommon.toLowerCase() ==`no`||incommon.toLowerCase() ==`n`) {
    alert (`Maybe \nbut I think there is something in common`);
    
}
else {
common(incommon);
}
}
common();



let counter=1;
let guessingNo=93;

function guessingNum(userGuess){
let userGuess1=prompt('I have a number in my mind (0-100);\nTry to guess it!!');
// let userGuess=parseInt(userGuess1)
while (counter<4) {
    if (parseInt(userGuess1)==guessingNo) {
        alert('Great job '+userName);
    score++;
    counter=4;
    break;
    } else  if (parseInt(userGuess1)<guessingNo) {userGuess1=prompt('Too low '+userName+ '\nIt is more than 80!');
    counter++;
    }else if (parseInt(userGuess1)>guessingNo) {userGuess1=prompt('Too high '+userName+ '\nIt is less than 95!');
     counter++; 
    }if( counter===4){
        alert('The number is 93'); 
    }
    }   
}
 guessingNum();

let counter2=1;
let guessingArray=['skating','bodybuilding','boxing','walking'];

function sports(sport){
    let userGuess2=prompt('I enjoy doing sports;\nCan you guess any of them!!');
while (counter2<=6) {
    for (let i = 0; i<guessingArray.length;i++){
    if (userGuess2.toLowerCase()==guessingArray[i]) {
        alert('Great job '+userName);
    score++;
    counter2=7;
    //console.log(j);
    break;
    }
    } if (counter2!==7) {
        userGuess2=prompt('Not exctly '+userName+ '\nTry again!');
        counter2++;
    } else if(counter2===6){
        alert('Well, the sporst are\nskating, bodybuilding, boxing, & walking');
    }
    }
}

sports();
alert(`It has been my pleasure taking you in a tour about who am I; ` +userName);
  
let userScore=alert('And here is your score out of 7\nScore : '+score);

    