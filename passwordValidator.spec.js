const validatePassword = require('./passwordValidator');

describe('validatePassword', () => {
    test('should return true for passwords with at least 8 characters', () => {
        expect(validatePassword('abcdefgh')).toBe(true);
    });

    test('should return false for passwords with less than 8 characters', () => {
        expect(validatePassword('abc')).toBe(false);
    });
});