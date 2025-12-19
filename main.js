const BankAccount = require('./bank');

// Objet "bank" qui expose transferMoney
const bank = BankAccount.bank;

// On travaille avec une instance de compte pour les dépôts/retraits
const alice = new BankAccount('Alice Dupont', '1234567890', 1000);

(async () => {
    console.log('=== BANK MANAGEMENT SYSTEM ===\n');

    console.log('1. Dépôt sur Alice...');
    try {
        const afterDeposit = alice.deposit(200);
        console.log('✓ Nouveau solde après dépôt :', afterDeposit);
    } catch (error) {
        console.error('✗ Erreur dépôt :', error.message);
    }

    console.log('\n2. Retrait sur Alice...');
    try {
        const afterWithdraw = alice.withdraw(150);
        console.log('✓ Nouveau solde après retrait :', afterWithdraw);
    } catch (error) {
        console.error('✗ Erreur retrait :', error.message);
    }

    console.log('\n3. Transfert (via bank.transferMoney)...');
    try {
        await bank.transferMoney(alice.getAccountNumber(), 100);
        console.log('✓ Transfert initié pour le compte', alice.getAccountNumber());
    } catch (error) {
        console.error('✗ Erreur transfert :', error.message);
    }

    console.log('\n=== END OF DEMO ===');
})();