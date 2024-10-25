import  NumbersValidator  from "../../app/numbersValidator.js";
import { expect } from "chai";

describe("isInteger posotive tests", () => {
    let validator;
    
    beforeEach(() => {
        validator = new NumbersValidator();
    })

    afterEach(() => {
        validator = null;
    });

    it("return true when integer provided", () => {
        const result = validator.isInteger(7);
        expect(result).to.be.equal(true);
    })
    it("return Error message when not integer provided", () => {
        expect(() =>{
            validator.isInteger("vad");
        }).to.throw("[vad] is not a number")
    })
})