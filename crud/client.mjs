import { accountService } from "./accountService.mjs";

accountService.addAccount("Dupont", "Jean");
const accounts = accountService.getAccountList();
console.log(accounts);

const accountId = accounts[0].id;
accountService.saveAccount(accountId, "Martin", "Pierre");
const updatedAccounts = accountService.getAccountList();
console.log(updatedAccounts);

const account = accountService.getAccount(accountId);
console.log(account);