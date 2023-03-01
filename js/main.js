//results section
const list = document.querySelector('.results')

//modal section
const modalSection = document.querySelector('.modal-section')

//nav bar
const searchBtn = document.querySelectorAll('.searchEvent')
const searchContainer = document.querySelector('.nav-bottom-container')
const closeBtn = document.querySelectorAll('.close-btn')
const mainContainer = document.querySelector('.main-container')
const clickOff = document.querySelector('.hero').addEventListener('click', close)

document.querySelector('span').addEventListener('click', () => {
  console.log('help')
})

searchBtn.forEach(btn => btn.addEventListener('click', searchBar))

closeBtn.forEach(button => 
  button.addEventListener('click', close))

function close(e){
  e.stopPropagation()
  console.log('closed menu')
    searchContainer.classList.remove('hide')
    mainContainer.style.marginTop = "95px"
    list.innerHTML = ""
  }
     
function searchBar(e){
  e.stopPropagation()
  console.log('search bar opened')
  list.innerHTML = ""
      searchContainer.classList.add('hide')
      mainContainer.style.marginTop = "120px"
     }

//hides mobile keyboard when pressing off of it
const acceptsInput = (elem) => {
  if (!elem) {
    return false
  }
  let tag = elem.tagName
  return tag == 'INPUT' || tag == 'SELECT' || tag == 'TEXTAREA' || elem.isContentEditable || elem.tabIndex >= 0
}

document.addEventListener('touchend', (e) => {
  let target = e.target
  if(!acceptsInput(target)){
    document.activeElement.blur()
  }
})

let fetchHandle //for tracking timeouts
// dynamic search bar eventlistener
document.querySelector('input').addEventListener('keyup', () => {
  //check if there's already a timeout, if there is then cancel it
  if(fetchHandle) clearTimeout(fetchHandle)
  // setup a new timeout to run runSearch after 300 milliseconds
  fetchHandle = setTimeout(runSearch, 300)
})

//function to fetch data for input
const runSearch = () => {
  window.scrollTo(0,0)
  //takes value from the search bar
  let name = document.querySelector('input').value.trim()
  if (name !== "") {
    fetchData(`https://api.agify.io?name=${name}`, (data) => {
      list.innerHTML = `
        <li class="card-container">
          <p>${name} is ${data.age} year(s) old.</p>
        </li>
      `
    })
  } else {
    list.innerHTML = ""
  }
}

//help function that clears html, fetches data to grab ID and runs createItem with ID as param
const fetchData = (url, callback) => { 
  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      callback(data)
    }) 
    .catch(err => {
        console.log(`error ${err}`)
  });
}

//newfunction
//newfunction
const nameForm = document.getElementById('nameForm');
nameForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let country = document.getElementById("country").value;

  if (name !== "") {
    fetch(`https://api.agify.io?name=${name}`)
      .then(response => response.json())
      .then(data => {
        list.innerHTML = `
          <li class="card-container">
            <p>${name} is ${data.age} year(s) old.</p>
          </li>
        `;
      })
      .catch(err => {
        console.log(`error ${err}`);
      });
  } else {
    list.innerHTML = "";
  }

  if (country !== "") {
    fetch(`https://api.agify.io?country=${country}`)
      .then(response => response.json())
      .then(data => {
        list.innerHTML = `
          <li class="card-container">
            <p>${country}.</p>
          </li>
        `;
      })
      .catch(err => {
        console.log(`error ${err}`);
      });
  } else {
    list.innerHTML = "";
  }
});