// The Aside bar open and close event is made with JavaScript. The design is made with ./styles/global.css
const asideButton = document.getElementById('asidebar-button')
const asideElement = document.getElementById('asidebar')
const tasksContainer = document.getElementById('tasks-container')

const moveAsidebar = () => {
  asideElement.classList.toggle('toggle-open')
  asideElement.classList.toggle('left-0')
  // The asidebar moves the main section (tasks container)
  tasksContainer.classList.toggle('left-0')
  tasksContainer.classList.toggle('main-width')
  tasksContainer.classList.toggle('md:left-1/4')
  tasksContainer.classList.toggle('left-16')
  tasksContainer.classList.toggle('lg:px-64')
  tasksContainer.classList.toggle('lg:px-24')
}

asideButton.addEventListener('click', moveAsidebar)


export { moveAsidebar }