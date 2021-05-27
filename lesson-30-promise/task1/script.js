'use strict';
console.log('--- Promise in JavaScript. Task1. ---');
console.log('         ---------');

// addImage

const addImageWithPromise = imgSrc => {
  const p = new Promise((resolveCb, rejectCb) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My Image');
    imgElem.src = imgSrc;
    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    const onImageLoaded = () => {
      const {width, height} = imgElem;
      resolveCb({width, height});
    }

    imgElem.addEventListener('load', onImageLoaded);

    imgElem.addEventListener('error', () => rejectCb(new Error('Image load failed.')));
  });
  return p;
};

const imgSrc = 'https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson15/task1/big.jpeg';
const resultPromise = addImageWithPromise(imgSrc);

resultPromise.catch(error => console.log(error));
resultPromise.then(data => console.log(data));

// console.log(resultPromise);

// const imgSrc = 'https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson15/task1/big.jpeg',
//     onImageLoaded = (error, data) => {
//       if (error) {
//         console.log(error);
//         return;
//       }
//       const {width, height} = data;
//       const sizeElem = document.querySelector('.image-size');
//       sizeElem.textContent = `${width} x ${height}`;
//     };
// addImageWithPromise(imgSrc, onImageLoaded);

/*
// код який було переписано на Promise (диввитися вищще)
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
    }, imgSrc = 'https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson15/task1/big.jpeg',
    onImageLoaded = (error, data) => {
      if (error) {
        console.log(error);
        return;
      }
      const {width, height} = data;
      const sizeElem = document.querySelector('.image-size');
      sizeElem.textContent = `${width} x ${height}`;
    };
addImage(imgSrc, onImageLoaded);
*/




/*
const addImage = url => new Promise((resolve, reject) => {
  const img = document.createElement('img');
  img.setAttribute('alt', 'User avatar');
  img.src = url;

  const pageElem = document.querySelector('.page');
  pageElem.append(img);

  const onImageLoaded = () => {
    const { width, height } = img;
    resolve({ width, height });
  }

  const onImageLoadError = () => reject(new Error('Image load failed'));

  img.addEventListener('load', onImageLoaded);

  img.addEventListener('error', onImageLoadError);
});
*/



console.log("=== Приклади ===");
// Приклад роботи Promise можна подивитися за посиланням:
// http://latentflip.com/loupe/?code=ZnVuY3Rpb24gbWFpbigpIHsKICBjb25zb2xlLmxvZygnMScpOwogIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIxKCkgewogICAgICBjb25zb2xlLmxvZygnMicpOwogIH0sIDApOwogIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIyKCkgewogICAgICBjb25zb2xlLmxvZygnNCcpOwogIH0sIDEwMDApOwogIGNvbnNvbGUubG9nKCc1Jyk7Cn0KCm1haW4oKTsKY29uc29sZS5sb2coJzYnKTs%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

/*
console.log('Code before promise');

const myPromise = new Promise(function (resolve, reject) {
  resolve('Promise result');
});

console.log("Some text");
*/

/*
console.log('Code before promise');

const myPromise = new Promise(function (resolve, reject) {
  resolve('Promise result');
});

function onSuccess(data) {
  console.log(data);
}

console.log("Some text");
*/

/*
console.log('Code before promise');

const myPromise = new Promise(function (resolve, reject) {
  setTimeout(function timer1() {
  resolve('Promise result');
  }, 2000);
});

function onSuccess(data) {
  console.log(data);
}

myPromise.then(onSuccess);

console.log("Some text");
*/

