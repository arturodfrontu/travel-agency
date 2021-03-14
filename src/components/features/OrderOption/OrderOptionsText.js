import React from 'react';
import PropTypes from 'prop-types';
import Styles from './OrderOption.scss';

const OrderOptionText =({currentValue, setOptionValue}) =>{

  return(
    <div>
      <input 
        className={Styles.input}
        type='text'
        value={currentValue}
        onChange={event => {
          return setOptionValue(event.currentTarget.value);
        }}
        placeholder={'Add text here ...'}
      />
    </div>
  );
};

OrderOptionText.propTypes = {
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionText;