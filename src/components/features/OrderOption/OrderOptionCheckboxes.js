import React from 'react';
import PropTypes from 'prop-types';
import Styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice';

const newValueSet = (currentValue, id, checked) => {
  if(checked){
    return [
      ...currentValue,
      id,
    ];
  } else {
    return currentValue.filter(value => value != id);
  }
};

const OrderOptionCheckboxes = ({values, setOptionValue, currentValue}) => { 
  
  return (
    <div className={Styles.checkboxes}>
      {values.map(value => {

        const newCheckedValue = currentValue.includes(value.id);

        return (
          <label key={value.id}>
            <input
              type="checkbox"
              value={value.id}
              checked={newCheckedValue ? true : false}
              onChange={event => {

                const setNewCheckedOptValue = 
                newValueSet(
                  currentValue, 
                  value.id, 
                  event.currentTarget.checked);
                
                return setOptionValue(setNewCheckedOptValue);
              }
              }
            />
            {value.name}{formatPrice(value.price)}
          </label>
        );
      })}
    </div>
  );
};
OrderOptionCheckboxes.propTypes ={
  currentValue: PropTypes.array,
  setOptionValue: PropTypes.func,
  values: PropTypes.array,
};

export default OrderOptionCheckboxes; 