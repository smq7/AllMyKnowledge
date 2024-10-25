// будь який івент який є в ноде джс є крч інстансом івент емітера
// значення які повертають слухачі ігноріруються тільки то шо в них тіпа виконується
// фукнція on() створює "слухача" на заданий івент 
// функція emit() викликає(запускає) івент з заданою назвою

const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
myEmitter.on('event', () => {
  console.log('second Listener!');
  return "vadim"
});
myEmitter.emit('event');
////////////////////////////////////////////////////////////////////////////////////
// once() тільки один раз викличиться івент слідуючі рази ігноруються
let m = 0;

myEmitter.once('event', () => {
  console.log(++m);
});
myEmitter.emit('event');
// Prints: 1
myEmitter.emit('event');
// Ignored