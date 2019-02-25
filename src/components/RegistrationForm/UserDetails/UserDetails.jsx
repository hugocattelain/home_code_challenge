import Name from './Fields/Name';
import Email from './Fields/Email';
import Phone from './Fields/Phone';
import SalaryRange from './Fields/SalaryRange';

import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import SwipeableViews from 'react-swipeable-views';

import './user-details.scss';

const UserDetails = ({
  items,
  handleChange,
  values,
  step,
  nextStep,
  prevStep,
  history,
}) => {
  const next = e => {
    const targetUrl =
      step + 1 > items.length - 1
        ? '/confirm'
        : `/signup/${items[step + 1].name}`;
    nextStep();
    history.push(targetUrl);
    e.preventDefault();
  };

  const prev = e => {
    const targetUrl = step <= 0 ? '/' : `/signup/${items[step - 1].name}`;
    prevStep();
    history.push(targetUrl);
  };

  const fields = items.map(item => {
    switch (item.name) {
      case 'name':
        return (
          <Name
            handleChange={handleChange}
            value={values.name}
            item={item}
            key={item.name}
          />
        );
      case 'email':
        return (
          <Email
            handleChange={handleChange}
            value={values.email}
            key={item.name}
            item={item}
          />
        );
      case 'phone':
        return (
          <Phone
            handleChange={handleChange}
            value={values.phone}
            key={item.name}
            item={item}
          />
        );
      case 'incomes':
        return (
          <SalaryRange
            handleChange={handleChange}
            value={values.incomes}
            key={item.name}
            item={item}
          />
        );
      default:
        return null;
    }
  });
  return (
    <React.Fragment>
      <SwipeableViews
        className="user-details__container"
        index={step}
        animateHeight
        containerStyle={{ minHeight: '65px' }}
      >
        {fields}
      </SwipeableViews>
      <div className="user-details__actions">
        {!window.location.pathname.includes('name') && (
          <Button onClick={e => prev(e)} icon="arrow left" />
        )}
        <Button onClick={e => next(e)} primary>
          Next
        </Button>
      </div>
    </React.Fragment>
  );
};

UserDetails.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChange: PropTypes.func.isRequired,
  values: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    incomes: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
  step: PropTypes.number.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  history: PropTypes.any,
};

export default withRouter(UserDetails);
