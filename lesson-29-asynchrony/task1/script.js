'use strict';
console.log('--- Async/Await in JavaScript. Task-1. ---');
console.log('              ---------');

console.log("Async/await");

/*
// === перший крок ===
const buttonElem = document.querySelector('#button');

buttonElem.addEventListener('click', () => console.log('Click Me'));

let sum = 0;
const startTime = new Date();
console.log("Cycle started");
for (let i = 0; i < 5e5; i++) {
  sum += i;
}
const endTime = new Date();
console.log(`Cycle took ${endTime - startTime}ms`);
*/

/*

const addImage = (imgSrc) => {
  const imgElem = document.createElement('img');
  imgElem.setAttribute('alt', 'My Image');
  imgElem.src = imgSrc;
  const containerElem = document.querySelector('.page');
  containerElem.append(imgElem);

  const { width, height } = imgElem;

  return { width, height };
};

const imgSrc = 'https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson15/task1/big.jpeg';

const { width, height } = addImage(imgSrc);

const sizeElem = document.querySelector('.image-size');
sizeElem.textContent = `${width} x ${height}`;
*/

/*
// === другий крок ===
const addImage = (imgSrc) => {
  const imgElem = document.createElement('img');
  imgElem.setAttribute('alt', 'My Image');
  imgElem.src = imgSrc;
  const containerElem = document.querySelector('.page');
  containerElem.append(imgElem);

  const onImageLoaded = () => {
    const { width, height } = imgElem;
    console.log( width, height);
  }

  imgElem.addEventListener('load', onImageLoaded);

  const { width, height } = imgElem;

  return { width, height };
};

const imgSrc = 'https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson15/task1/big.jpeg';

const { width, height } = addImage(imgSrc);

const sizeElem = document.querySelector('.image-size');
sizeElem.textContent = `${width} x ${height}`;
*/

/*

// === третій крок ===
const addImage = (imgSrc, callback) => {
  const imgElem = document.createElement('img');
  imgElem.setAttribute('alt', 'My Image');
  imgElem.src = imgSrc;
  const containerElem = document.querySelector('.page');
  containerElem.append(imgElem);

  const onImageLoaded = () => {
    const { width, height } = imgElem;
    callback ({ width, height });
  }

  imgElem.addEventListener('load', onImageLoaded);
};

const imgSrc = 'https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson15/task1/big.jpeg';

const onImageLoaded = ({ width, height }) => {
  const sizeElem = document.querySelector('.image-size');
  sizeElem.textContent = `${width} x ${height}`;
}

addImage(imgSrc, onImageLoaded);
*/


// === четвертий крок ===
const addImage = (imgSrc, callback) => {
  const imgElem = document.createElement('img');
  imgElem.setAttribute('alt', 'My Image');
  imgElem.src = imgSrc;
  const containerElem = document.querySelector('.page');
  containerElem.append(imgElem);

  const onImageLoaded = () => {
    const {width, height} = imgElem;
    callback(null, {width, height});
  }

  imgElem.addEventListener('load', onImageLoaded);

  imgElem.addEventListener('error', () => callback('Image load failed.'));
};

const imgSrc = 'https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson15/task1/big.jpeg';

const onImageLoaded = (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  const {width, height} = data;
  const sizeElem = document.querySelector('.image-size');
  sizeElem.textContent = `${width} x ${height}`;
}

addImage(imgSrc, onImageLoaded);
