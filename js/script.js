"use strict"



//order
// let input = document.querySelector('input');
// let div=document.querySelector('div');
// let result=0;

// input.addEventListener('keyup', function () {
//     let weight = Number(input.value);
//     if(input.value.length==0 ){
//        result="";
//     }
//     if (weight > 0 && weight < 0.25) {
//         result=2.50;
//     }else if(weight >= 0.25 && weight < 0.5){
//         result=2.50;
//     }else if(weight >= 0.5 && weight < 0.75){
//         result=4.50;
//     }else if(weight >= 0.75 && weight < 1.0){
//         result=5.50;
//     }else if(weight >= 1.0 && weight < 2.0){
//         result=6.00;
//     }else if(weight >= 2 && weight < 5){
//         result=weight * 5.00;
//     }else if(weight >= 5 && weight < 10){
//         result=weight*4.50
//     }else if(weight >= 10){
//         result=weight*4.00;
//     }

//     div.innerText=result;
// })

// input.addEventListener('change', function () {
//     let weight = Number(input.value);
//     if(input.value.length==0 || weight==0){
//        result="";
//     }
//     if (weight > 0 && weight < 0.25) {
//         result=2.50;
//     }else if(weight >= 0.25 && weight < 0.5){
//         result=2.50;
//     }else if(weight >= 0.5 && weight < 0.75){
//         result=4.50;
//     }else if(weight >= 0.75 && weight < 1.0){
//         result=5.50;
//     }else if(weight >= 1.0 && weight < 2.0){
//         result=6.00;
//     }else if(weight >= 2 && weight < 5){
//         result=weight * 5.00;
//     }else if(weight >= 5 && weight < 10){
//         result=weight*4.50
//     }else if(weight >= 10){
//         result=weight*4.00;
//     }

//     div.innerText=result;
// })


//login 
// let username = document.querySelectorAll('input')[0];
// let password = document.querySelectorAll('input')[1];
// let submit = document.querySelectorAll('input')[2];
// submit.addEventListener('click', function () {

//     username.classList.remove('active');
//     password.classList.remove('active');
//     username.classList.remove('active2');
//     password.classList.remove('active2');
//     if (username.value != "Admin" || password.value != "Admin") {
//         username.classList.add('active');
//         password.classList.add('active');
//     } else if (username.value == "Admin" && password.value == "Admin") {
//         username.classList.add('active2');
//         password.classList.add('active2');
//     }
// })


//range  rabite bank
// let inputs = document.querySelectorAll('.rng');
// let range_month = inputs[0];
// let range_kredit = inputs[1];
// let range_percentage = inputs[2];
// let ptag = document.querySelectorAll('p');
// range_month.addEventListener('input',calculate)
// range_kredit.addEventListener('input',calculate)
// range_percentage.addEventListener('input', calculate)
// let li_ptags = document.querySelectorAll('.liptag');

// function calculate() {
//     ptag[0].innerText = range_month.value;
//     ptag[1].innerText = range_kredit.value + " AZN";
//     ptag[2].innerText = range_percentage.value + '%';
//     let total = (range_kredit.value * range_percentage.value) / 100 +Number( range_kredit.value);
//     li_ptags[0].innerText = total;
//     let percentage = (range_kredit.value * range_percentage.value) / 100;
//     li_ptags[1].innerText = percentage;
//     let monthly = total / range_month.value;
//     li_ptags[2].innerText =Number( monthly).toFixed(2);
// }

//select option
// let select=document.querySelector('select');
// let input=document.querySelector('input');
// let ptag=document.querySelector('p');
// select.addEventListener('change',function (e) {
//     if(e.srcElement.value == "dollar"){
//         console.log(input.value);

//          ptag.innerText= input.value/1.7030;
//     }else if(e.srcElement.value == "euro")
//     {
//         ptag.innerText= input.value/1.8870;
//     }
// })


// input.addEventListener('keyup' ,function () {
//     if(select.value == "dollar"){
//         console.log(input.value);

//          ptag.innerText=Number( input.value/1.7030).toFixed(4);
//     }else if(select.value == "euro")
//     {
//         ptag.innerText=Number( input.value/1.8870).toFixed(4);
//     }
// })



//date time
// let ptag=document.querySelector('p');
// let stop=document.querySelectorAll('button')[1];
// let start=document.querySelectorAll('button')[0];
// let interval1;
// function givedate() {
//     interval1=setInterval(() => {
//     let date=new Date();
//     let date1=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
//     ptag.innerText=date1;
// }, 1000);
// }
// stop.addEventListener('click',function(){
//     clearInterval(interval1)
// })
// start.addEventListener('click',function(){
//     givedate();
// })



//timer
let input
let ptag = document.querySelector('p');
let stop = document.querySelectorAll('button')[1];
let start = document.querySelectorAll('button')[0];
let interval1;
stop.addEventListener('click', function () {
    clearInterval(interval1)
})

start.addEventListener('click', function () {

    if (ptag.innerText.length > 0) {
        input = ptag.innerText;
    } else {
        input = document.querySelector('input').value;
    }
    interval1 = setInterval(() => {
        if (input >= 0) {
            ptag.innerText = input;
            input--;
        }
    }, 1000);

})