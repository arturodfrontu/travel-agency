import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice';

const OrderOptionNumber = ({currentValue, limits, price, setOptionValue}) => {
  return (
    <div className={styles.number}>
      <input
        className={styles.inputSmall}
        type='number'
        value={currentValue}
        onChange={event => setOptionValue(event.currentTarget.value)}
        min={limits.min}
        max={limits.max} />
      {formatPrice(price)}
    </div>
  );
};

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.any,
  limits: PropTypes.object,
  price: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionNumber;