import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

const Name = ({ handleChange, value, item }) => (
  <div>
    <Form.Field
      className="user-details__field"
      label={item.label}
      placeholder={item.label}
      defaultValue={value}
      control="input"
      type={item.type}
      required
      onChange={handleChange('name')}
    />
    {/* <br />
    <br />
    <br /> */}
  </div>
);

Name.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  item: PropTypes.shape({
    name: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
};

export default withRouter(Name);
