import { ACCOUNT_LIST } from "./database.mjs";
import { Account } from "./account.mjs";

export const accountCommandDAO = {
    // Insertion d'un nouveau compte
    insertAccount(account) {
        ACCOUNT_LIST.push(account);
        console.log(ACCOUNT_LIST);
    },

    // Mise à jour d'un compte existant
    updateAccount(account) {
        const index = ACCOUNT_LIST.findIndex(acc => acc.id === account.id);
        if (index !== -1) {
            ACCOUNT_LIST[index] = account;
        }
        console.log(ACCOUNT_LIST);
    },

    // Récupération l'instance account pour la modifier
    account_instance(id) {
        const account = ACCOUNT_LIST.find(acc => acc.id === id);
        if (account) {
            return new Account(account.id, account.lastName, account.firstName, account.creationDate);
        }
        return null;
    }
};
