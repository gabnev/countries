import React from "react";
// Style - section 69
import "../App.css";
import countries from "../api/countries";
import country from "../api/country";
import ContinentForm from "./ContinentForm";
import CountriesList from "./CountriesList";
// import CountryData from "./CountryData";

class App extends React.Component {

  state = { countries: [], country: [] };

  // Video 90 -> 2:00
  onSearchSubmit = async (region) => {
    const response = await countries.get(`${region}`)

    this.setState({ countries: response.data });
  }

  selectedCountry = async (selectedCountry) => {

    // I tried to filter out the first null return here
    if(selectedCountry !== null) {

      const response = await country.get(`${selectedCountry}`)

      this.setState({ country: response.data })

      console.log(this.state.country);
    }

  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <h1>Country Database</h1>
        <ContinentForm onSubmit={this.onSearchSubmit} />
        Found: {this.state.countries.length} countries
        <div className="data-display">
          <ul>
            <CountriesList onClick={this.selectedCountry} countries={this.state.countries} />
          </ul>
          <div className="data-section">
            {this.state.country.map((data) => (
              <div key={data.name}>
                <ul>
                  <li><img className="flag" src={data.flag} alt="flag"/></li>
                  <li>Name: {data.name}</li>
                  <li>Population: {data.population}</li>
                  <li>Region: {data.region}</li>
                  <li>Subregion: {data.subregion}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
