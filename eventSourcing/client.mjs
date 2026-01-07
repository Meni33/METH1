import { accountCommand } from "./accountCommand.mjs";
import { accountQuery } from "./accountQuery.mjs";

console.log("=== CQRS Client ===");
accountCommand.addAccount("Dupont", "Jean");
accountCommand.addAccount("Martin", "Marie");

console.log("=== Comptes ajoutés ===");
const accounts = accountQuery.getAccountList();
console.log("Liste des comptes:", accounts);

console.log("=== Mise à jour d'un compte ===");
accountCommand.saveAccount(accounts[0].id, "Durand", "Jean-Pierre");

console.log("=== Compte mis à jour ===");
const updatedAccount = accountQuery.getAccount(accounts[0].id);
console.log("Compte modifié:", updatedAccount);