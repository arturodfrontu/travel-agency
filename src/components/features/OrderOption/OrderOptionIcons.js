import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice';
import Icon from '../../common/Icon/Icon';

const OrderOptionIcons = ({currentValue, required, setOptionValue, values}) => (
  <div className={styles.icon}>
    {required ? '' : (
      <div 
        className={currentValue == '' ? `${styles.icon} ${styles.iconActive}` : styles.icon} 
        onClick={() => setOptionValue('')} 
      >
        <Icon name='times-circle' /> None
      </div>
    )}

    {values.map(value => {
      const styleIconValue = value.id == currentValue ? `${styles.icon} ${styles.iconActive}` : styles.icon;
      return (
        <div
          className={styleIconValue}
          key={value.id}
          onClick={() => setOptionValue(value.id)}
        >
          <Icon name={value.icon} />
          {value.name}
        ({formatPrice(value.price)})
        </div>
      );
    })}
  </div>
);

OrderOptionIcons.propTypes = {
  currentValue: PropTypes.string,
  required: PropTypes.bool,
  setOptionValue: PropTypes.func,
  values: PropTypes.array,
};

export default OrderOptionIcons;