import Transaction from "../../src/transaction.js";
import transactionType from "../../src/transactionType.js";

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

    it("Test that default transaction type is deposit", () => {
        // Given that
        const deposit1 = 50;
        const date1 = new Date(Date.UTC(2012, 0, 10)).toLocaleDateString("en-GB");
        const transaction1 = new Transaction(deposit1, date1);
        // When this happens
        const isDeposit = transaction1.isDeposit();
        // Expect this
        expect(isDeposit).toEqual(true);
    });

    it("Test that setting transaction type works", () => {
        // Given that
        const deposit1 = 50;
        const date1 = new Date(Date.UTC(2012, 0, 10)).toLocaleDateString("en-GB");
        const transaction1 = new Transaction(deposit1, date1);
        // When this happens
        transaction1.setTransactionType(transactionType.withdraw)
        const isWithdrawal= transaction1.isWithdrawal();
        // Expect this
        expect(isWithdrawal).toEqual(true);
    });

    it("Test that each transaction is recorded with the correct transaction type.", () => {
        // Given that
        const deposit1 = 50;
        const date1 = new Date(Date.UTC(2012, 0, 10)).toLocaleDateString("en-GB");
        const transaction1 = new Transaction(deposit1, date1, transactionType.withdraw);
        // When this happens
        const isWithdrawal = transaction1.isWithdrawal();
        // Expect this
        expect(isWithdrawal).toEqual(true);
    });

})