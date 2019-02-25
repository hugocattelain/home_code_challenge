import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

const Phone = ({ handleChange, value, item }) => (
  <div>
    <Form.Field
      className="user-details__field"
      label={item.label}
      placeholder={item.label}
      defaultValue={value}
      control="input"
      name={item.name}
      type={item.type}
      required
      onChange={handleChange('phone')}
    />
  </div>
);

Phone.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  item: PropTypes.shape({
    name: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
};

export default withRouter(Phone);
