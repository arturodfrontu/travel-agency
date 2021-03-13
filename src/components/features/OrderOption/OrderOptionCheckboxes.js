import React from 'react';
import Styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice';
import PropTypes from 'prop-types';

const newValueSet = ({currentValue, id, checked}) => {
  if(checked){
    return [
      ...currentValue,
      id,
    ];
  } else {
    return currentValue.filter(value => value != id);
  }
};

const OrderOptionCheckboxes =({values, currentValue, setOptionValue}) =>(
  
  <div className={Styles.checkboxes}>
    
    {values.map((value) => {
      const newOptionValue = (event)=> {
        newValueSet(currentValue, value.id, event.currentTarget.checked);
      };
      return (
        <label key={value.id}>
          <input type="checkbox"
            value={value.id}
            checked={currentValue === value.id ? true : false}
            onChange={()=>setOptionValue(newOptionValue)}
          />
          {value.name}{formatPrice(value.price)}
        </label>
      );
    }
    )
    }
    
  </div>
);


OrderOptionCheckboxes.propTypes = {
  values: PropTypes.array,
  currentValue: PropTypes.array,
  setOptionValue: PropTypes.func,
};

export default OrderOptionCheckboxes;