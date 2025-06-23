export const validateEmail = (validationDetails: ValidityState) => {
    if (validationDetails.valueMissing) {
        return "Please enter your email";
    }
    if (validationDetails.typeMismatch) {
        return "Please enter a valid email address";
    }

    return null;
}

export const validatePasswords = (str1: string, str2: string) => {
    if (str1 !== str2) {
        return "Passwords don't match"
    }

    return null;
}