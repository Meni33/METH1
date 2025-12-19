const validatePassword = require('./passwordValidator');

describe('validatePassword', () => {
    test("should return false for passwords shorter than 8 characters", () => {
        expect(validatePassword("short")).toBe(false);
    });

    test('should return true if password has at least 8 characters', () => {
        expect(validatePassword('abcd1234')).toBe(true);
    });
});