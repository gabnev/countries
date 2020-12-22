import React from "react";

class CountriesList extends React.Component {

  state={ value: null }

  handleClick = event => {
      this.setState({value: event.target.innerText});
      this.props.onClick(this.state.value);
  }

  render () {

    const countries = this.props.countries.map((country) => {
      return ( 
      <div key={country.name}>
        <li onClick={this.handleClick}>{country.name}</li>
      </div>
      )
    })
  
    return <div>{countries}</div>

  }
}

export default CountriesList;