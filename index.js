function getFirstSelector(selector) {
  return document.querySelector(selector)
  // returns the first matching element
}

function nestedTarget() {
  return document.querySelector('#nested .target')
  // pulls a .target out of #nested
  // (# is used for IDs in selectors — but you knew that because you read the docs, right? :) ).
  // (Note that in index.html #nested and .target just happen to be divs. This method should work with arbitrary elements.)
}

function increaseRankBy(n) {
  let queue = [...document.querySelectorAll('.ranked-list')]
  let items = []
  var currentList
  while (currentList = queue.shift()) {
    queue.push(...Array.from(currentList.querySelectorAll('ul')))
    items.push(...Array.from(currentList.querySelectorAll('li')))
  }

  for (let item of items) {
    let rank = parseInt(item.innerHTML)
    item.innerHTML = (rank+n).toString()
  }
  console.log(items.map(x => x.innerHTML));
  // increases the ranks in all of the .ranked-lists by n. (You might need to make use of parseInt()
}

function deepestChild() {
  // pulls out the most deeply nested child from div#grand-node.
  // (Remember, you can iterate over elements and call querySelector() and querySelectorAll() on them.
  var node = document.querySelector('#grand-node')

  let queue = [node]
  let list = [node]
  let current
  while (current = queue.shift()) {
    if (current.children.length) {
      queue.push(...current.children)
      list.push(...current.children)
    } else {
      return current
    }
  }
  // Your solution for deepestChild() does not need to be totally generic; we don't expect it to work in every case. For example, we know that div#grand-node has only one node at each level — for this lab, you can solve for that case, and not worry about a case where there are sibling nodes.
}
