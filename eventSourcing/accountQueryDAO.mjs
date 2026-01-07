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
    retrieveAccountList() {
        return accountSummaryList;
    },
    retrieveAccount(id) {
        return accountCache[id];
    }
};
