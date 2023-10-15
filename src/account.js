class Account {
    #balance = 0.00;
    #limit = 0.00;
    #transactionList = [];

    includeTransaction(transaction) {
        if (this.transactionValidator(transaction)) {
            this.calculationValidator(transaction);
            this.#transactionList.push(transaction);
        }
    }

    calculationValidator(transaction) {
        if (transaction.isDeposit()) {
            this.#balance += transaction.getAmount();
        }
        if (transaction.isWithdrawal()) {
            this.#balance -= transaction.getAmount();
        }
    }

    withdrawTransactionValidator(transaction) {
        return !transaction.isWithdrawal() || transaction.getAmount() <= this.#limit + this.#balance;
    }

    transactionValidator(transaction) {
        return transaction.getAmount() > 0 && typeof (transaction.getAmount()) !== 'string' && this.withdrawTransactionValidator(transaction);
    }

    getBalance() {
        return this.#balance;
    }

    getTransactionList() {
        return this.#transactionList.sort((a, b) => a.getDate().localeCompare(b.getDate()));
    }
}

export default Account;