import UserDetails from './UserDetails/UserDetails';
import Confirmation from './Confirmation/Confirmation';
import Success from './Success/Success';
import ProgressBar from './ProgressBar/ProgressBar';

import React, { Component } from 'react';
import { BrowserRouter as BR, Switch, Route, Redirect } from 'react-router-dom';
import { Segment, Header, Form } from 'semantic-ui-react';

import './registration-form.scss';

const items = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
  },
  {
    name: 'email',
    label: 'Email address',
    type: 'email',
  },
  {
    name: 'phone',
    label: 'Phone number',
    type: 'tel',
  },
  {
    name: 'incomes',
    label: 'Incomes',
    type: 'radio',
    options: [
      { value: 0, label: '0 - 1000 €' },
      { value: 1, label: '1000 - 2000 €' },
      { value: 2, label: '2000 - 3000 €' },
      { value: 3, label: '3000 - 4000 €' },
      { value: 4, label: 'Mehr als 4.000 €' },
    ],
  },
];

class RegistrationForm extends Component {
  state = {
    step: 0,
    name: '',
    email: '',
    phone: '',
    incomes: 0,
    address: '',
  };

  nextStep = () => {
    this.setState(prevState => ({ step: prevState.step + 1 }));
  };

  prevStep = () => {
    this.setState(prevState => ({
      step: prevState.step <= 0 ? 0 : prevState.step - 1,
    }));
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  getTitle = () => {
    const pathName = window.location.pathname;
    switch (pathName) {
      case '/signup':
        return 'Personal Details';
      case '/confirm':
        return 'Everything correct ?';
      case '/success':
        return 'Congratulations';
      default:
        return 'Personal Details';
    }
  };

  render() {
    const { name, email, phone, incomes, step } = this.state;
    const values = { name, email, phone, incomes };

    return (
      <div>
        <Segment className="register__content">
          <Header as="h1">{this.getTitle()}</Header>
          <ProgressBar completed={(step / 5) * 100} />
          <Form color="black" className="register__form">
            <BR>
              <Switch>
                <Route
                  path="/signup"
                  render={() => (
                    <UserDetails
                      items={items}
                      handleChange={this.handleChange}
                      values={values}
                      step={step}
                      nextStep={this.nextStep}
                      prevStep={this.prevStep}
                    />
                  )}
                />
                <Route
                  path="/confirm"
                  excact
                  render={() => (
                    <Confirmation
                      values={values}
                      items={items}
                      nextStep={this.nextStep}
                      prevStep={this.prevStep}
                    />
                  )}
                />
                <Route exact path="/success" render={Success} />
                <Redirect from="/" to="/signup/name" />
              </Switch>
            </BR>
          </Form>
        </Segment>
      </div>
    );
  }
}
export default RegistrationForm;
