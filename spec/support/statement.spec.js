import Statement from "../../src/statement.js";

describe("Bank Challenge - Statement Tests:", () => {

    // User story 4 test 10
    it("Test that your statement header prints correctly.", () => {
        // Given that:
        const header = "date       || credit  || debit  || balance";
        // When this happens:
        spyOn(console, 'log');
        Statement.printStatement();
        // Expect this:
        expect(console.log).toHaveBeenCalledWith(header);
    })
})