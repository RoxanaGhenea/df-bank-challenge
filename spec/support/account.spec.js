import Account from "../../src/account.js";

describe('Bank Challenge - Account Tests:', () => {
    let balance;
    beforeEach(() => {
        balance = new Account();
    });
    
    it("Test if a deposit is made this increases the account balance correctly", () => {
        // Given that
        const transactionAmount = {
            getAmount: () => 10.00,
            isDeposit: () => true,
            isWithdrawal: () => false
        };
        const deposit = 10.00;
        // When this happens
        balance.includeTransaction(transactionAmount);
        const actualBalance = balance.getBalance();
        // Expect this
        expect(actualBalance).toEqual(deposit);
    });

    it("Test if the system handles invalid amounts such as negative amounts", () => {
        // Given that
        const deposit = -10.00;
        const transactionAmount = {
            getAmount: () => -10.00,
            isDeposit: () => true,
            isWithdrawal: () => false
        };
        // When this happens
        balance.includeTransaction(transactionAmount);
        const actualBalance = balance.getBalance();
        // Expect this
        expect(actualBalance).toEqual(0.00);
    });

    it("Test if the system handles invalid amounts such as strings.", () => {
        // Given that
        const deposit = 'stakhda';
        const transactionAmount = {
            getAmount: () => deposit,
            isDeposit: () => true,
            isWithdrawal: () => false
        };;
        // When this happens
        balance.includeTransaction(transactionAmount);
        const actualBalance = balance.getBalance();
        // Expect this
        expect(actualBalance).toEqual(0.00);
    });

    it("Test if a withdrawal is made this decreases the account balance correctly.", () => {
        // Given that
        const deposit = 100.00;
        const withdraw = 50.00;
        const transactionAmount1 = {
            getAmount: () => 100.00,
            isDeposit: () => true,
            isWithdrawal: () => false
        };
        const transactionAmount2 = {
            getAmount: () => 50.00,
            isDeposit: () => false,
            isWithdrawal: () => true
        };
        // When this happens
        balance.includeTransaction(transactionAmount1);
        balance.includeTransaction(transactionAmount2);
        const actualBalance = balance.getBalance();
        // Expect this
        expect(actualBalance).toEqual(50.00);
    });

    it("Test that you cannot withdraw more than what you have in your account.", () => {
        // Given that
        const withdraw = 50.00;
        const transactionAmount = {
            getAmount: () => 50.00,
            isDeposit: () => false,
            isWithdrawal: () => true
        };
        // When this happens
        balance.includeTransaction(transactionAmount);
        const actualBalance = balance.getBalance();
        // Expect this
        expect(actualBalance).toEqual(0.00);
    });

    it("Test that the transactions are recorded in the correct chronological order, from to oldest to most recent transaction", () => {
        // Given that
        const account = balance;
        const deposit1 = 100.00;
        const deposit2 = 150;
        const withdrawal = 25.00;
        const date1 = new Date(Date.UTC(2012, 0, 10)).toLocaleDateString("en-GB");
        const date2 = new Date(Date.UTC(2012, 0, 15)).toLocaleDateString("en-GB");
        const date3 = new Date(Date.UTC(2012, 0, 13)).toLocaleDateString("en-GB");
        const transactionAmount1 = {
            getAmount: () => 100.00,
            isDeposit: () => true,
            isWithdrawal: () => false,
            getDate: () => date1
        };
        const transactionAmount2 = {
            getAmount: () => 150.00,
            isDeposit: () => true,
            isWithdrawal: () => false,
            getDate: () => date2
        };
        const transactionAmount3 = {
            getAmount: () => 50.00,
            isDeposit: () => false,
            isWithdrawal: () => true,
            getDate: () => date3
        };
        // When this happens
        account.includeTransaction(transactionAmount1);
        account.includeTransaction(transactionAmount2);
        account.includeTransaction(transactionAmount3);
        const transactionArray = [transactionAmount1, transactionAmount3, transactionAmount2]
        const actualArray = account.getTransactionList();
        // Expect this
        expect(actualArray).toEqual(transactionArray);
    });
})