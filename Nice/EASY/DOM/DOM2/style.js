// element.style тут всі стайли знаходяться
// element.style.стайлЯкийНадЗмінити 
// якшо стайл має "-" то в дужки над взяти його 
// Або рисочку пропускати і писати з великої букви тіпа font-weight -> fontWeight

// щоб повністю написати стайл який хочеш
// element.style.cssText = 'color:red;background-color:yellow'; 

// element.setAttribute('style','color:red;background-color:yellow'); або за допомогою 
// element.style.cssText += 'color:red;background-color:yellow'; якшо добавити до існуючого стилю ше стиль

// let style = window.getComputedStyle(element [,pseudoElement];) верне стилі які обчисленні для елементу

// element.className вертає елемент class 
// element.className += newClassName; додати новий клас до елементу з збереження існуючих класів 

// const classes = element.classList; вертає "живу" колекцію класів
//  element.classList.add('info','visible','block'); додає три класи до елементу
// element.classList.remove('visible'); видалюе заданий клас з елементу 
// element.classList.replace(oldToken, newToken); замінює заданий клас 
// element.classList.contains(token) перевіряє чи клас є в елементі
// element.classList.toggle(token) якшо клас не містить заданого класу то він додається 
// якшо містить то видаляється

// отримання висоти і довжени елемента включаючи padding i border 
// let width = box.offsetWidth;
// let height = box.offsetHeight;
// отримання висоти і довжени елемента з  border але без padding  
// let width = box.clientWidth;
// let height = box.clientHeight;

