class DisplayStatement{
    constructor(){
        this.statementHeader = 'date || credit || debit || balance';
        this.statement = [this.statementHeader];
    }

    addTransaction(transaction){
        this.statement.push(transaction);
    }

    printStatement(){
        return this.statement.join('\n')
    }
}

module.exports = DisplayStatement;

// const displayStatement = new DisplayStatement
// displayStatement.printStatement();