const bankTransfer = {
    async transfer(fromAccountId, toAccountId, amount) {
        console.log(`Transferring ${amount} from ${fromAccountId} to ${toAccountId}`);
        return Promise.resolve();
    }
};
module.exports = bankTransfer;