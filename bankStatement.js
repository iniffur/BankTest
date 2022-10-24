// console.log("hello");

class BankStatement{
    constructor(){
        this.currentBalance = 0;
    }

    deposit(depositAmount){
        this.currentBalance + depositAmount;
        return depositAmount;
    }

    withdraw(withdrawAmount){
        this.currentBalance - withdrawAmount;
        return withdrawAmount;
    }

    showBalance(){
        return this.currentBalance
    }
}

module.exports = BankStatement;