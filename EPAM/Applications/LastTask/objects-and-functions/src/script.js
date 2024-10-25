function sumPrices(prices) {
    let sum = 0;
    for(let prop in prices) {
        if(typeof prices[prop] === "number" && Number.isFinite(prices[prop])){
            sum += prices[prop];
        }        
    }
    return sum;
}

function createUserWithFullName(firstName, lastName) {
    let res = {
        firstName: firstName,
        lastName: lastName,
        setFirstName(newFirstName) {
            this.firstName = newFirstName;
        },
        setLastName(newLastName) {
            this.lastName = newLastName;
        },
        getFullName() {
            return this.firstName +" "+ this.lastName;
        },
    };

    return res
}

function countLetters(strInput) {
    let str = strInput.replaceAll(" ","");
    let obj = {};
    for(let i = 0; i < str.length; i++){
        if(obj.hasOwnProperty(str[i])){
            obj[str[i]] += 1;
        } else {
            obj[str[i]] = 1;
        }
    }
    return obj;
}
  