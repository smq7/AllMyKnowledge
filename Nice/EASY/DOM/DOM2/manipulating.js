// let element = document.createElement(htmlTag); створює елмент з заданим тегом

// parentNode.appendChild(childNode); додає чайлдноду в кінець парентноди 
// якшо childNode вже є в докоменті то воно її перенесе на нове місце 

// let text = node.textContent; отримати текст з ноди і текст всіх дітей цієї ноди даже якщо вони не
//  відображаються на сторінці
// let text = node.innerText отримати текс з ноди і всіх його дітей но якшо текст скритий то
// він не буде виводитись(returns the human-readable text that takes CSS into account.)
// element.innerHTML; дозволяє написати в елемент HTML розмітку або отримати з елемента HTMLрозмітку 
// (переводиться даже внутрішній хтмл)

// let fragment = new DocumentFragment();
// let fragment = document.createDocumentFragment(); створюємо документ фрагмент це як  простий докуменет но 
// який не є частиную ДОМ крч це шоб создати великий кусок сторінки 
//  в коді і потом добавити його на сторінку одним махом

// parentNode.append(...nodes); добавляє елементи до вибраної ноди після всіх елементів які є в цій ноді
// parentNode.append(...DOMStrings); 

// parentNode.prepend(...nodes); добавляє елементи до вибраної ноди перед  всіма елементами які є в цій ноді
// parentNode.prepend(...DOMStrings);

// Element.before(str1, str2, ... strN)
// element.before(node1, node2, ... nodeN) вставляЄ одну або багато нод перед вибраним елементом 
// Element.after(str1, str2, ... strN)
// Element.after(node1, node2, ... nodeN) вставляЄ одну або багато нод після вибраним елементом 

// element.insertAdjacentHTML(positionName, text); добавляє текс в вибрану позиці. 
// positionName:
            // 'beforebegin': before the element
            // 'afterbegin': before its first child of the element.
            // 'beforeend': after the last child of the element
            // 'afterend': after the element

// parentNode.replaceChild(newChild, oldChild); замінює стару дитину на нову 
// let childNode = parentNode.removeChild(childNode); видалає дітьо

// let clonedNode = originalNode.cloneNode(deep); якшо deep true то клонує і нащадків якшо фолсе то тільки ноду 
// parentNode.insertBefore(newNode, existingNode); вставляє ноду перед заданою нодою
// parentNode.insertAfter(newNode, existingNode); вставляє ноду після заданої ноди