// This represents a simulation for the bank programme

import Account from "./account.js";
import Statement from "./statement.js";
import Transaction from "./transaction.js";
import transactionType from "./transactionType.js";

const date1 = new Date(Date.UTC(2012, 0, 10)).toLocaleDateString("en-GB");
const date2 = new Date(Date.UTC(2012, 0, 13)).toLocaleDateString("en-GB");
const date3 = new Date(Date.UTC(2012, 0, 14)).toLocaleDateString("en-GB");

const amount1 = 1000;
const amount2 = 2000;
const amount3 = 500;

const transaction1 = new Transaction(amount1, date1);
const transaction2 = new Transaction(amount2, date2);
const transaction3 = new Transaction(amount3, date3, transactionType.withdraw);

const account = new Account();

account.includeTransaction(transaction1);
account.includeTransaction(transaction2);
account.includeTransaction(transaction3);

Statement.printHeader();
Statement.statementBody(account);
