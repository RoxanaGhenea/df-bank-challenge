import transactionType from "./transactionType.js";

class Statement {
    static printHeader() {
        console.log("date       || credit  || debit  || balance")
    }

    static formatTextToRed (value) {
        const redCode = '\x1b[31m';
        const resetRedCode = '\x1b[0m';
        return value = redCode + value + resetRedCode;
    }

    static formatTextToGreen (value) {
        const greenCode = '\x1b[32m';
        const resetGreenCode = '\x1b[0m';
        return value = greenCode + value + resetGreenCode;
    }

    static statementBody(account) {
        let balance = 0;
        let bankStatementBody = [];
        let transactionList = [...account.getTransactionList()];
        transactionList.reverse();
        
        transactionList.forEach(transaction => {
            let credit = transaction.getTransactionType() === transactionType.deposit ? this.formatTextToGreen(transaction.getAmount().toFixed(2).toString()) : " ";
            let debit = transaction.getTransactionType() === transactionType.withdraw ? this.formatTextToRed(transaction.getAmount().toFixed(2).toString()) : " ";

            balance += transaction.getTransactionType() === transactionType.deposit ? transaction.getAmount() : -transaction.getAmount();

            const formattedBalance = balance < 0 ? this.formatTextToRed(balance.toFixed(2)) : this.formatTextToGreen(balance.toFixed(2));

            bankStatementBody.push(`${transaction.getDate()} || ${credit.padEnd(7)} || ${debit.padEnd(6)} || ${formattedBalance}`);
        });

        bankStatementBody.reverse()
        console.log(bankStatementBody.join('\n'));
    }
}

export default Statement;
