import transactionType from "./transactionType.js";

class Account {
    #balance = 0.00;
    #limit = 0.00;
    #transactionList = [];

    includeTransaction(transaction) {
        if (!this.transactionValidator(transaction)) {
            this.calculationValidator(transaction);
            this.#transactionList.push(transaction);
        }
    }

    calculationValidator(transaction) {
        if (transaction.getTransactionType() === transactionType.deposit) {
            this.#balance += transaction.getAmount();
        }
        if (transaction.getTransactionType() === transactionType.withdraw && transaction.getAmount() <= this.#limit + this.#balance) {
            this.#balance -= transaction.getAmount();
        }
    }

    transactionValidator(transaction) {
        return (transaction.getAmount() <= 0 || typeof (transaction.getAmount()) === "string");
    }

    getBalance() {
        return this.#balance;
    }

    getTransactionList() {
        this.#transactionList.sort((a, b) => b.getDate().localeCompare(a.getDate()));
        return this.#transactionList;
    }
}

export default Account;