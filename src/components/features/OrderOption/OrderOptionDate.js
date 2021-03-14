import React from 'react';
import PropTypes from 'prop-types';
import Styles from './OrderOption.scss';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import DatePicker from 'react-datepicker';

const OrderOptionDate = ({currentValue, setOptionValue}) => {

  return (
    <div>
      <DatePicker
        className={Styles.input}
        value={currentValue}
        selected={currentValue}
        onChange={setOptionValue}
        placeholderText={'Pick Your Date...'}
      />
    </div>
  );
};

OrderOptionDate.propTypes = {
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;