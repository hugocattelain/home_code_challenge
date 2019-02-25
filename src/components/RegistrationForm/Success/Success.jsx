import React from 'react';
import { Divider, Icon } from 'semantic-ui-react';
import Address from '../UserDetails/Fields/Address';

const Success = () => {
  return (
    <div>
      <Icon name="winner" size="huge" className="success__icon" />
      <h3>You successfully completed the registration process.</h3>
      <br />
      <Divider />
      <h2>Bonus</h2>
      <p>Find your address through the location search bar</p>
      <Address />
    </div>
  );
};
export default Success;
