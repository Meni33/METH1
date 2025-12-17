const validatePassword = require('./passwordValidator');

describe('validatePassword', () => {
    test('should return true for passwords with at least 8 characters, 1 letter and 1 number', () => {
        expect(validatePassword('abcd1234')).toBe(true);
    });

    test('should return false for passwords with less than 8 characters', () => {
        expect(validatePassword('abc1')).toBe(false);
    });

    test('should return false for passwords without letters', () => {
        expect(validatePassword('12345678')).toBe(false);
    });

    test('should return false for passwords without numbers', () => {
        expect(validatePassword('abcdefgh')).toBe(false);
    });

    // Tests pour la longueur paramétrable
    test('should allow custom minimum length', () => {
        expect(validatePassword('abc1', { minLength: 4 })).toBe(true);
        expect(validatePassword('ab1', { minLength: 4 })).toBe(false);
    });

    // Tests pour le nombre minimum de lettres
    test('should allow custom minimum number of letters', () => {
        expect(validatePassword('aaa12345', { minLetters: 3 })).toBe(true);
        expect(validatePassword('aa123456', { minLetters: 3 })).toBe(false);
    });

    // Tests pour le nombre minimum de chiffres
    test('should allow custom minimum number of digits', () => {
        expect(validatePassword('abcd1234', { minDigits: 3 })).toBe(true);
        expect(validatePassword('abcde12', { minDigits: 3 })).toBe(false);
    });

    // Tests pour les règles personnalisées
    test('should allow custom validation rules', () => {
        const hasUpperCase = (password) => /[A-Z]/.test(password);
        expect(validatePassword('Abcd1234', { customRules: [hasUpperCase] })).toBe(true);
        expect(validatePassword('abcd1234', { customRules: [hasUpperCase] })).toBe(false);
    });

    test('should apply multiple custom rules', () => {
        const hasUpperCase = (password) => /[A-Z]/.test(password);
        const hasSpecialChar = (password) => /[!@#$%^&*]/.test(password);
        expect(validatePassword('Abcd123!', { customRules: [hasUpperCase, hasSpecialChar] })).toBe(true);
        expect(validatePassword('Abcd1234', { customRules: [hasUpperCase, hasSpecialChar] })).toBe(false);
    });
});