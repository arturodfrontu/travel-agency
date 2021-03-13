import React from 'react';
import Styles from './OrderOption.scss';
import Icon from '../../common/Icon/Icon';
import {formatPrice} from '../../../utils/formatPrice';
import PropTypes from 'prop-types';


const OrderOptionIcons =({required, setOptionValue, values, currentValue}) => (
    

  <div className={Styles.checkboxes}>
    {required ? '' : (
      <div className={Styles.icon} onClick={() => setOptionValue('')} value="">
        <Icon  name={'times-circle'} /> none 
      </div>
    )}
    
    {values.map((value) => {
      const styleIconValue = Styles.icon && currentValue === value.id;
      return(
        <div className={styleIconValue ? Styles.iconActive : ''}
          key={value.id}
          onClick={() => setOptionValue(value.id)}>

          <Icon name={value.icon} />
          {value.name}({formatPrice(value.price)})
        </div>
      );
    }
    )}
  </div>
);

OrderOptionIcons.propTypes = {
  required: PropTypes.bool,
  setOptionValue: PropTypes.func,
  values: PropTypes.array,
  currentValue: PropTypes.string,

};

export default OrderOptionIcons;