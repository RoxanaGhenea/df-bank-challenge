class Statement {
    static printHeader() {
        console.log('date       || credit  || debit  || balance');
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

    static getCredit(transaction) {
        let credit = transaction.isDeposit() ? this.formatTextToGreen(transaction.getAmount().toFixed(2).toString()) : ' ';
        return credit;
    }
    
    static getDebit(transaction) {
        let debit = transaction.isWithdrawal() ? this.formatTextToRed(transaction.getAmount().toFixed(2).toString()) : ' ';
        return debit;
    }

    static formattedBalance(balance) {
        const formattedBalance = balance < 0 ? this.formatTextToRed(balance.toFixed(2)) : this.formatTextToGreen(balance.toFixed(2));
        return formattedBalance;
    }


    static getTransactionStatements(transactionList) {
        let balance = 0, bankStatementBody = [];
        transactionList.forEach(transaction => {
            balance += transaction.isDeposit() ? transaction.getAmount() : -transaction.getAmount();
            bankStatementBody.push(`${transaction.getDate()} || ${this.getCredit(transaction).padEnd(7)} || ${this.getDebit(transaction).padEnd(6)} || ${this.formattedBalance(balance)}`);
        });
        return bankStatementBody;
    }

    static statementBody(account) {
        let transactionList = [...account.getTransactionList()];
        let bankStatementBody = this.getTransactionStatements(transactionList);
        bankStatementBody.reverse();
        console.log(bankStatementBody.join('\n'));
    }
}
export default Statement;
