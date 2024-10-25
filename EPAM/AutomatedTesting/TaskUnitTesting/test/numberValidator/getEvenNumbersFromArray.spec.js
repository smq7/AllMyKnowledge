import  NumbersValidator  from "../../app/numbersValidator.js";
import { expect } from "chai";

describe("take even numbers from array", () => {
    let validator;
    beforeEach(() => {
        validator = new NumbersValidator();
    });

    afterEach(() => {
        validator = null;
    });
    it("must return even numvers from array", () => {
        const res = validator.getEvenNumbersFromArray([1,6,9,10]);
        // console.log(res);
        // console.log(expect(res))
        expect(res).to.be.deep.equal([6, 10]);
        
    })

    // тут ше можна дописати тект тіпа на то шо якшо ми сюда 
    //передамо не число в масиві а шот інше

})