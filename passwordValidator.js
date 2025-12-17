function validatePassword(password) {
    const hasMinLength = password.length >= 8;
    const hasNumber = /[0-9]/.test(password);
    return hasMinLength && hasNumber;
}

module.exports = validatePassword;

