import { Account } from "./account.mjs";
import { accountCommandDAO } from "./accountCommandDAO.mjs";
import { accountSummaryList } from "./queryDatabase.mjs";

export const accountCommand = {
  addAccount(lastName, firstName) {
    const account = new Account(undefined, lastName, firstName);
    accountCommandDAO.insertAccount(account);
    
    // Ajouter dans la queryDatabase sans la date de création
    accountSummaryList.push({
      id: account.id,
      lastName: account.lastName,
      firstName: account.firstName
    });
  },
  saveAccount(id, lastName, firstName) {
    const account = accountCommandDAO.retrieveFullAccount(id);
    if (account) {
      account.lastName = lastName;
      account.firstName = firstName;
      accountCommandDAO.updateAccount(account);
      
      // Mettre à jour dans la queryDatabase sans la date de création
      const index = accountSummaryList.findIndex(acc => acc.id === id);
      if (index !== -1) {
        accountSummaryList[index] = {
          id: id,
          lastName: lastName,
          firstName: firstName
        };
      }
    }
  },
};