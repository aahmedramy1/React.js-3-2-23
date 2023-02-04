function is_separator(c) {
    return c === ' ' || c === '-' || c === '_' || c === '/' || c === '.' || c === ',';
}

function is_letter(c) {
    return c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z';
}

function is_digit(c) {
    return !isNaN(parseInt(c));
}