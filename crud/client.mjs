import { accountService } from "./accountService.mjs";

console.log("CRUD Client Test");
accountService.addAccount("Dupont", "Jean");
accountService.addAccount("Martin", "Marie");

console.log("Liste des comptes après ajout:");
const accounts = accountService.getAccountList();
console.log(accounts);

console.log("Mise à jour du premier compte:");
accountService.saveAccount(accounts[0].id, "Durand", "Jean-Pierre");

console.log("Compte mis à jour:");
const updateAccount = accountService.getAccount(accounts[0].id);
console.log(updateAccount);