// DOM Events Exercise
// 1 a
const button1 = document.querySelector('#one');
/*
or
const button1 = document.getElementByID('one');
*/

// 1 b
button1.onclick = function(){
    alert('You clicked the first button! Congrats!');
} 
/*

*/
// 2
const h3 = document.querySelector('h3');

//2b
h3.addEventListener('mouseover', () => {
    alert('You hovered over the h3 element! Congrats!');  
}, {once: true});
// The once:  true is so it will stop popping up

// 3a. Select the form element/tag and set it to a const variable called form
const form = document.querySelector('form');
// 3b. Using addEventListener, display the value in the text input with an alert when the submit input in the form is clicked.
//3 b
/*
form.addEventListener('submit', () => {
    alert(`${for.entry.value}`);
});
or
*/
form.addEventListener(`submit`, () => {
    alert(form.entry.value);
});
//! remember to look this up
/*
BONUS
4a. Select the Dark Mode button and set it to a const variable called darkMode
*/
const darkMode = document.getElementById('dm');
/*
4b. Using addEventListener, TOGGLE the "dark-mode" CSS class On/Off for EVERY element when the Dark Mode Button is clicked
Below does not work for all 
darkMode.addEventListener('click', () => {
    darkMode.classList.toggle('dark-mode');
});
*/
cost star = document.querySelector('*');
darkMode.addEventListener('click', () => {
    star.classList.toggle('dar-mode');    
});
/*
5a. Select the "CAN ONLY CLICK A CERTAIN NUMBER OF TIMES" button and set it to a const variable called times
*/
const times = document.querySelector('#times');
/*
5b. Using addEventListener, have an alert that says "You clicked the last button! Congrats!" pop up when you click on the button. However, have this setup so that when the button is clicked a third time have the following alert display instead of the "You clicked the last button! Congrats!" alert. New alert "OH NO! This button is NOT going to work anymore". And finally, when the button is clicked a fourth, fifth, sixth, etc. time have it do nothing (AKA Disable the button).
*/
let num = 3;
times.addEventListener('click', () => {
    num--
    if (num > 0){
        alert('You clicked the last button! Congrats!');
    } else if (num <= 0){
        alert('oh no This button is not going to work anymore');
        times.remove(); // or the below
        //times.disabled = true;
    }
});

/* or
let num = 1;
times.addEventListener('click', () => {
    if (num < 3{
        alert('You clicked the last button Congrats');
        num++;
    } else if (num === 3){
        alert('This button is not going to work anymore');
        num++;
    } else {
        times.disabled = true;
    }
});







