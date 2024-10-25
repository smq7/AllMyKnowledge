// якшо не буде хоть одного "слухача" на івент "error" то якшо еррор случиться програма
// крашнеться 
// As a best practice, listeners should always be added for the 'error' events.
const EventEmitter = require('node:events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('error', (err) => {
  console.error('whoops! there was an error');
});
myEmitter.emit('error', new Error('whoops!'));
// Prints: whoops! there was an error