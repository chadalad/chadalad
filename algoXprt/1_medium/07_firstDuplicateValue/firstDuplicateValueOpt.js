function firstDuplicateValue(array) {
    const seen = new Set();
    for (const value of array) {
        if (seen.has(value)) return value;
        seen.add(value);
    }
    return -1;
}