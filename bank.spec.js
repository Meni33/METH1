const bankDAO = require('./bankDAO');
const BankAccount = require('./bank');
const bankTransfer = require('./bankTransfert');

// Accès à l'objet bank via la propriété bank du module
const bank = BankAccount.bank;

describe('BankAccount – getBalance', () => {
    let account;

    beforeEach(() => {
        jest.clearAllMocks();
        account = new BankAccount('Test User', '1234567890', 1000);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe('getBalance', () => {
        let bankDAOMock;

        beforeEach(() => {
            bankDAOMock = jest.spyOn(bankDAO, 'retrieveBalance');
        });

        test('getBalance transmet accountId à retrieveBalance', () => {
            bankDAOMock.mockReturnValue(500);

            const balance = account.getBalance('1234567890');

            expect(balance).toBe(500);
            expect(bankDAOMock).toHaveBeenCalledWith('1234567890');
            expect(bankDAOMock).toHaveBeenCalledTimes(1);
        });
    });


    describe('transferMoney', () => {
        let bankTransferMock;
        let debitAccountMock;

        beforeEach(() => {
            bankTransferMock = jest.spyOn(bankTransfer, 'transfer');
            debitAccountMock = jest.spyOn(bankDAO, 'debitAccount');
        });

        // async tests car la fonction transfer est également asynchrone, donc on peut utiliser resolve/reject

        test('utilise bankTransfer.transfer avec les bons paramètres', async () => {
            bankTransferMock.mockResolvedValueOnce();
            debitAccountMock.mockResolvedValueOnce();

            await bank.transferMoney('1234567890', 200);

            expect(bankTransferMock).toHaveBeenCalledWith('1234567890', '1234567890', 200);
        });

        test('appelle debitAccount avec accountId et amount', async () => {
            bankTransferMock.mockResolvedValueOnce();
            debitAccountMock.mockResolvedValueOnce();

            await bank.transferMoney('1234567890', 200);

            expect(debitAccountMock).toHaveBeenCalledWith('1234567890', 200);
        });

        test('n’appelle pas debitAccount si transfer échoue', async () => {
            bankTransferMock.mockRejectedValueOnce(new Error('Transfer failed')); // utilisation de reject

            await expect(bank.transferMoney('1234567890', 200)).rejects.toThrow('Transfer failed');
            
            expect(debitAccountMock).not.toHaveBeenCalled();
        });
    });
});