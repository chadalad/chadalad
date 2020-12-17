class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findClosestValueInBst(tree, target) {
  return findClosestValInBstHelper(tree, target, tree.value);
}

function findClosestValInBstHelper(tree, target, closest) {
  if (tree === null) return closest;
  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }
  if (target < tree.value) {
    return findClosestValInBstHelper(tree.left, target, closest);
  } else if (target > tree.value) {
    return findClosestValInBstHelper(tree.right, target, closest);
  } else {
    return closest;
  }
}
