import React from 'react';
import Styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import OrderOptionCheckboxes from './OrderOptionCheckboxes';
import OrderOptionDropdown from './OrderOptionDropdown';
import OrderOptionIcons from './OrderOptionIcons';
import OrderOptionNumber from './OrderOptionNumber';

const optionTypes = {
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcons,
  checkboxes: OrderOptionCheckboxes,
  number: OrderOptionNumber,
};

const OrderOption = ({name, type, setOrderOption, id, ...otherProps}) => {
  const OptionComponent = optionTypes[type];
  const value = ()=> setOrderOption({[id]: value});
  if(!OptionComponent){
    return null;
  } else {
    return (
      <div className={Styles.component}>
        <h3 className={Styles.title}>{name}</h3>
        <OptionComponent
          setOptionValue={value}
          {...otherProps}
        />
      </div>
    );
  }
};
OrderOption.propTypes ={
  name: PropTypes.string,
};

export default OrderOption;