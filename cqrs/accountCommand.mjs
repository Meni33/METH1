import { Account } from './account.mjs';
import { accountCommandDAO } from './accountCommandDAO.mjs';
import { accountQueryDAO } from './accountQueryDAO.mjs';

export const accountCommand = {
    addAccount(lastName, firstName) {
        const account = new Account(null, lastName, firstName);
        accountCommandDAO.insertAccount(account);
        const accountFormat = {
            id: account.id,
            lastName: account.lastName,
            firstName: account.firstName,
        };
        accountQueryDAO.insertAccountQuery(accountFormat);
        accountQueryDAO.insertAccountCache(account);
        return account;
    },
    saveAccount(id, lastName, firstName) {
        const account = accountCommandDAO.account_instance(id);
        account.lastName = lastName;
        account.firstName = firstName;
        accountCommandDAO.updateAccount(account);
        const accountFormat = {
            id: account.id,
            lastName: account.lastName,
            firstName: account.firstName,
        };
        accountQueryDAO.updateAccountQuery(id, accountFormat);
        accountQueryDAO.updateAccountCache(id, firstName, lastName);
    },
};
