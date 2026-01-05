import { accountService } from "./accountService.mjs";

accountService.addAccount("Dupont", "Jean");
const accounts = accountService.getAccountList();
console.log(accounts);