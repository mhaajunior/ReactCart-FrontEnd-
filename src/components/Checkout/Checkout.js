import { Fragment } from 'react';

import Invoice from '../Cart/Invoice';
import Form from './Form';

import cart from '../Cart/Cart.module.css';

const Checkout = () => {
  return (
    <Fragment>
      <div className={cart.cartContainer}>
        <div className={cart.cartHeader}>ชำระเงิน</div>
        <div className={cart.cartDetail}>
          <Form />
          <Invoice btn="ชำระเงิน" />
        </div>
      </div>
    </Fragment>
  );
};

export default Checkout;
