import React from 'react';
import Styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import {formatPrice} from '../../../utils/formatPrice';

const OrderOptionDropdown = ({values, required, currentValue, setOptionValue}) => {
  const eventOptionValue = (event)=> {
    setOptionValue(event.currrentTarget.value);
  };
  return(
    <select
      className={Styles.dropdown}
      value={currentValue}
      onChange={eventOptionValue}
    >
      {required ? '' : (
        <option key='null' value=''>---</option>
      )}
      {values.map(value => (
        <option key={value.id} value={value.id}>{value.name} ({formatPrice(value.price)})</option>
      ))}
    </select>
  );
};

OrderOptionDropdown.propTypes = {
  values: PropTypes.array,
  required: PropTypes.bool,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionDropdown;