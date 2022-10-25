class BankTransaction{
    constructor(){
        this.currentBalance = 0;
    }

    deposit(depositAmount){
        this.currentBalance += depositAmount;
    }

    withdraw(withdrawlAmount){
        if (withdrawlAmount > this.currentBalance){
            throw new Error('Error: your bank balance cannot go below 0');
        }
        this.currentBalance -= withdrawlAmount;
    }

    showBalance(){
        return this.currentBalance
    }
}

module.exports = BankTransaction;