/*
<----------------------------------------- Load/UnloadPAge ----------------------------------->

DOMContentLoaded – the browser fully loaded HTML and completed building the
DOM tree. However, it hasn’t loaded external resources like stylesheets and 
images. In this event, you can start selecting DOM nodes or initialize the 
interface.

load – the browser fully loaded the HTML and also external resources like images and stylesheets.

beforeunload – fires before the page and resources are unloaded. You can use this
event to show a confirmation dialog to confirm if you really want to leave the
page. By doing this, you can prevent data loss in case you are filling out a 
form and accidentally click a link to navigate to another page.

unload – fires when the page has completely unloaded. You can use this event to send the analytic data or to clean up resources.

<----------------------------------------- MOUSE ----------------------------------->

The event object passed to the mouse event handler has a property called button that indicates which mouse button was pressed on the mouse to trigger the event.
mousedown - fires when you depress the mouse button on the element.

mouseup - fires when you release the mouse button on the element.

click - fires when one mousedown and one mouseup detected on the element.

dblclick - double cllick 

mousemove - event fires repeatedly when you move the mouse cursor around an 
element. Even when you move the mouse one pixel, the mousemove event still fires

mouseover - fires when the mouse cursor is outside of the element and 
then move to inside the boundaries of the element.

mouseout - fires when the mouse cursor is over an element and then moves another element.

mouseenter - fires when the mouse cursor is outside of an element and then moves to inside the boundaries of the element.

mouseleave - fires when the mouse cursor is over an element and then moves to the outside of the element’s boundaries.
*/

// The event object passed to the mouse event handler has a property 
// called button that indicates which mouse button was pressed on the mouse
//  to trigger the event
// 0 - ліва кнопка, 1 кольосіко, 2 права кнопка, дальше допоміжні кнопки
// The "screenX" and "screenY" properties return the horizontal 
// and vertical coordinates of the mouse pointer in screen coordinates.
// The "clientX" and "clientY" properties of the event object return horizontal
// and vertical coordinates within the application’s client area at which the mouse event occurred.

let btn = document.querySelector('#btn');
// disable context menu when right-mouse clicked
btn.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});
// show the mouse event message
btn.addEventListener('mouseup', (e) => {
    let msg = document.querySelector('#message');
    switch (e.button) {
        case 0:
            msg.textContent = 'Left mouse button clicked.';
            break;
        case 1:
            msg.textContent = 'Middle mouse button clicked.';
            break;
        case 2:
            msg.textContent = 'Right mouse button clicked.';
            break;
        default:
            msg.textContent = `Unknown mouse button code: ${event.button}`;
    }
});

let btnKeys = document.querySelector('#btnKeys');

btnKeys.addEventListener('click', (e) => {
    let keys = [];

    if (e.shiftKey) keys.push('shift');
    if (e.ctrlKey) keys.push('ctrl');
    if (e.altKey) keys.push('alt');
    if (e.metaKey) keys.push('meta');

    let msg = document.querySelector('#messageKeys');
    msg.textContent = `Keys: ${keys.join('+')}`;
});

let track = document.querySelector('#track');
        track.addEventListener('mousemove', (e) => {
            let log = document.querySelector('#log');
            log.innerText = `
            Screen X/Y: (${e.screenX}, ${e.screenY})
            Client X/Y: (${e.clientX}, ${e.clientY})`
        });
/*
<----------------------------------------- Keyboard ----------------------------------->

keydown – fires when you press a key on the keyboard and fires repeatedly while
 you’re holding down the key.

keyup – fires when you release a key on the keyboard.

keypress – fires when you press a character keyboard like a,b, or c, not the
left arrow key, home, or end keyboard, … The keypress also fires repeatedly
while you hold down the key on the keyboard

The keyboard event has two important properties: key and code. 
The key property returns the character that has been pressed whereas 
the code property returns the physical key code.
*/
let textBox = document.getElementById('message');
    textBox.addEventListener('keydown', (event) => {
        console.log(`key=${event.key},code=${event.code}`);
});
/*
<----------------------------------------- Scroll Events ----------------------------------->
When you scroll a document or an element, the scroll events fire. You can 
trigger the scroll events in the following ways, for example:
Using the scrollbar manually
Using the mouse wheel
Clicking an ID link
Calling functions in JavaScript

scroll - назва івенту 

window object has two properties related to the scroll events: scrollX and scrollY.

The scrollX and scrollY properties return the number of pixels that the 
document is currently scrolled horizontally and vertically. The scrollX and
scrollY are double-precision floating-point values

The pageXOffset and pageYOffset are aliases

The scrollTop property sets or gets the number of pixels that the element’s
content is vertically scrolled. The scrollLeft property gets and sets the 
number of pixels that an element’s content is scrolled from its left edge.

є якійсь крч ше ПАСИВНІ івенти не оч понятно шо ет пока 
<----------------------------------------- Focus Events ----------------------------------->
focus - fires when an element has received focus.

blur - fires when an element has lost focus.

The focusin and focusout fire at the same time as focus and blur, however, they bubble while the focus and blur do not.
<----------------------------------------- Hashchange Events ----------------------------------->
https://www.javascripttutorial.net/javascript-dom/javascript-hashchange/#footer
то шо після # це УРЛХЕШ

The hashchange event fires when the URL hash changes from one to another

To get the current URL hash, you access the hash property of the location object:

window.addEventListener('hashchange',() => {
    console.log(`The current URL hash is ${location.hash}`);
});














*/
