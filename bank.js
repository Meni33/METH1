const bankDAO = require('./bankDAO');
const bankTransfer = require('./bankTransfert');

class BankAccount {
    #accountName;
    #accountNumber;
    #balance;

    constructor(accountName = "", accountNumber = "0000000000", balance = 0) {
        this.#accountName = accountName;
        this.#accountNumber = accountNumber;
        this.#balance = balance;
    }

    getBalance(accountId) {
        return bankDAO.retrieveBalance(accountId);
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
    BankAccount,
    async transferMoney(accountId, amount) {
        const result = await bankTransfer.transfer(accountId, accountId, amount);
        await bankDAO.debitAccount(accountId, amount);
        return result;
    }
};

module.exports = BankAccount;
module.exports.bank = bank;

// Petite remarque bankTransfert est asychrone donc on peut utiliser resolve/reject dans les tests