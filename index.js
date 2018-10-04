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
}

function deepestChild() {
  let queue = [document.querySelector('#grand-node')]
  let current
  while (current = queue.shift()) {
    if (!current.children.length) {
      return current
    }
    queue.push(...current.children)
  }
}
