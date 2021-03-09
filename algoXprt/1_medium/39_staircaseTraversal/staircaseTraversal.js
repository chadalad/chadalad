function staircaseTraversal(height, maxSteps) {
    return numberOfWaysToTop(height, maxSteps);
}

function numberOfWaysToTop(height, maxSteps) {
    if (height <= 1) return 1;

    let numberOfWays = 0;
    for (let step = 1; step < Math.min(maxSteps, height) +1; step++) {
        numberOfWays += numberOfWaysToTop(height - step, maxSteps);
    }

    return numberOfWays;
}