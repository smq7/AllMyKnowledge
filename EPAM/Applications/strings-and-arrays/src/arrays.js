/**
 * As a representation of Chars array please use our sample: ./data/characters.json
 * return an array of characters names
 * Avoid using forEach() method and for|for..of loops
 * @param {Array} chars
 * @return {Array} - char names
 */

function getCharactersNames(chars) {
    let newArr =[] 
    chars.map(obj => {
        newArr.push(obj.name);
    })
    return newArr;
}

/**
 * print (console.log) names of all characters
 * @param {Array} chars
 */
function printCharacterNames(chars) {
    chars.map(obj => {
        console.log(obj.name);
    })
}


/**
 * return an array of non-human (species !== 'Human') characters
 * Avoid using forEach() method and for|for..of loops
 * @param {Array} chars
 * @return {Array} - non human characters
 */
function getNonHumanCharacters(chars) {
    return chars.filter(obj => obj.species !== "Human");;
}

/**
 * return info about character named 'Jerry Smith'
 * Avoid using forEach() method and for|for..of loops
 * @param {Array} chars
 * @return {Object} - Jerry object
 */
function getJerryInfo(chars) {
    return chars.find(obj => obj.name === "Jerry Smith");
}

/**
 * check if all characters are human (species attribute). return true if all, false if not
 * Avoid using forEach() method and for|for..of loops
 * @param {Array} chars
 * @return {boolean}
 */
function isAllHuman(chars) {
    return chars.every(obj => obj.species === "Human");
}

/**
 * check if there are any 'type == Fish-Person' characters. return true if any, false if not
 * Avoid using forEach() method and for|for..of loops
 * @param {Array} chars
 * @return {boolean}
 */
function isAnyFishPerson(chars) {
    return chars.some(obj => obj.type == "Fish-Person");
}

/**
 * write a method to find an index of minimal item from an array;
 * @param {Array} arr
 * @return {number} - minimum element index
 * @example
 * console.log(minItem([2,5,6,3,1,8])) // 4
 */
function minItem(arr) {
    let minNum = arr[0];
    arr.forEach(el => {
        if(el < minNum){
            minNum = el;
        }
    })
    return arr.indexOf(minNum);
  }

module.exports = {
    getCharactersNames,
    printCharacterNames,
    getNonHumanCharacters,
    getJerryInfo,
    isAllHuman,
    isAnyFishPerson,
    minItem,
};
