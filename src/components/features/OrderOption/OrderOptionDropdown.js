import React from 'react';
import Styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import {formatPrice} from '../../../utils/formatPrice';

const OrderOptionDropdown = ({currentValue, required, setOptionValue, values}) => (
  <select
    className={Styles.dropdown}
    value={currentValue}
    onChange={event => setOptionValue(event.currentTarget.value)}
  >
    {required ? '' : (
      <option key='null' value=''>---</option>
    )}
    {values.map(value => (
      <option 
        key={value.id}
        value={value.id}
      >
        {value.name}{formatPrice(value.price)}
      </option>
    ))}
  </select>
);

OrderOptionDropdown.propTypes = {
  currentValue: PropTypes.string,
  required: PropTypes.bool,
  setOptionValue: PropTypes.func,
  values: PropTypes.array,
};

export default OrderOptionDropdown;