// To generate an event programmatically, you follow these steps:

// First, create a new Event object using Event constructor.
// Then, trigger the event using element.dispatchEvent() method.
let event = new Event(type, [,options]);
// type is a string that specifies the event type such as 'click'.

// options is an object with two optional properties:
// bubbles: is a boolean value that determines if the event bubbles or not. If it is true then the event is bubbled and vice versa.
// cancelable: is also a boolean value that specifies whether the event is cancelable when it is true.

// If the event comes from the user actions, the event.isTrusted property is
// set to true. In case the event is generated by code, the event.isTrusted is false.
// Therefore, you can examine the value of event.isTrusted property to check 
// the “authenticity” of the event.
let btn = document.querySelector('.btn');

 btn.addEventListener('click', function () {
        alert('Mouse Clicked');
 });

let clickEvent = new Event('click');
btn.dispatchEvent(clickEvent);