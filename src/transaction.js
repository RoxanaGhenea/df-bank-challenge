class Transaction {
    constructor(deposit) {
        this.amount = deposit;
    }

    getAmount() {
        return this.amount;
    }
}

export default Transaction;