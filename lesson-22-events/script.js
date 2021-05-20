'use strict';
console.log('--- Events in JavaScript. Part-1 ---');
console.log('              ---------');

const elem = document.querySelector('.rect_div');

// const handler1 = () => {
//     console.log('You did clicked on div1.');
// };
// const handler2 = () => {
//     console.log('You did clicked on div2.');
// };
// elem.addEventListener('click', handler1);
// elem.addEventListener('click', handler2);
// elem.removeEventListener('click', handler2);

const logTarget = (text, color) => {
   const eventsListElem = document.querySelector('.events-list');
   eventsListElem.innerHTML += `<span style="color: ${color}; font-size: 36px; margin-left: 8px">${text}</span>`;
}

// elem.addEventListener('click', () => logTarget('DIV', 'maroon'));
const logMaroonDiv = logTarget.bind(null, 'DIV', 'maroon');

elem.addEventListener('click', logMaroonDiv);































