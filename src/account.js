class Account {
    #balance = 0.00;

    includeTransaction(transaction) {
        if (!this.transactionValidator(transaction)) {
            this.#balance += transaction.getAmount();
        }
    }

    transactionValidator(transaction) {
        return transaction.getAmount() <= 0;
    }

    getBalance() {
        return this.#balance;
    }
}

export default Account;