'use strict';
console.log('--- DOM in JavaScript. ---');
console.log('---------');

const task = [
    {text: 'Buy milk', done: false},
    {text: 'Pick up Tom from airport', done: true},
    {text: 'Visit party', done: false},
    {text: 'Visit doctor', done: true},
    {text: 'Buy meat', done: false},
];
console.log(task);

const renderListItems = listItems => {
    const listElem = document.querySelector('.list');

    const listItemsElems = listItems
        .sort((a, b) => a.done - b.done)
        .map(({text, done}) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            if (done) {
                listItemElem.classList.add('list__item-done');
            }
            const checkboxElem = document.createElement('input');
            checkboxElem.setAttribute('type', 'checkbox');
            checkboxElem.checked = done;
            checkboxElem.classList.add('list__item-checkbox');
            listItemElem.append(checkboxElem, text);

            return listItemElem
        });
    listElem.append(...listItemsElems);
};
renderListItems(task);


























