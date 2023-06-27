import Transaction from "../../src/transaction.js";
import Account from "../../src/account.js";
import transactionType from "../../src/transactionType.js";

describe('Bank Challenge - Account Tests:', () => {

    it("Test if a deposit is made this increases the account balance correctly", () => {
        // Given that
        const balance = new Account();
        const transactionAmount = new Transaction(10.00);
        const deposit = 10.00;
        // When this happens
        balance.includeTransaction(transactionAmount);
        const actualBalance = balance.getBalance();
        // Expect this
        expect(actualBalance).toEqual(deposit);
    });

    it("Test if the system handles invalid amounts such as negative amounts", () => {
        // Given that
        const balance = new Account();
        const deposit = -10.00;
        const transactionAmount = new Transaction(deposit);
        // When this happens
        balance.includeTransaction(transactionAmount);
        const actualBalance = balance.getBalance();
        // Expect this
        expect(actualBalance).toEqual(0.00);
    });

    it("Test if the system handles invalid amounts such as strings.", () => {
        // Given that
        const balance = new Account();
        const deposit = 'stakhda';
        const transactionAmount = new Transaction(deposit);
        // When this happens
        balance.includeTransaction(transactionAmount)
        const actualBalance = balance.getBalance();
        // Expect this
        expect(actualBalance).toEqual(0.00);
    });

    it("Test if a withdrawal is made this decreases the account balance correctly.", () => {
        // Given that
        const balance = new Account();
        const withdraw = 50.00;
        const transactionAmount = new Transaction(withdraw);
        // When this happens
        transactionAmount.setTransactionType(transactionType.withdraw);
        balance.includeTransaction(transactionAmount)
        const actualBalance = balance.getBalance();
        // Expect this
        expect(actualBalance).toEqual(-50.00);
    })
})