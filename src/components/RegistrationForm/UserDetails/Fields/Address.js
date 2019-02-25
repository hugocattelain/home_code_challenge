import React, { Component } from 'react';
import SearchBar from 'material-ui-search-bar';
import Script from 'react-load-script';

class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
    };

    this.handleScriptLoad = this.handleScriptLoad.bind(this);
    this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
  }

  handleChange = name => value => {
    this.setState({ [name]: value });
  };

  handleScriptLoad() {
    var options = {
      types: ['address'],
      componentRestrictions: { country: 'de' },
    };

    /*global google*/
    this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete'),
      options
    );
    this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
  }

  handlePlaceSelect() {
    let addressObject = this.autocomplete.getPlace();
    let address = addressObject.formatted_address;
    if (address) {
      this.setState({
        address: address,
      });
    }
  }

  render() {
    return (
      <div>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyCfW6ybOjONKCX3nkuDvfI48N-cPOhaq8A&libraries=places"
          onLoad={this.handleScriptLoad}
        />
        <SearchBar
          id="autocomplete"
          placeholder="Search Address"
          value={this.state.address}
          onChange={this.handleChange('address')}
          style={{
            margin: '0 auto',
            maxWidth: 800,
          }}
        />
      </div>
    );
  }
}

export default Address;
