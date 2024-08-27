const {addFunc, isDivisibleBy5} = require("./sample");

describe("Test Suite for sample.js functions", ()=>{
    
    it("should add 3 numbers", ()=>{
        const result = addFunc(1, 3, 4);
        expect(result).not.toBe(7);
    })

    it("should check divisibility by 5", ()=>{
        const result = isDivisibleBy5(1283);
        expect(result).toBe(false);
    })

    it("should check divisibility by 5", () =>{
        const result = isDivisibleBy5(1280);
        expect(result).toBe(true);
    })
})
//So when the command `npm run test` is run, it calls the test suite and runs the individual tests.
