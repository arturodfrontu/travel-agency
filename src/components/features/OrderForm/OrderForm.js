import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';
import Pricing from '../../../data/pricing.json';
import Styles from './OrderForm.scss';
import OrderOption from '../OrderOption/OrderOption';

const OrderForm = ({tripCost, options, setOrderOption}) => (
  <Row>
    {Pricing.map(option => (
      <Col
        md={3}
        key={option.id}
        className={Styles.box}
      >
        <OrderOption 
          {...option} 
          currentValue={options[option.id]} 
          setOrderOption={setOrderOption} 
        />
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary 
        tripCost={tripCost} 
        options={options}
      />
    </Col>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};

export default OrderForm; 