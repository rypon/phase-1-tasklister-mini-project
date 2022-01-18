document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let form = document.querySelector('#create-task-form')
  form.addEventListener('submit', newTask)
});


function newTask(event) {
  event.preventDefault()
  let input = event.target['new-task-description'].value
  appendTask(input)
  event.target['new-task-description'].value = ''
}

function appendTask(input) {
  //selectors, elements, variables
  let ul = document.querySelector('#tasks')
  let li = document.createElement('li')
  let btn = document.createElement('button')

  //assign values
  li.innerText = `${input} `
  btn.innerText = 'X'

  //appending to DOM
  li.append(btn)
  ul.appendChild(li)

  //event listener
  btn.addEventListener('click', deleteTask)
}

function deleteTask(e) {
  e.target.parentNode.remove()
}