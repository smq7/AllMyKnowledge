import  NumbersValidator  from "../../app/numbersValidator.js";
import { expect } from "chai";

describe("test for is all numbers", () => {
    let validator;
    beforeEach(() => {
        validator = new NumbersValidator();
    });

    afterEach(() => {
        validator = null;
    });

    it("all is number return true", () => {
        const result = validator.isAllNumbers([1,6,9,2,671,5,10]);
        expect(result).to.be.equal(true);
    })

    // тут тож можн тест шо буде якшо ввести не всі числа а шось інше
})