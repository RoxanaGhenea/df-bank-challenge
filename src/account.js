import transactionType from "./transactionType.js";

class Account {
    #balance = 0.00;

    includeTransaction(transaction) {
        if (!this.transactionValidator(transaction)) {
            this.calculationValidator(transaction);
        }
    }

    calculationValidator(transaction) {
        if (transaction.getTransactionType() === transactionType.deposit) {
            return this.#balance += transaction.getAmount();
        }
        if (transaction.getTransactionType() === transactionType.withdraw) {
            return this.#balance -= transaction.getAmount();
        }
    }

    transactionValidator(transaction) {
        return (transaction.getAmount() <= 0 || typeof (transaction.getAmount()) === "string");
    }

    getBalance() {
        return this.#balance;
    }
}

export default Account;