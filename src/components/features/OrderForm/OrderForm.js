import React from 'react';
import PropTypes from 'prop-types';
import PageTitle from '../../common/PageTitle/PageTitle';
import {Row, Col, Grid} from 'react-flexbox-grid';
import './OrderForm.scss';


const OrderForm = (cost) => {
  return (
    <Grid>
      <Row>
        <Col xs={12}>
          <PageTitle text='Trip options' />
          <OrderForm tripCost={cost} />
        </Col>
      </Row>
    </Grid>
  );

};

OrderForm.PropTypes = {
  cost: PropTypes.string,
};

export default OrderForm;
