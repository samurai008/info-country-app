import React from 'react';

export default class SearchCountry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchCriteria: 'name',
      searchTerm: '',
      regionBloc: 'EU'
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); 
  }

  handleSubmit(event) {
    console.log(this.state.searchCriteria, this.state.searchTerm);
    const params = {
      criteria: this.state.searchCriteria,
      term: this.state.searchTerm == '' ? this.state.regionBloc : this.state.searchTerm
    };
    this.props.getCountryDetails(params)
    .then((res) => res.json(), (err) => console.log(err))
    .then(res => console.log(res));
    event.preventDefault();
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    console.log(this.state.regionBloc)
  }

  renderInputBox() {

    return (
      <div className="custom-control custom-control-inline">
        <input 
          type="text"
          className="form-control"
          id="searchBox"
          placeholder=""
          name="searchTerm"
          value={this.state.searchTerm}
          onChange={this.handleChange}></input>
      </div>
    )
  }

  renderRegionBloc() {
    const blocks = [
      'EU',
      'EFTA',
      'CARICOM',
      'PA',
      'AU',
      'USAN',
      'EEU',
      'AL',
      'ASEAN',
      'CAIS',
      'CEFTA',
      'NAFTA',
      'SAARC'
    ];

    const options = blocks.map((value, i) => <option value={value} key={i}>{value}</option>)

    return (
      <select className="custom-select ml-2 mr-2"
        value={this.state.regionBloc}
        onChange={this.handleChange}
        name="regionBloc"
        >
          {options}
      </select>
    )
  }

  render() {
    return (
    <div className="d-flex justify-content-center mt-4">
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <select className="custom-select" value={this.state.searchCriteria} name="searchCriteria" onChange={this.handleChange}>
          <option value="name">NAME</option>
          <option value="fullName">FULL NAME</option>
          <option value="code">CODE</option>
          <option value="code">LIST OF CODES</option>
          <option value="currency">CURRENCY</option>
          <option value="language">LANGUAGE</option>
          <option value="capitalCity">CAPITAL CITY</option>
          <option value="callingCode">CALLING CODE</option>
          <option value="region">REGION</option>
          <option value="regionalBloc">REGIONAL BLOC</option>
        </select>

        {
          this.state.searchCriteria == 'regionalBloc' ?
            this.renderRegionBloc()
          : this.renderInputBox()
        }

        

        <button type="submit" className="btn btn-primary">Find</button>
      </form>
    </div>
    )
  }
}