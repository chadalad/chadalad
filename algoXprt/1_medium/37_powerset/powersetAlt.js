function powerset(array) {
    const subsets = [[]];
    for (const ele of array) {
        const length = subsets.length;
        for (let i = 0; i < length; i++) {
            const currentSubset = subsets[i];
            subsets.push(currentSubset.concat(ele));
        }
    }
    return subsets;
}