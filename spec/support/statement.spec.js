import Statement from "../../src/statement.js";
import transactionType from "../../src/transactionType.js";

describe("Bank Challenge - Statement Tests:", () => {

    it("Test that your statement header prints correctly.", () => {
        // Given that:
        const header = "date       || credit  || debit  || balance";
        // When this happens:
        const consoleOutput = spyOn(console, "log");
        Statement.printHeader();
        // Expect this:
        expect(consoleOutput).toHaveBeenCalledWith(header);
    });

    it("Test that your statement displays a summary of all transactions, including dates and amounts.", () => {
        // Given that:
        const statementBody = '14/01/2012 ||         || \x1b[31m500.00\x1b[0m || \x1b[32m2500.00\x1b[0m\n' +
                              '13/01/2012 || \x1b[32m2000.00\x1b[0m ||        || \x1b[32m3000.00\x1b[0m\n' +
                              '10/01/2012 || \x1b[32m1000.00\x1b[0m ||        || \x1b[32m1000.00\x1b[0m'

        const date1 = new Date(Date.UTC(2012, 0, 10)).toLocaleDateString("en-GB");
        const date2 = new Date(Date.UTC(2012, 0, 13)).toLocaleDateString("en-GB");
        const date3 = new Date(Date.UTC(2012, 0, 14)).toLocaleDateString("en-GB");
        
        const transactionAmount1 = {
            getAmount: () => 1000.00,
            getTransactionType: () => transactionType.deposit,
            getDate: () => date1
        };
        const transactionAmount2 = {
            getAmount: () => 2000.00,
            getTransactionType: () => transactionType.deposit,
            getDate: () => date2
        };
        const transactionAmount3 = {
            getAmount: () => 500.00,
            getTransactionType: () => transactionType.withdraw,
            getDate: () => date3
        };
        
        const account = {
            getTransactionList: () => [transactionAmount3, transactionAmount2, transactionAmount1]
        };

        const consoleOutput = spyOn(console, "log");
        // When this happens:
        Statement.statementBody(account);
        // Expect this:
        expect(consoleOutput).toHaveBeenCalledWith(statementBody);
    });
})

