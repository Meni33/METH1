import { ACCOUNT_LIST } from "./database.mjs";

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
      console.log(ACCOUNT_LIST);
    }
  },
  retrieveAccount(id) {
    return ACCOUNT_LIST.find(account => account.id === id);
  },
};