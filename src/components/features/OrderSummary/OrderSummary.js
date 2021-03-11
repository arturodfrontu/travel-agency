import React from 'react';
import styles from './OrderSummary.scss';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';
import PropTypes from 'prop-types';


const OrderSummary = (tripCost, options) => {
  console.log('+++', tripCost);

  const totalTripCost = calculateTotal(tripCost, options);

  return (
    <div className={styles.component}>
      <p>Total trip price: {formatPrice(totalTripCost)}</p>
    </div>
  );
};
OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderSummary;
