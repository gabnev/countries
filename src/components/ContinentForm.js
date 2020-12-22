import React from "react";

class ContinentForm extends React.Component {
  // constructor(props) {
  //   super(props);
    
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  state = {value: "africa"};

  handleChange = event => {
    this.setState({value: event.target.value})
  }

  handleSubmit = event => {

    this.props.onSubmit(this.state.value);

    event.preventDefault();
  }

  render() {

    return(
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <label>
            Select continent:
            <select className="field" value={this.state.value} onChange={this.handleChange} style={{width: "12.5%"}}>
              <option value="africa">Africa</option>
              <option value="americas">Americas</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
            </select>
          </label>
          <input type="submit" value="Submit" style={{marginTop: "10px"}} />
        </form>
      </div>
    );
  }
}

export default ContinentForm;