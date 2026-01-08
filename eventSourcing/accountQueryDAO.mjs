import { accountSummaryList } from "./queryDatabase.mjs";
import { accountCache } from "./cache.mjs";

export const accountQueryDAO = {
    insertAccountQuery(accountFormat) {
        accountSummaryList.push(accountFormat);
    },
    updateAccountQuery(id, accountFormat) {
        const index = accountSummaryList.findIndex(acc => acc.id === id);
        if (index !== -1) {
            accountSummaryList[index] = accountFormat;
        }
    },
    deleteAccountQuery(id) {
        const index = accountSummaryList.findIndex(acc => acc.id === id);
        if (index !== -1) {
            accountSummaryList.splice(index, 1);
        }
    },
    insertAccountCache(account) {
        accountCache[account.id] = {
            id: account.id,
            name: `${account.lastName} ${account.firstName}`
        };
    },
    updateAccountCache(id, firstName, lastName) {
        accountCache[id] = {
            id: id,
            name: `${lastName} ${firstName}`
        };
    },
    deleteAccountCache(id) {
        delete accountCache[id];
    },
    retrieveAccountList() {
        return accountSummaryList;
    },
    retrieveAccount(id) {
        return accountCache[id];
    },
    // Gestion des evnt pour la synchro
    handleEvent(event) {
        // Selon le type d'evnt on maj la bdd query et le cache
        switch (event.name) {
            case 'accountCreated':
                const account = event.payload;
                this.insertAccountQuery({
                    id: account.id,
                    lastName: account.lastName,
                    firstName: account.firstName
                });
                this.insertAccountCache(account);
                break;
            case 'accountUpdated':
                const updatedAccount = event.payload;
                this.updateAccountQuery(event.accountId, {
                    id: updatedAccount.id,
                    lastName: updatedAccount.lastName,
                    firstName: updatedAccount.firstName
                });
                this.updateAccountCache(event.accountId, updatedAccount.firstName, updatedAccount.lastName);
                break;
            case 'accountDeleted':
                this.deleteAccountQuery(event.accountId);
                this.deleteAccountCache(event.accountId);
                break;
        }
    }
};
