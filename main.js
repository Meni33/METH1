const bankDAO = require('./bankDAO');

console.log('=== BANK MANAGEMENT SYSTEM ===\n');

// 1. Create accounts
console.log('1. Creating accounts...');
try {
    const account1 = bankDAO.createAccount('Alice Dupont', '1234567890', 1000);
    console.log('✓ Account created:', account1);
    
    const account2 = bankDAO.createAccount('Bob Martin', '0987654321', 500);
    console.log('✓ Account created:', account2);
    
    const account3 = bankDAO.createAccount('Charlie Bernard', '1111222233', 0);
    console.log('✓ Account created:', account3);
} catch (error) {
    console.error('✗ Error:', error.message);
}

console.log('\n2. Checking initial balances...');
try {
    const balance1 = bankDAO.retrieveBalance('1234567890');
    console.log('✓ Balance for Alice (1234567890):', balance1);
    
    const balance2 = bankDAO.retrieveBalance('0987654321');
    console.log('✓ Balance for Bob (0987654321):', balance2);
    
    const balance3 = bankDAO.retrieveBalance('1111222233');
    console.log('✓ Balance for Charlie (1111222233):', balance3);
} catch (error) {
    console.error('✗ Error:', error.message);
}

console.log('\n3. Making deposits...');
try {
    const newBalance1 = bankDAO.deposit('1234567890', 200);
    console.log('✓ Deposited 200 to Alice. New balance:', newBalance1);
    
    const newBalance2 = bankDAO.deposit('1111222233', 100);
    console.log('✓ Deposited 100 to Charlie. New balance:', newBalance2);
} catch (error) {
    console.error('✗ Error:', error.message);
}

console.log('\n4. Making withdrawals...');
try {
    const newBalance1 = bankDAO.withdraw('1234567890', 300);
    console.log('✓ Withdrawn 300 from Alice. New balance:', newBalance1);
    
    const newBalance2 = bankDAO.withdraw('0987654321', 50);
    console.log('✓ Withdrawn 50 from Bob. New balance:', newBalance2);
} catch (error) {
    console.error('✗ Error:', error.message);
}

console.log('\n5. Making transfers...');
try {
    const newBalance = bankDAO.transfer('0987654321', '1111222233', 100);
    console.log('✓ Transferred 100 from Bob to Charlie.');
    
    console.log('  Checking Bob\'s balance after transfer:');
    const bobBalance = bankDAO.retrieveBalance('0987654321');
    console.log('  Bob\'s balance:', bobBalance);

    console.log('  Checking Charlie\'s balance after transfer:');
    const charlieBalance = bankDAO.retrieveBalance('1111222233');
    console.log('  Charlie\'s balance:', charlieBalance);
} catch (error) {
    console.error('✗ Error:', error.message);
}

console.log('\n6. Final balances...');
try {
    console.log('✓ Alice (1234567890):', bankDAO.retrieveBalance('1234567890'));
    console.log('✓ Bob (0987654321):', bankDAO.retrieveBalance('0987654321'));
    console.log('✓ Charlie (1111222233):', bankDAO.retrieveBalance('1111222233'));
} catch (error) {
    console.error('✗ Error:', error.message);
}

console.log('\n7. Testing error cases...');
try {
    console.log('Trying to create duplicate account...');
    bankDAO.createAccount('Test', '1234567890', 100);
} catch (error) {
    console.error('✓ Expected error caught:', error.message);
}

try {
    console.log('Trying to deposit negative amount...');
    bankDAO.deposit('1234567890', -100);
} catch (error) {
    console.error('✓ Expected error caught:', error.message);
}

try {
    console.log('Trying to withdraw more than balance...');
    bankDAO.withdraw('1111222233', 10000);
} catch (error) {
    console.error('✓ Expected error caught:', error.message);
}

try {
    console.log('Trying to access non-existent account...');
    bankDAO.retrieveBalance('9999999999');
} catch (error) {
    console.error('✓ Expected error caught:', error.message);
}

console.log('\n=== END OF TESTS ===');