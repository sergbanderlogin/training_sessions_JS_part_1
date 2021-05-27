'use strict';
console.log('--- Async/Await in JavaScript. Task-3. ---');
console.log('              ---------');

console.log("Async/await");
/*

const main = () => {
  console.log('Hi');
  setTimeout(function cb() {
    console.log('there');
  }, 0);
  console.log('JSConfEU');
};

main();
*/

const main = () => {
  console.log('1');
  setTimeout(() => console.log('2'), 0);
  console.log('3');
  setTimeout(() => console.log('4'), 1000);
  console.log('5');
}

main();
console.log('6');


/*
// подивитися як це нагдядно працює можна за посиланням вказаним нижче
// http://latentflip.com/loupe/?code=ZnVuY3Rpb24gbWFpbigpIHsKICBjb25zb2xlLmxvZygnMScpOwogIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIxKCkgewogICAgICBjb25zb2xlLmxvZygnMicpOwogIH0sIDApOwogIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIyKCkgewogICAgICBjb25zb2xlLmxvZygnNCcpOwogIH0sIDEwMDApOwogIGNvbnNvbGUubG9nKCc1Jyk7Cn0KCm1haW4oKTsKY29uc29sZS5sb2coJzYnKTs%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

function main() {
  console.log('1');
  setTimeout(function timer1() {
    console.log('2');
  }, 0);
  setTimeout(function timer2() {
    console.log('4');
  }, 1000);
  console.log('5');
}

main();
console.log('6');
*/

