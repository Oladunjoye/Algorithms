var isValidBST = function (root) {
  function valid(node, left, right) {
    if (node === null) return true;

    if (node.val <= left || node.val >= right) return false;

    return (
      valid(node.left, left, node.val) && valid(node.right, node.val, right)
    );
  }

  return valid(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
};
