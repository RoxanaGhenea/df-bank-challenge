import Transaction from "../../src/transaction.js";
import Account from "../../src/account.js";
import transactionType from "../../src/transactionType.js";

describe('Bank Challenge - Account Tests:', () => {

    // User story 1 test 2
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

    // User story 1 test 3 part 1 
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

    // User story 1 test 3 part 2
    it("Test if the system handles invalid amounts such as strings.", () => {
        // Given that
        const balance = new Account();
        const deposit = 'stakhda';
        const transactionAmount = new Transaction(deposit);
        // When this happens
        balance.includeTransaction(transactionAmount);
        const actualBalance = balance.getBalance();
        // Expect this
        expect(actualBalance).toEqual(0.00);
    });

    // User story 2 test 4
    it("Test if a withdrawal is made this decreases the account balance correctly.", () => {
        // Given that
        const balance = new Account();
        const deposit = 100.00;
        const withdraw = 50.00;
        const transactionAmount1 = new Transaction(deposit);
        const transactionAmount2 = new Transaction(withdraw);
        // When this happens
        balance.includeTransaction(transactionAmount1);
        transactionAmount2.setTransactionType(transactionType.withdraw);
        balance.includeTransaction(transactionAmount2);
        const actualBalance = balance.getBalance();
        // Expect this
        expect(actualBalance).toEqual(50.00);
    });

    // User story 2 test 5
    it("Test that you cannot withdraw more than what you have in your account.", () => {
        // Given that
        const balance = new Account();
        const withdraw = 50.00;
        const transactionAmount = new Transaction(withdraw);
        // When this happens
        transactionAmount.setTransactionType(transactionType.withdraw);
        balance.includeTransaction(transactionAmount);
        const actualBalance = balance.getBalance();
        // Expect this
        expect(actualBalance).toEqual(0.00);
    });

    // User story 3 test 9
    it("Test that the transactions are recorded in the correct chronological order, from most recent to oldest transaction", () => {
        // Given that
        const account = new Account();
        const deposit1 = 100.00;
        const deposit2 = 150;
        const withdrawal = 25.00;
        const date1 = new Date(Date.UTC(2012, 0, 10)).toLocaleDateString("en-GB");
        const date2 = new Date(Date.UTC(2012, 0, 15)).toLocaleDateString("en-GB");
        const date3 = new Date(Date.UTC(2012, 0, 13)).toLocaleDateString("en-GB");
        const transactionAmount1 = new Transaction(deposit1, date1);
        const transactionAmount2 = new Transaction(deposit2, date2);
        const transactionAmount3 = new Transaction(withdrawal, date3, transactionType.withdraw);
        // When this happens
        account.includeTransaction(transactionAmount1);
        account.includeTransaction(transactionAmount2);
        account.includeTransaction(transactionAmount3);
        const transactionArray = [transactionAmount2, transactionAmount3, transactionAmount1];
        const actualArray = account.getTransactionList();
        // Expect this
        expect(actualArray).toEqual(transactionArray);
    });

})