import { ACCOUNT_LIST } from "./database.mjs";
import { accountSummaryList } from "./queryDatabase.mjs";
import { accountCache } from "./cache.mjs";

export const accountQueryDAO = {
  retrieveAccountList() {
    return accountSummaryList;
  },
  retrieveAccount(id) {
    return accountCache[id];
  },
};