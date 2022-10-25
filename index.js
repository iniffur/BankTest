const BankTransaction = require('./bankTransaction')
const DisplayStatement = require('./displayStatement')

const bankTransaction = new BankTransaction
const displayStatement = new DisplayStatement(bankTransaction)
displayStatement.addTransaction(this.bankTransaction.deposit(423))
displayStatement.printStatement()