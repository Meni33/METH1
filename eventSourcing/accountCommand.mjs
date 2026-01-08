import { Account } from './account.mjs';
import { accountCommandDAO } from './accountCommandDAO.mjs';
import { accountQueryDAO } from './accountQueryDAO.mjs';
import { Event } from './event.mjs';
import { eventStore } from './eventStore.mjs';

// Restaurer l'état d'un compte depuis ses événements
function restoreAccountState(accountId) {
    const accountEvents = eventStore.eventList.filter(e => e.accountId === accountId);
    if (accountEvents.length === 0) return null;
    
    let account = null;

    for (const event of accountEvents) {
        switch (event.name) {
            case 'accountCreated':
                account = new Account(event.payload.id, event.payload.lastName, event.payload.firstName);
                break;
            case 'accountUpdated':
                account = { ...account, ...event.payload };
                break;
            case 'accountDeleted':
                return null;
        }
    }
    
    return account;
}

export const accountCommand = {
    addAccount(lastName, firstName) {
        const account = new Account(null, lastName, firstName);
        const event = new Event('accountCreated', account.id, account);
        eventStore.addEvent(event);
        accountQueryDAO.handleEvent(event);
    },

    saveAccount(id, lastName, firstName) {
        const currentState = restoreAccountState(id);
        if (!currentState) {
            console.log(`Erreur : Le compte ${id} n'existe pas ou a été supprimé.`);
            return;
        }
        
        const updatedAccount = { id, lastName, firstName };
        const event = new Event('accountUpdated', id, updatedAccount);
        eventStore.addEvent(event);
        accountQueryDAO.handleEvent(event);
    },

    deleteAccount(id) {
        const event = new Event('accountDeleted', id, { id });
        eventStore.addEvent(event);
        accountQueryDAO.handleEvent(event);
    },
};
