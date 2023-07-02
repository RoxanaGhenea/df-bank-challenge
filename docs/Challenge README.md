### Bank Challenge - Notes

### This file contains the domain model as well as any references I will use in  my attempt to complete the Bank Challenge

#### The below are some user stories to help me create a domain model (NB: Used ChatGPT to create the first 5 user stories quickly):

#### References Section:
Used ChatGPT for the first 5 user stories.
Used this article to figure how to sort an array of objects by Date: https://stackoverflow.com/questions/51757994/javascript-sort-array-of-objects-by-date-then-by-time?fbclid=IwAR0uFLIIVgW6fyROf_6tjB6jk1j7SljQVIUfhR3Z3nWK9GLxwr_NvOz8DmE
Used this article to see how to test the console log output: https://stackoverflow.com/questions/19825020/how-can-i-use-jasmine-js-to-test-for-console-output
Used these articles to create the table as per requirements: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd and https://talyian.github.io/ansicolors/?fbclid=IwAR3NGxrdNlM-7NbADARs7JRk74dbX3nv7wkp9ah95YCOMo5vkvWXWNyCstI

##### User Story 1:
> As a user 
> I want to make deposits to my bank account
> So that I can increase my balance

**Tests:**
1. Test that the Transaction's constructor works correctly - Test Done
2. Test deposit functionality by verifying if a deposit is made this increases the account balance correctly. - Test Done
3. Test deposit validation by verifying if the system handles invalid amounts such as negative amounts or strings. - Tests Done


##### User Story 2:
> As a user
> I want to make withdrawals from my bank account
> So that I can access my funds when needed

**Tests:**
4. Test withdrawal functionality by verifying if a withdrawal is made this decreases the account balance correctly. - Test Done
5. Test that you cannot withdraw more than what you have in your account. - Test Done
6. Test you can set an amount over which you can exceed the account balance. - Beyond the scope of this exercise - do this if you have time left to spare
7. Test you cannot set a credit limit higher than the bank's allowed limit for your account. - Beyond the scope of this exercise - do this if you have time left to spare


##### User Story 3:
> As a user 
> I want the bank to record the date of each transaction
> So that I can keep track of when the transactions occurred.

**Tests:**
8. Test that each transaction is recorded with the correct date. - Test Done
9. Test that the transactions are recorded in the correct chronological order. - Test Done


##### User Story 4:
> As a user
> I want the bank statement to display a summary of my transactions,including the dates and amounts
> So that I can review my account activity

**Tests:**
10. Test that your statement header prints correctly. - Test Done
11. Test that the bank statement displays a summary of all transactions, including dates and amounts formatted correctly. - Test Done


##### User Story 5:
> As a user 
> I want the bank statement to reflect my current balance after each transaction
> So that I can see the impact of my deposits and withdrawals.

**Tests:**
12. Test that the account balance reflects the correct total amount after multiple transactions. - 


###### Domain Model for the User Stories:

| Objects       | Properties                           | Message                           | Output           |
| ------------- | ------------------------------------ | --------------------------------- | ---------------- |
| Account       | transactionList @Array[@Transaction] | includeTransaction(@Transaction)  | @Void            |
|               | balance @Integer                     |                                   | @Number          |
| Transaction   |                                      | getTransactionType()              | @transactionType |
|               |                                      | getAmount()                       | @Number          |
|               |                                      | getDate()                         | @Date            |
|               | transactionType @String              |                                   | @String          |
| Statement     |                                      | printHeader()                     | @String          |
|               |                                      | formatTextToRed()                 | @Void            |
|               |                                      | formatTextToGreen()               | @Void            |
|               |                                      | statementBody(@Account)           | @String          |
















