function validatePassword(password, options = {}) {
    // Options par défaut
    const {
        minLength = 8,
        minLetters = 1,
        minDigits = 1,
        customRules = []
    } = options;

    // Vérification de la longueur
    const hasLength = password.length >= minLength;

    // Vérification du nombre de lettres
    const letterMatches = password.match(/[a-zA-Z]/g);
    const hasEnoughLetters = letterMatches ? letterMatches.length >= minLetters : false;

    // Vérification du nombre de chiffres
    const digitMatches = password.match(/[0-9]/g);
    const hasEnoughDigits = digitMatches ? digitMatches.length >= minDigits : false;

    // Vérification des règles personnalisées
    const passesCustomRules = customRules.every(rule => rule(password));

    return hasLength && hasEnoughLetters && hasEnoughDigits && passesCustomRules;
}

module.exports = validatePassword;

