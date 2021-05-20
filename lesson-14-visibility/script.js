'use strict';
console.log('--- functions: area of visibility ---');
console.log('---------');
console.log('--- sendMessage ---');
/*
let message = 'Just lelarn it!';

function sendMessage(name){
  const sender = 'Gromcode';
  console.log(`${name}, ${message}. You ${sender}`);
};

function setMessage(text) {
  message = text;
}

sendMessage('Serg');
setMessage('Hello!');
sendMessage('Serg');
message = 'Hi!';
sendMessage('Serg');
*/
console.log('---------');
console.log('--- messanger ---'); 

let message = 'Hi!';

const createMessanger = () => {

function sendMessage(name){
  const sender = 'Gromcode';
  console.log(`${name}, ${message}. You ${sender}`);
};

function setMessage(text) {
  message = text;
}

  return {
    sendMessage,
    setMessage,
  }
};

const messanger1 = createMessanger();

messanger1.sendMessage("Bob");

const messanger2 = createMessanger();

messanger2.sendMessage('Tom');
messanger2.setMessage('Hello!');

messanger1.sendMessage("Ann");
console.log('---------');
