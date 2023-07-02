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

    getDate() {
        return this.date;
    }

    isDeposit() {
        return this.transactType === transactionType.deposit;
    }

    isWithdrawal() {
        return this.transactType === transactionType.withdraw;
    }


}

export default Transaction;