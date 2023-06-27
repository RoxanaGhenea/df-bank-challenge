import transactionType from "./transactionType.js";

class Transaction {

    constructor(amount, transactType = transactionType.deposit) {
        this.amount = amount;
        this.transactType = transactType;
    }

    getAmount() {
        return this.amount;
    }

    setTransactionType(type) {
        this.transactType = type;
    }

    getTransactionType() {
        return this.transactType
    }

}

export default Transaction;