function getFirstSelector(selector) {
  return document.querySelector(selector)
  // returns the first matching element
}

function nestedTarget() {
  // pulls a .target out of #nested
  // (# is used for IDs in selectors — but you knew that because you read the docs, right? :) ).
  // (Note that in index.html #nested and .target just happen to be divs. This method should work with arbitrary elements.)
}

function increaseRankBy(n) {

  // increases the ranks in all of the .ranked-lists by n. (You might need to make use of parseInt()
}

function deepestChild() {
  // pulls out the most deeply nested child from div#grand-node.
  // (Remember, you can iterate over elements and call querySelector() and querySelectorAll() on them.

  // Your solution for deepestChild() does not need to be totally generic; we don't expect it to work in every case. For example, we know that div#grand-node has only one node at each level — for this lab, you can solve for that case, and not worry about a case where there are sibling nodes.
}
