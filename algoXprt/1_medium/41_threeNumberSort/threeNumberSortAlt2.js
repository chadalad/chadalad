function threeNumberSort(array, order) {
    const firstValue = order[0];
    const secondValue = order[1];

    let firstIdx = 0;
    let secondIdx = 0;
    let thirdIdx = array.length - 1;

    while (secondIdx <= thirdIdx) {
        const value = array[secondIdx];

        if (value === firstValue) {
            swap(firstIdx, secondIdx, array);
            firstIdx++;
            secondIdx++;
        } else if (value === secondValue) {
            secondIdx++;
        } else {
            swap(secondIdx, thirdIdx, array);
            thirdIdx -= 1;
        }
    }

    return array;
}

function swap(i, j, array) {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}