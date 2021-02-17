class AncestralTree {
    constructor(name) {
        this.name = name;
        this.ancestor = null;
    }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
    const depthOne = getDescendentDepth(descendantOne, topAncestor);
    const depthTwo = getDescendentDepth(descendantTwo, topAncestor);
    if (depthOne > depthTwo) {
        return backTrackAncestralTree(descendantOne, descendantTwo, depthOne - depthTwo);
    } else {
        return backTrackAncestralTree(descendantTwo, descendantOne, depthTwo - depthOne);
    }
}

function getDescendentDepth(descendant, topAncestor) {
    let depth = 0;
    while (descendant !== topAncestor) {
        depth++;
        descendant = descendant.ancestor;
    }
    return depth;
}

function backTrackAncestralTree(lowerDescendant, higherDescendant, diff) {
    while (diff > 0) {
        lowerDescendant = lowerDescendant.ancestor;
        diff--;
    }
    while (lowerDescendant !== higherDescendant) {
        lowerDescendant = lowerDescendant.ancestor;
        higherDescendant = higherDescendant.ancestor;
    }
    return lowerDescendant;
}