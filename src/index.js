import user from './javascript/modules/user';
import './scss/main.scss';

async function foo() {
  console.log('async working!');
}

async function bar() {
  await foo();
  console.log('after foo');
}

console.log('User', user);

bar();
