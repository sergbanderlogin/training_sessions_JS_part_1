'use strict';
console.log('--- Events in JavaScript. Part-1 ---');
console.log('              ---------');

// ===========
/*
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
*/
// ===========

const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');

const logTarget = (text, color) => {
    const eventsListElem = document.querySelector('.events-list');

    eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 7px; font-size: 24px;">${text}</span>`;
}

const logMaroonDiv = logTarget.bind(null, 'DIV', 'maroon');
const logMaroonP = logTarget.bind(null, 'P', 'maroon');
const logMaroonSpan = logTarget.bind(null, 'SPAN', 'maroon');

const logMagentaDiv = logTarget.bind(null, 'DIV', 'magenta');
const logMagentaP = logTarget.bind(null, 'P', 'magenta');
const logMagentaSpan = logTarget.bind(null, 'SPAN', 'magenta');
//  ============
/*

// === Фаза всплиття "bubbling" ===

divElem.addEventListener('click', logMaroonDiv);
pElem.addEventListener('click', logMaroonP);
// pElem.addEventListener('click', event => {
//     logMaroonP();
//     event.stopPropagation();
//     // console.log(event);
// });
spanElem.addEventListener('click', logMaroonSpan);


//  ============
// === Фаза погруження(перехвата) "capturing" ===

divElem.addEventListener('click', logMagentaDiv, {capture: true});
pElem.addEventListener('click', logMagentaP, true);
spanElem.addEventListener('click', logMagentaSpan, true);
*/

//  ============

divElem.addEventListener('click', logMaroonDiv); // === Фаза всплиття "bubbling" ===
divElem.addEventListener('click', logMagentaDiv, {capture: true}); // === Фаза погруження(перехвата) "capturing" ===

pElem.addEventListener('click', logMagentaP, true); // === Фаза всплиття "bubbling" ===
pElem.addEventListener('click', logMaroonP); // === Фаза погруження(перехвата) "capturing" ===

spanElem.addEventListener('click', logMaroonSpan); // === Фаза всплиття "bubbling" ===
spanElem.addEventListener('click', logMagentaSpan, true); // === Фаза погруження(перехвата) "capturing" ===
































