let submitBtn = document.getElementById("submitBtn");
let searchBtn = document.getElementById("searchBtn");
let searchResult = document.getElementById("searchResult");
let cityName = document.getElementById("city_Name") as HTMLInputElement;
let country = document.getElementById("country_Name") as HTMLInputElement;
let population = document.getElementById("population_Cnt") as HTMLInputElement;
let searchText = document.getElementById("searchText") as HTMLInputElement;
let myList = document.getElementById("myList");

interface CityDirectory {
  cityName: string;
  countryName: string;
  totalPopulation: string;
}

let cityInfoArray: CityDirectory[] = [];
let searchResultArray: CityDirectory[] = [];

const addCityInfo = (data: CityDirectory) => {
  cityInfoArray.push(data);
};

export const displayCities = () => {
  if (myList) {
    while (myList.hasChildNodes() && myList.firstChild) {
      myList.removeChild(myList.firstChild);
    }
  }

  cityInfoArray.forEach((item: CityDirectory) => {
    let cityList = document.createElement("li") as HTMLLIElement;
    let countryList = document.createElement("li");
    let populationList = document.createElement("li");
    let br = document.createElement("br");

    cityList.innerText = "City: " + item.cityName;
    countryList.innerText = "Country: " + item.countryName;
    populationList.innerText = "Population " + item.totalPopulation;
    if (myList) {
      myList.appendChild(cityList);
      myList.appendChild(countryList);
      myList.appendChild(populationList);
      myList.appendChild(br);
    }
  });
};

export const displaySearchResult = () => {
  let searchResult = document.getElementById("searchResult");

  searchResultArray.forEach((item: CityDirectory) => {
    let cityList2 = document.createElement("li") as HTMLLIElement;
    let countryList2 = document.createElement("li");
    let populationList2 = document.createElement("li");
    let br2 = document.createElement("br");

    cityList2.innerText = "City: " + item.cityName;
    countryList2.innerText = "Country: " + item.countryName;
    populationList2.innerText = "Population " + item.totalPopulation;

    if (searchResult) {
      searchResult.appendChild(cityList2);
      searchResult.appendChild(countryList2);
      searchResult.appendChild(populationList2);
      searchResult.appendChild(br2);
    }
  });
};

submitBtn?.addEventListener("click", () => {
  var newCity: CityDirectory = {
    cityName: cityName.value,
    countryName: country.value,
    totalPopulation: population.value,
  };

  addCityInfo(newCity);
  console.log(cityInfoArray);

  cityName.value = "";
  country.value = "";
  population.value = "";

  displayCities();
});

searchBtn?.addEventListener("click", () => {
  searchResultArray = cityInfoArray.filter((data: CityDirectory) => {
    if (data.cityName.includes(searchText.value)) {
      return data;
    }
  });

  console.log(searchResultArray);
  displaySearchResult();
  searchText.value = "";
});