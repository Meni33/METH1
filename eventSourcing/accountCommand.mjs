import { Account } from './account.mjs';
import { accountCommandDAO } from './accountCommandDAO.mjs';
import { accountQueryDAO } from './accountQueryDAO.mjs';
import { Event } from './event.mjs';
import { eventStore } from './eventStore.mjs';

export const accountCommand = {
    addAccount(lastName, firstName) {
        const account = new Account(null, lastName, firstName);
        const event = new Event('accountAdded', account.id, account);
        eventStore.addEvent(event);
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
