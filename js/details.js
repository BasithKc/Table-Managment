//Extacting the url
const urlParams = new URLSearchParams(window.location.search);
const tableId = urlParams.get('table')

let tableData;

findTable()

//funtion to be find table using tableId
function findTable() {
  const tables = JSON.parse(localStorage.getItem('tables'))
  tableData = tables.find((table) => {
    return table.id === parseInt(tableId)
  })
  showDetails()
}

//Function after menu button click 
let menuFlag = false
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

//This function will display the detials
function showDetails() {
  const mainDiv = document.getElementById('main')
  const contentDiv = document.createElement('div')
  contentDiv.className = 'table-content'
  contentDiv.innerHTML = `
    <h1>${tableData.name}</h1 >
    <img src="../assets/${tableData.type}-table.jpeg">
      `
  mainDiv.appendChild(contentDiv)

}