'use strict'
alert(`Hello and welcome to my profile \nI am Omar Alhalaika, and I want to intrduce myself to you.\nBut; in a different way! \nLet's start!`);

let userName=prompt(`What can I call you dear?`);

alert(`Welcome `+userName+`, it is my pleasure to know you!`);


function background(background) {
    let myBackground=prompt(`Try to guess this! \nDo I have an IT background? \n (yes/no)?`);
    
if (myBackground.toLowerCase ==`yes`||myBackground.toLowerCase ==`y`) {
    //console.log(`Great job `+userName)
    alert(`Great job `+userName)
}else if (myBackground.toLowerCase ==`no`||myBackground.toLowerCase ==`n`) {
    alert (`Actully I do have an IT background`);
    
}else  myBackground=prompt(`Try to guess this! \nDo I have an IT background? \n (yes/no)?`);

}
background();

function experience(background) {
    let myExperience=prompt(`Try to guess this too! \nDo I have more than 5 years of experience? \n (yes/no)?`);
    
if (myExperience.toLowerCase ==`yes`||myExperience.toLowerCase ==`y`) {
    //console.log(`Great job `+userName)
    alert(`Great job `+userName)
}else if (myExperience.toLowerCase ==`no`||myExperience.toLowerCase ==`n`) {
    alert (`Actully I do have more than 5 years of experience`);
    
}else  myExperience=prompt(`Try to guess this too! \nDo I have more than 5 years of experience? \n (yes/no)?`);

}
experience();

function hobbies(background) {
    let myHobbies=prompt(`Try to guess this! \nDo you think Art is one of my fav. hobbies? \n (yes/no)?`);
    
if (myHobbies.toLowerCase ==`yes`||myHobbies.toLowerCase ==`y`) {
    //console.log(`Great job `+userName)
    alert(`Well done `+userName)
}else if (myHobbies.toLowerCase ==`no`||myHobbies.toLowerCase ==`n`) {
    alert (`In fact it is`);
    
}else  myHobbies=prompt(`Try to guess this! \nDo you think Art is one of my fav. hobbies? \n (yes/no)?`);

}
hobbies();

function spanish(background) {
    let mySpanish=prompt(`Try to guess this! \nDo you think I can speak Spanish? \n (yes/no)?`);
    
if (mySpanish.toLowerCase ==`yes`||mySpanish.toLowerCase ==`y`) {
    //console.log(`Great job `+userName)
    alert(`Great job `+userName)
}else if (mySpanish.toLowerCase ==`no`||mySpanish.toLowerCase ==`n`) {
    alert (`I wish to! \nbut I can't`);
    
}else  mySpanish=prompt(`Try to guess this! \nDo you think I can speak Spanish? \n (yes/no)?`);

}
spanish();

function common(background) {
    let incommon=prompt(`Try to guess this! \nDo you think that we have anything in common? \n (yes/no)?`);
    
if (incommon.toLowerCase ==`yes`||incommon.toLowerCase ==`y`) {
    //console.log(`Great job `+userName)
    alert(`Yes, I think we do `+userName)
}else if (incommon.toLowerCase ==`no`||incommon.toLowerCase ==`n`) {
    alert (`Maybe \nbut I think there is something in common`);
    
}else  incommon=prompt(`Try to guess this! \nDo you think that we have anything in common? \n (yes/no)?`);

}
spanish();

alert(`It has been my pleasure taking you in a tour about who I am; ` +userName)
    
    

