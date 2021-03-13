import React from 'react';
import Styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice';
import PropTypes from 'prop-types';

const OrderOptionNumber =({currentValue, limits, price, setOptionValue}) => {

  const eventOptionValue = (event)=> {
    setOptionValue(event.currrentTarget.value);
  };

  return(
    <div className={Styles.number}>
      <input type='number'
        className={Styles.inputSmall}
        value={currentValue}
        min={limits.min}
        max={limits.max}
        onChange={()=>eventOptionValue}
      />
      {formatPrice(price)}
    </div>
  );
};

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.node,
  limits: PropTypes.object,
  price: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionNumber;