import Transaction from "../../src/transaction.js";

describe('Bank Challenge - Transaction Tests:', () => {

    it("Should call Transaction's getDepositAmount() method", () => {
        // Given that
        const transaction = new Transaction(10.00);
        const deposit = 10.00;
        // When this happens
        const actual = transaction.getAmount();
        // Expect this
        expect(actual).toEqual(deposit);
    });

})