function getFirstSelector(selector) {
	return document.querySelector(selector)
}

function nestedTarget() {
	return document.getElementById('nested').querySelector('.target')
}

function deepestChild() {
	let nodes = document.querySelectorAll('#grand-node div');
	let mostDeep = nodes[nodes.length- 1];
	return mostDeep
}

function increaseRankBy(n) {
  let list = document.querySelectorAll('ul.ranked-list')
  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = Number(list[i].innerHTML) + Number(n)
  }
}