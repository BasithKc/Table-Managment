
//Function after menu button click 
let menuFlag = false
let darkMode = false

function showMenu() {
  menuFlag = !menuFlag
  // Menu toggling button
  let menuButton = document.querySelector('.menu-toggler')
  let menu = document.querySelector('.menu-small')

  //Changing the class to change the buttons
  if (menuFlag) {
    menuButton.classList.remove('bx-menu')
    menuButton.classList.add('bx-x')

    //Show the menu
    menu.style.display = 'block'
  } else {
    menuButton.classList.remove('bx-x')
    menuButton.classList.add('bx-menu')

    //hide the menu
    menu.style.display = 'none'
  }
}


let tables = []

let modal = document.getElementById('modal')

//load the table while page loaded
document.addEventListener('DOMContentLoaded', () => {
  const storedTables = localStorage.getItem('tables')
  if (storedTables) {
    tables = JSON.parse(storedTables)
    console.log(tables);
    renderTableCards()
  }
})

//Event listener for create table button 
document.getElementById('createTableBtn').addEventListener('click', () => {
  modal.style.display = 'block'
})

//Event listner for table create cancel button
document.getElementById('cancelBtn').addEventListener('click', () => {
  modal.style.display = 'none'
})

document.getElementById('addTableBtn').addEventListener('click', () => {
  //exctracting each value from the form
  const name = document.getElementById('tableName').value
  const type = document.querySelector('input[type="radio"]:checked').value
  const seats = document.querySelector('#seats').value

  if (name && type && seats) {
    //Creating a new table object
    const table = { id: Date.now(), name, type, seats }

    tables.push(table) //Pushing to tables 

    localStorage.setItem('tables', JSON.stringify(tables))

    renderTableCards(table)
    //Hiding the modal
    modal.style.display = 'none'
    resetForm()
  }
})

function resetForm() {
  //Reseting each value from the form
  document.getElementById('tableName').value = ''
  document.querySelector('input[type="radio"]').value = ''
  document.querySelector('#seats').value = ''
}

//function to render each tables
function renderTableCards() {
  const tableCards = document.getElementById('table-grid')

  tableCards.innerHTML = ''

  tables.forEach(table => {
    const card = document.createElement('div')
    card.className = 'table-card'
    card.innerHTML = `   
      <p class="card-heading">${table.name}</p>
      <a href="../html/details.html?table=${table.id}">
      <img src = "../assets/${table.type}-table.jpeg" >
      </a >
      <p class="card-seat"> Total Seat: <span style="color: red;">${table.seats} Seat</span></p >
    `

    tableCards.appendChild(card)
  })
}
//function to transform to dark mode
const main = document.querySelector('.main')

document.querySelector('.bxs-sun').addEventListener('click', () => {
  darkMode = !darkMode
  if (darkMode) {
    main.classList.add('dark')
  } else {
    main.classList.remove('dark')
  }

})