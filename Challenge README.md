### Bank Challenge - Notes

### This file contains the domain model as well as any references I will use in  my attempt to complete the Bank Challenge

#### The below are some user stories to help me create a domain model (NB: Used ChatGPT to create these user stories quickly):


##### User Story 1:
> As a user 
> I want to make deposits to my bank account
> So that I can increase my balance

**Tests:**
1. Test that the Transaction's constructor works correctly - Test Done
2. Test deposit functionality by verifying if a deposit is made this increases the account balance correctly.
3. Test deposit validation by verifying if the system handles invalid amounts such as negative amount or strings.


##### User Story 2:
> As a user
> I want to make withdrawals from my bank account
> So that I can access my funds when needed

**Tests:**
3. Test withdrawal functionality by verifying if a withdrawal is made this decreases the account balance correctly.
4. Test withdrawal validation by checking whether you can withdraw more than the account balance.
5. Test you can set an amount over which you can exceed the account balance.
6. Test you cannot set a credit limit higher than the bank's allowed limit for your account.


##### User Story 3:
> As a user 
> I want the bank to record the date of each transaction
> So that I can keep track of when the transactions occurred

**Tests:**
7. Test that each transaction is recorded with the correct date and time.
8. Test that the transactions are recorded in the correct chronological order.


##### User Story 4:
> As a user
> I want the bank statement to display a summary of my transactions,including the dates and amounts
> So that I can review my account activity

**Tests:**
9. Test that the bank statement displays a summary of all transactions, including dates and amounts.
10. Test that the statement is presented in a clear and understandable format.


##### User Story 5:
> As a user 
> I want the bank statement to reflect my current balance after each transaction
> So that I can see the impact of my deposits and withdrawals.

**Tests:**
11. Test that the account balance reflects the correct total amount after multiple transactions.


###### Domain Model for the User Stories:

| Objects                  | Properties                                  | Message                              | Output           |
| ------------------------ | ------------------------------------------- | ------------------------------------ | ---------------- |
| Account                  | transactionList @Array@Array[@Transaction]  | processTransaction(@Transaction)     | @Void            |
|                          | balance @Integer                            |                                      | @Number          |
| Transaction              |                                             | getTransactionType()                 | @transactionType |
|                          |                                             | getAmount()                          | @Number          |
|                          |                                             | getDate()                            | @Date            |
|                          | transactionType @String                     |                                      | @String          |
| Statement                |                                             |                                      | @Void            |













