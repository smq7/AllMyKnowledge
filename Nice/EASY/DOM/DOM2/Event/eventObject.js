let btn = document.querySelector('#btn');

btn.addEventListener('click', function(event) {
    console.log(event.type);
});
// Property / Method	Description
// bubbles	true if the event bubbles
// cancelable	true if the default behavior of the event can be canceled
// currentTarget	the current element on which the event is firing
// defaultPrevented	return true if the preventDefault() has been called.
// detail	more information about the event
// eventPhase	1 for capturing phase, 2 for target, 3 for bubbling
// preventDefault()	cancel the default behavior for the event. This method is only effective if the cancelable property is true
// stopPropagation()	cancel any further event capturing or bubbling. This method only can be used if the bubbles property is true.
// target	the target element of the event
// type	the type of event that was fired