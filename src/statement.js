import transactionType from "./transactionType.js";

class Statement {
    static printHeader() {
        console.log("date       || credit  || debit   || balance")
    }

    static statementBody(account) {
        let balance = 0;
        let bankStatementBody = [];
        let transactionList = [...account.getTransactionList()];
        transactionList.reverse();
        
        transactionList.forEach(transaction => {
            let credit = transaction.getTransactionType() === transactionType.deposit ? transaction.getAmount().toFixed(2).toString() : " ";
            let debit = transaction.getTransactionType() === transactionType.withdraw ? transaction.getAmount().toFixed(2).toString() : " ";

            balance += transaction.getTransactionType() === transactionType.deposit ? transaction.getAmount() : -transaction.getAmount();

            bankStatementBody.push(`${transaction.getDate()} || ${credit.padEnd(7)} || ${debit.padEnd(7)} || ${balance.toFixed(2)}`);
        });
        
        bankStatementBody.reverse()
        console.log(bankStatementBody.join('\n'));
    }
}

export default Statement;
