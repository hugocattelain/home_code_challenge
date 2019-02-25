import React, { Component } from 'react';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RegistrationForm />
      </div>
    );
  }
}

export default App;
