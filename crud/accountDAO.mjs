import { ACCOUNT_LIST } from "./database.mjs";
import { Account } from "./account.mjs";

export const accountDAO = {
  insertAccount(account) {
    ACCOUNT_LIST.push(account);
    console.log(ACCOUNT_LIST);
  },
  retrieveAccountList() {
    return ACCOUNT_LIST.map(account => ({
      id: account.id,
      lastName: account.lastName,
      firstName: account.firstName
    }));
  },
  updateAccount(account) {
    const index = ACCOUNT_LIST.findIndex(acc => acc.id === account.id);
    if (index !== -1) {
      ACCOUNT_LIST[index] = account;
    }
    console.log(ACCOUNT_LIST);
  },
  retrieveAccount(id) {
    const account = ACCOUNT_LIST.find(acc => acc.id === id);
    if (account) {
      return {
        id: account.id,
        name: `${account.lastName} ${account.firstName}`
      };
    }
    return null;
  },
  // Recupération les compte et retourne une instance de Account
  account_instance(id) {
    const account = ACCOUNT_LIST.find(acc => acc.id === id);
    if (account) {
      return new Account(account.id,account.lastName,account.firstName, account.creationDate);
    }
    return null;
  }
};
