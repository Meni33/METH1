class BankAccount {
    #accountName;
    #accountNumber;
    #balance;

    constructor(accountName = "", accountNumber = "0000000000", balance = 0) {
        this.#accountName = accountName;
        this.#accountNumber = accountNumber;
        this.#balance = balance;
    }

    getBalance() {
        return this.#balance;
    }

    getAccountNumber() {
        return this.#accountNumber;
    }

    getAccountName() {
        return this.#accountName;
    }

    deposit(amount) {
        if (amount <= 0) throw new Error('Amount must be positive');
        this.#balance += amount;
        return this.#balance;
    }

    withdraw(amount) {
        if (amount <= 0) throw new Error('Amount must be positive');
        if (amount > this.#balance) throw new Error('Insufficient balance');
        this.#balance -= amount;
        return this.#balance;
    }
}

const bank = {
    accounts: [],
    BankAccount
};

module.exports = bank;