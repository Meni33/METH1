import { accountCommand } from "./accountCommand.mjs";
import { accountQuery } from "./accountQuery.mjs";

console.log("=== Test Restore et Suppression ===\n");

// Créer un compte
accountCommand.addAccount("Test", "User");
const accounts = accountQuery.getAccountList();
const testAccountId = accounts[0].id;
console.log("Compte créé : ", accountQuery.getAccount(testAccountId));

// Modifier le compte
accountCommand.saveAccount(testAccountId, "Modified", "User");
console.log("Compte modifié : ", accountQuery.getAccount(testAccountId));

// Supprimer le compte
accountCommand.deleteAccount(testAccountId);
console.log("Compte supprimé : ", accountQuery.getAccount(testAccountId));

console.log("\n=== Tentative de restauration d'un compte supprimé ===");
// Essayer de modifier un compte supprimé
accountCommand.saveAccount(testAccountId, "Invalid", "Attempt");

console.log("Test réussi !");