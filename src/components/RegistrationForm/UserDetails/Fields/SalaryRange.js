import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

const SalaryRange = ({ handleChange, value, item }) => (
  <div>
    <Form.Group grouped className="user-details__field" required>
      <label>{item.label}</label>
      {item.options.map((option, key) => {
        return (
          <Form.Field
            type={item.type}
            name={item.name}
            key={`radio-option-${key}`}
            control="input"
            value={option.value}
            label={option.label}
            checked={Number(value) === option.value}
            onChange={handleChange('incomes')}
          />
        );
      })}
    </Form.Group>
  </div>
);

SalaryRange.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  item: PropTypes.shape({
    name: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
};

export default withRouter(SalaryRange);
