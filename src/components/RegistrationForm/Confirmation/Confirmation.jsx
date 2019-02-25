import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Button, List, Message } from 'semantic-ui-react';

import './confirmation.scss';

const Confirmation = ({ values, nextStep, prevStep, items, history }) => {
  const next = e => {
    nextStep();
    history.push('/success');
  };

  const prev = e => {
    prevStep();
    history.push('/signup/incomes');
  };

  return (
    <div>
      <p className="confirmation__description">
        Hit the confirm button if the following information are correct
      </p>
      <List className="confirmation__list">
        <List.Item className="confirmation__item">
          <List.Icon name="users" />
          <List.Content>Name: {values.name}</List.Content>
        </List.Item>
        <List.Item className="confirmation__item">
          <List.Icon name="mail" />
          <List.Content>Email address: {values.email}</List.Content>
        </List.Item>
        <List.Item className="confirmation__item">
          <List.Icon name="phone" />
          <List.Content>Phone number: {values.phone}</List.Content>
        </List.Item>
        <List.Item className="confirmation__item">
          <List.Icon name="euro sign" />
          <List.Content>
            Salary range: {items[3].options[values.incomes].label}
          </List.Content>
        </List.Item>
      </List>
      {(!values.name || !values.email || !values.phone) && (
        <Message
          error
          header="Missing information"
          content="Please fill out all required fields to complete your registration."
        />
      )}
      <Button onClick={e => prev(e)}>Prev.</Button>
      <Button
        onClick={e => next(e)}
        primary
        type="submit"
        disabled={!values.name || !values.email || !values.phone}
      >
        Confirm and save
      </Button>
    </div>
  );
};

Confirmation.propTypes = {
  values: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    incomes: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withRouter(Confirmation);
