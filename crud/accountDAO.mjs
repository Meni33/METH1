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
  updateAccount(account) {},
  retrieveAccount(id) {},
};