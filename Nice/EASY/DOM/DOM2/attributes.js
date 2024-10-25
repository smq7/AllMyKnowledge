// element.getAttribute(name) – get the attribute value
// element.setAttribute(name, value) – set the value for the attribute
// element.hasAttribute(name) – check for the existence of an attribute
// element.removeAttribute(name) – remove the attribute

// element.attributes має "живу" колекцію атрибутів елементу 


// "data-" якшо потрібно додати кастомний атрибут потрібно начинати його з "data-"
// element.dataset  шоб подивитись кастомні атрибути треба використовувати до елемента element.dataset
<div id="main" data-progress="pending" data-value="10%"></div>
let bar = document.querySelector('#main');
console.log(bar.dataset);