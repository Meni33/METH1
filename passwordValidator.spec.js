const validatePassword = require('./passwordValidator');

describe('validatePassword', () => {
    test('should return true for passwords with at least 8 characters, 1 letter, and 1 number', () => {
        expect(validatePassword('abcd1234')).toBe(true);
    });
    
    test('should return false for passwords with less than 8 characters', () => {
        expect(validatePassword('abc1')).toBe(false);
    });

    test('should return false for passwords with at least 8 characters and no number', () => {
        expect(validatePassword('abcdefgh')).toBe(false);
    });

    test('should return false for passwords with at least 8 characters and no letter', () => {
        expect(validatePassword('12345678')).toBe(false);
    });
});