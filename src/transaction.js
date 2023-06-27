import transactionType from "./transactionType.js";

class Transaction {

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

export default Transaction;