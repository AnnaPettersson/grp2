/*JavaScript som får en popup ruta att dyka upp och försvinna*/

var pButton = document.querySelector('.button'); 
var buttonBg = document.querySelector('.button-bg');
var xKnapp = document.querySelector('.x-close'); 
var popUpButton = document.querySelector('.popUpButton');
var tack = document.querySelector('.tack'); 
var reply = document.querySelector('.reply');
var skickaknapp = document.querySelector('.knapp');

pButton.addEventListener('click', function() {
    buttonBg.classList.add('bg-active');
});

xKnapp.addEventListener('click', function() {
    buttonBg.classList.remove('bg-active');
});

popUpButton.addEventListener('click', function() {
    popUpButton.style.cssText = "background-color: lightgrey;"; 

    tack.classList.add('tack-active');
});

skickaknapp.addEventListener('click', function() {
        reply.classList.add('reply-active');
});

/* En JS kod som skriver en hälsningsfras i pop-upen baserat på klockslag: */

var greeting = document.querySelector('.greeting'); 

let date = new Date();
let currentHour = date.getHours();

let createTxtMsg; 

if (currentHour >= 4 && currentHour < 10) 
{
    createTxtMsg = "God morgon!";
} 
else if (currentHour >= 10 && currentHour < 12)
    {
        createTxtMsg = "God förmiddag!";
    } 
else if (currentHour >= 12 && currentHour < 18)
        {
            createTxtMsg = "Goddag!";
        }
else if (currentHour >= 18 && currentHour < 22)
{
                createTxtMsg = "God kväll!";
}
else if (currentHour >= 22 && currentHour < 04)
{
                createTxtMsg = "God natt!";
}
else 
{
    createTxtMsg = "Är du från en annan planet?";
}


greeting.textContent = createTxtMsg;