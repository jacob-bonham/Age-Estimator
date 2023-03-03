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
const nameForm = document.getElementById('nameForm');
nameForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let country = document.getElementById("country").value;
  //works:
  if (country === "") {
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
  //edit:
  } else {
    // Convert country name to ISO 3166-1 alpha-2 code
    const countryCode = countryCodes[country];
    fetch(`https://api.agify.io?name=${name}&country_id=${countryCode}`)
      .then(response => response.json())
      .then(data => {
        list.innerHTML = `
          <li class="card-container">
            <p>${name} is ${data.age} year(s) old in ${country}.</p>
          </li>
        `;
      })
      .catch(err => {
        console.log(`error ${err}`);
      });
  }
});
// Define object with country name to ISO 3166-1 alpha-2 code mappings
const countryCodes = {
  "France": "FR",
  "Italy": "IT",
  "Spain": "ES",
  "Turkey": "TR",
  "Germany": "DE",
  "Poland": "PL",
  "United Kingdom": "GB",
  "Russia": "RU",
  "Czech Republic": "CZ",
  "Portugal": "PT",
  "Netherlands": "NL",
  "Belgium": "BE",
  "Morocco": "MA",
  "Philippines": "PH",
  "United States": "US",
  "Romania": "RO",
  "Algeria": "DZ",
  "Nigeria": "NG",
  "Switzerland": "CH",
  "Hungary": "HU",
  "Thailand": "TH",
  "Sweden": "SE",
  "Indonesia": "ID",
  "India": "IN",
  "Ukraine": "UA",
  "Malaysia": "MY",
  "Tunisia": "TN",
  "Saudi Arabia": "SA",
  "Greece": "GR",
  "Ivory Coast": "CI",
  "Austria": "AT",
  "South Africa": "ZA",
  "South Korea": "KR",
  "China": "CN",
  "Serbia": "RS",
  "Japan": "JP",
  "Egypt": "EG",
  "Slovakia": "SK",
  "Senegal": "SN",
  "Denmark": "DK",
  "Finland": "FI",
  "Cameroon": "CM",
  "Iran": "IR",
  "Argentina": "AR",
  "Canada": "CA",
  "Singapore": "SG",
  "Pakistan": "PK",
  "Ghana": "GH",
  "Lebanon": "LB",
  "Ireland": "IE",
  "Angola": "AO",
  "Norway": "NO",
  "Belarus": "BY",
  "Brazil": "BR",
  "Mexico": "MX",
  "Colombia": "CO",
  "Kenya": "KE",
  "Chile": "CL",
  "Kuwait": "KW",
  "Albania": "AL",
  "Venezuela": "VE",
  "Reunion": "RE",
  "Bosnia and Herzegovina": "BA",
  "Israel": "IL",
  "Taiwan": "TW",
  "Slovenia": "SI",
  "Kazakhstan": "KZ",
  "Peru": "PE",
  "Azerbaijan": "AZ",
  "United Arab Emirates": "AE",
  "Cyprus": "CY",
  "Lithuania": "LT",
  "Dominican Republic": "DO",
  "Jordan": "JO",
  "Moldova": "MD",
  "Benin": "BJ",
  "Bulgaria": "BG",
  "Democratic Republic of the Congo": "CD",
  "Croatia": "HR",
  "Latvia": "LV",
  "Hong Kong": "HK",
  "Mozambique": "MZ",
  "Australia": "AU",
  "Luxembourg": "LU",
  "Uganda": "UG",
  "Mali": "ML",
  "Burkina Faso": "BF",
  "Mauritius": "MU",
  "Oman": "OM",
  "Togo": "TG",
  "Qatar": "QA",
  "Macedonia": "MK",
  "Madagascar": "MG",
  "Vietnam": "VN",
  "Gabon": "GA",
  "Estonia": "EE",
  "Iraq": "IQ",
  "Malta": "MT",
  "Bahrain": "BH",
  "Tanzania": "TZ",
  "Ecuador": "EC",
  "Georgia": "GE",
  "Armenia": "AM",
  "Sudan": "SD",
  "Ethiopia": "ET",
  "Myanmar": "MM",
  "Montenegro": "ME",
  "Syria": "SY",
  "Uzbekistan": "UZ",
  "Zimbabwe": "ZW",
  "Djibouti": "DJ",
  "Sri Lanka": "LK",
  "Bangladesh": "BD",
  "Saint Helena": "SH",
  "Botswana": "BW",
  "Cape Verde": "CV",
  "Bolivia": "BO",
  "Yemen": "YE",
  "Rwanda": "RW",
  "Iceland": "IS",
  "Libya": "LY",
  "Niger": "NE",
  "Andorra": "AD",
  "Gambia": "GM",
  "Republic of the Congo": "CG",
  "Zambia": "ZM",
  "Namibia": "NA",
  "Mauritania": "MR",
  "Uruguay": "UY",
  "Costa Rica": "CR",
  "Kyrgyzstan": "KG",
  "Panama": "PA",
  "Nepal": "NP",
  "Guinea": "GN",
  "Guadeloupe": "GP",
  "Equatorial Guinea": "GQ",
  "Martinique": "MQ",
  "Seychelles": "SC",
  "Cuba": "CU",
  "New Zealand": "NZ",
  "Guatemala": "GT",
  "Monaco": "MC",
  "Maldives": "MV",
  "Malawi": "MW",
  "El Salvador": "SV",
  "French Guiana": "GF",
  "Sierra Leone": "SL",
  "Liberia": "LR",
  "Nicaragua": "NI",
  "Cambodia": "KH",
  "Tajikistan": "TJ",
  "Puerto Rico": "PR",
  "Burundi": "BI",
  "Paraguay": "PY",
  "Comoros": "KM",
  "Lesotho": "LS",
  "Somalia": "SO",
  "Honduras": "HN",
  "Chad": "TD",
  "Gibraltar": "GI",
  "Brunei": "BN",
  "San Marino": "SM",
  "Jersey": "JE",
  "Swaziland": "SZ",
  "Turkmenistan": "TM",
  "New Caledonia": "NC",
  "Mongolia": "MN",
  "Liechtenstein": "LI",
  "Greenland": "GL",
  "Bhutan": "BT",
  "French Polynesia": "PF",
  "Sao Tome and Principe": "ST",
  "Mayotte": "YT",
  "Faroe Islands": "FO",
  "Jamaica": "JM",
  "Haiti": "HT",
  "Bahamas": "BS",
  "Guinea-Bissau": "GW",
  "Fiji": "FJ",
  "Guernsey": "GG",
  "Laos": "LA",
  "East Timor": "TL",
  "Trinidad and Tobago": "TT",
  "Antigua and Barbuda": "AG",
  "Western Sahara": "EH",
  "Central African Republic": "CF",
  "Palau": "PW",
  "Isle of Man": "IM",
  "Aruba": "AW",
  "Belize": "BZ",
  "American Samoa": "AS",
  "Anguilla": "AI",
  "Northern Mariana Islands": "MP",
  "Bermuda": "BM",
  "Eritrea": "ER",
  "Suriname": "SR",
  "British Virgin Islands": "VG",
  "U.S. Virgin Islands": "VI",
  "Guyana": "GY",
  "Barbados": "BB",
  "Marshall Islands": "MH",
  "Macao": "MO",
  "Papua New Guinea": "PG",
  "Cayman Islands": "KY",
  "Kiribati": "KI",
  "Netherlands Antilles": "AN",
  "Cook Islands": "CK",
  "Guam": "GU",
  "Wallis and Futuna": "WF",
  "Palestine": "PS",
  "Turks and Caicos Islands": "TC",
  "Vanuatu": "VU",
  "Saint Lucia": "LC",
  "Tonga": "TO",
  "Cocos Islands": "CC",
  "Samoa": "WS",
  "Grenada": "GD",
  "Vatican": "VA",
  "British Indian Ocean Territory": "IO",
  "Micronesia": "FM",
  "Niue": "NU",
  "Saint Barthelemy": "BL",
  "Saint Kitts and Nevis": "KN",
  "Saint Pierre and Miquelon": "PM",
  "Falkland Islands": "FK",
  "Antarctica": "AQ",
  "Pitcairn": "PN",
  "Saint Martin": "MF",
  "Tuvalu": "TV",
  "Saint Vincent and the Grenadines": "VC",
  "Dominica": "DM",
  "Solomon Islands": "SB",
  "Tokelau": "TK",
  "Norfolk Island": "NF",
  "Christmas Island": "CX",
  "Nauru": "NR",
  "Svalbard and Jan Mayen": "SJ",
  "Montserrat": "MS",
  "North Korea": "KP",
  "South Georgia And Sandwich Isl.": "GS",
  "Bouvet Island": "BV",
};