function validatePassword(password) {
    const hasMinLength = password.length >= 8;
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    return hasMinLength && hasLetter && hasNumber;
}

module.exports = validatePassword;

