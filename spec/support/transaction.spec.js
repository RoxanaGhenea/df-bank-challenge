import Transaction from "../../src/transaction.js";

describe('Bank Challenge - Transaction Tests:', () => {

    //User story 1 test 1
    it("Should call Transaction's getDepositAmount() method", () => {
        // Given that
        const transaction = new Transaction(10.00);
        const deposit = 10.00;
        // When this happens
        const actual = transaction.getAmount();
        // Expect this
        expect(actual).toEqual(deposit);
    });

    //User story 3 test 8
    it("Test that each transaction is recorded with the correct date.", () => {
        // Given that
        const deposit1 = 50;
        const date1 = new Date(Date.UTC(2012, 0, 10)).toLocaleDateString("en-GB");
        const transaction1 = new Transaction(deposit1, date1);
        // When this happens
        const actualDate = transaction1.getDate();
        // Expect this
        expect(actualDate).toEqual(date1);
    });

})