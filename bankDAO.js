const bankDAO = {
    // Create account
    createAccount(accountName = "", accountNumber = "0000000000", balance = 0) {
        /*
        const existingAccount = bank.accounts.find(acc => acc.getAccountNumber() === accountNumber);
        if (existingAccount) throw new Error('Account already exists');
        const newAccount = new bank.BankAccount(accountName, accountNumber, balance);
        bank.accounts.push(newAccount);
        return newAccount;
        */
    },

    // Add money
    deposit(accountId, amount) {
        /*
        if (amount <= 0) throw new Error('Amount must be positive');
        const account = bank.accounts.find(acc => acc.getAccountNumber() === accountId);
        if (!account) throw new Error('Account not found');
        account.deposit(amount);
        return account.getBalance();
        */
    },

    // Withdraw money
    withdraw(accountId, amount) {
        /*
        if (amount <= 0) throw new Error('Amount must be positive');
        const account = bank.accounts.find(acc => acc.getAccountNumber() === accountId);
        if (!account) throw new Error('Account not found');
        if (amount > account.getBalance()) throw new Error('Insufficient balance');
        account.withdraw(amount);
        return account.getBalance();
        */
    },

    // Transfer to another bank account
    transfer(fromAccountId, toAccountId, amount) {
        this.withdraw(fromAccountId, amount);
        this.deposit(toAccountId, amount);
        return;
    },

    // Get balance
    retrieveBalance(accountId) {
        //const account = bank.accounts.find(acc => acc.getAccountNumber() === accountId);
        //if (!account) throw new Error('Account not found');
        console.log('Retrieving balance for account:', accountId);
        //return account.getBalance();
    },

    // Debit account
    async debitAccount(accountId, amount) {
        if (amount <= 0) throw new Error('Amount must be positive');
        console.log(`Debiting account ${accountId} with amount ${amount}`);
    }
};

module.exports = bankDAO;