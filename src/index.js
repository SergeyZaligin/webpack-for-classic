import user from './modules/user';
import './scss/main.scss';
//import img from './images/logo/brain.png';
//import img2 from './images/logo/two.png';

//const imgTag = document.querySelector('.img');

//imgTag.setAttribute('src', img);

async function foo() {
  console.log('async working!');
};

async function bar() {
  await foo();
  console.log('after foo');
};

console.log('User', user);

bar();