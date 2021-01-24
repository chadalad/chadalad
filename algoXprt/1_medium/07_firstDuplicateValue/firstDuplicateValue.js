function firstDuplicateValue(array) {
    let minimumSecondIndex = array.length;
    for (let i =0; i < array.length; i++) {
        const value = array[i];
        for (let j = i + 1; j < array.length; j++) {
            const valueToCompare = array[j];
            if (value === valueToCompare) {
                minimumSecondIndex = math.min(minimumSecondIndex, j);
            }
        }
    }

    if (minimumSecondIndex === array.length) return -1;

    return array[minimumSecondIndex];
}