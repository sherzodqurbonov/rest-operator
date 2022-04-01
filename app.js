"use strict";

// // rest operator
// function mySkills(lang,cms,...rest){
//     console.log(lang,cms,rest);
//     rest.forEach((item, i) => {
//         console.log(`Extra skills  ${item} `);
//     });
// }
// mySkills("JavaScript",'Wordpress','Python,PHP,Drupal');

// // default value 

// function calc(a, b = 2){
//     // b = b || 2;
//     console.log(a + b);
// }
// calc(1);

const root = document.querySelector('.root');

function div(...classes){
    const elem = document.querySelector("div");
    classes.forEach(classItem => {
        elem.classList.add(classItem)
    });
    root.append(elem);
}1
div('width','height','bg');