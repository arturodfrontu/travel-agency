import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';
import Pricing from '../../../data/pricing.json';
import Styles from './OrderForm.scss';
import OrderOption from '../OrderOption/OrderOption';
import {setOrderOption} from '../../../redux/orderRedux';

const OrderForm = ({tripCost, options}) => (

  <Row>
    {Pricing.map(
      option => {
        return(
          <Col md={3} key={option.id} className={Styles.box}>
            <OrderOption 
              { ...option}
              setOrderOption={setOrderOption}
              currerntValue={options[option.id]}
            />
          </Col>
        );
      }
    )}
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} options={options} />
    </Col>
  </Row>

);

OrderForm.propTypes = {
  options: PropTypes.object,
  tripCost: PropTypes.string,
};

export default OrderForm;
