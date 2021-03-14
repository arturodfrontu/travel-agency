import React from 'react';
import PropTypes from 'prop-types';
import Styles from './OrderOption.scss';
import OrderOptionCheckboxes from './OrderOptionCheckboxes';
import OrderOptionDropdown from './OrderOptionDropdown';
import OrderOptionIcons from './OrderOptionIcons';
import OrderOptionNumber from './OrderOptionNumber';
import OrderOptionText from './OrderOptionsText';
import OrderOptionDate from './OrderOptionDate';

const optionTypes = {
  checkboxes: OrderOptionCheckboxes,
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcons,
  number: OrderOptionNumber,
  text: OrderOptionText,
  date: OrderOptionDate,
};
  
const OrderOption = ({id, setOrderOption, name, type, ...otherProps}) => {

  const OptionComponent = optionTypes[type];
  const newOptionValue = (value) => {
    setOrderOption({ [id]: value });
  };
  
  if(!OptionComponent){
    return null;
  } else {
    return (
      <div className={Styles.component}>
        <h3 className={Styles.title}>
          {name}
        </h3>
        <OptionComponent
          {...otherProps} 
          setOptionValue={newOptionValue}
        />
      </div>
    );
  }
};

OrderOption.propTypes ={
  name: PropTypes.string,
};

export default OrderOption;