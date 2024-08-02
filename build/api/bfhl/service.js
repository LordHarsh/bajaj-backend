"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bfhl = void 0;
const bfhl = (data) => {
    if (!Array.isArray(data)) {
        throw new Error('Invalid input data');
    }
    const numbers = [];
    const alphabets = [];
    data.forEach(item => {
        if (!isNaN(Number(item))) {
            numbers.push(item);
        }
        else if (/^[a-zA-Z]$/.test(item)) {
            alphabets.push(item);
        }
    });
    const highest_alphabet = alphabets.length > 0
        ? [alphabets.sort((a, b) => b.localeCompare(a, undefined, { sensitivity: 'base' }))[0]]
        : [];
    return {
        is_success: true,
        user_id: "john_doe_17091999",
        email: "john@xyz.com",
        roll_number: "ABCD123",
        numbers,
        alphabets,
        highest_alphabet
    };
};
exports.bfhl = bfhl;
//# sourceMappingURL=service.js.map