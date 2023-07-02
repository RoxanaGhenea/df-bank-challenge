import Account from "../../src/account.js";
import transactionType from "../../src/transactionType.js";

describe('Bank Challenge - Account Tests:', () => {
    let balance;
    beforeEach(() => {
        balance = new Account();
    });

    class MockTransaction {

        constructor(amount, date, transactType = transactionType.deposit) {
            this.amount = amount;
            this.transactType = transactType;
            this.date = date;
        }

        getAmount() {
            return this.amount;
        }
    
        setTransactionType(type) {
            this.transactType = type;
        }
    
        getTransactionType() {
            return this.transactType;
        }
    
        getDate() {
            return this.date;
        }
    }

    // User story 1 test 2
    it("Test if a deposit is made this increases the account balance correctly", () => {
        // Given that
        const transactionAmount = new MockTransaction(10.00);
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
        const deposit = -10.00;
        const transactionAmount = new MockTransaction(deposit);
        // When this happens
        balance.includeTransaction(transactionAmount);
        const actualBalance = balance.getBalance();
        // Expect this
        expect(actualBalance).toEqual(0.00);
    });

    // User story 1 test 3 part 2
    it("Test if the system handles invalid amounts such as strings.", () => {
        // Given that
        const deposit = 'stakhda';
        const transactionAmount = new MockTransaction(deposit);
        // When this happens
        balance.includeTransaction(transactionAmount);
        const actualBalance = balance.getBalance();
        // Expect this
        expect(actualBalance).toEqual(0.00);
    });

    // User story 2 test 4
    it("Test if a withdrawal is made this decreases the account balance correctly.", () => {
        // Given that
        const deposit = 100.00;
        const withdraw = 50.00;
        const transactionAmount1 = new MockTransaction(deposit);
        const transactionAmount2 = new MockTransaction(withdraw);
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
        const withdraw = 50.00;
        const transactionAmount = new MockTransaction(withdraw);
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
        const account = balance;
        const deposit1 = 100.00;
        const deposit2 = 150;
        const withdrawal = 25.00;
        const date1 = new Date(Date.UTC(2012, 0, 10)).toLocaleDateString("en-GB");
        const date2 = new Date(Date.UTC(2012, 0, 15)).toLocaleDateString("en-GB");
        const date3 = new Date(Date.UTC(2012, 0, 13)).toLocaleDateString("en-GB");
        const transactionAmount1 = new MockTransaction(deposit1, date1);
        const transactionAmount2 = new MockTransaction(deposit2, date2);
        const transactionAmount3 = new MockTransaction(withdrawal, date3, transactionType.withdraw);
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