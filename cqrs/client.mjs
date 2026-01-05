import { accountCommand } from "./accountCommand.mjs";
import { accountQuery } from "./accountQuery.mjs";

// Tests des services Command
console.log("=== Tests des COMMANDS ===");
console.log("\n1. Ajouter un compte:");
accountCommand.addAccount("Dupont", "Jean");
accountCommand.addAccount("Martin", "Marie");

console.log("\n2. Ajouter un autre compte:");
accountCommand.addAccount("Bernard", "Pierre");

console.log("\n=== Tests des QUERIES ===");
console.log("\n3. Récupérer la liste complète:");
const accounts = accountQuery.getAccountList();
console.log(accounts);

console.log("\n4. Récupérer un compte spécifique:");
if (accounts.length > 0) {
  const firstAccountId = accounts[0].id;
  const account = accountQuery.getAccount(firstAccountId);
  console.log(account);
}

console.log("\n5. Modifier un compte:");
if (accounts.length > 0) {
  const firstAccountId = accounts[0].id;
  accountCommand.saveAccount(firstAccountId, "Durand", "Jacques");
}

console.log("\n6. Vérifier la modification:");
const updatedAccounts = accountQuery.getAccountList();
console.log(updatedAccounts);