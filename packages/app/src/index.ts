import { sayHelloFromBarLib } from 'bar-lib';
import { sayHelloFromBazLib } from 'baz-lib';
import { sayHelloFromFooLib } from 'foo-lib';

console.log('Hello from app');
sayHelloFromFooLib();
sayHelloFromBarLib();
sayHelloFromBazLib();
