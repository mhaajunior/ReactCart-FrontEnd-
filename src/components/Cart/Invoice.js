import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { CartState } from '../../store/Context';

import { priceFormat } from '../Helpers';
import classes from './Invoice.module.css';

const Invoice = (props) => {
  const {
    state: { totalAmount },
  } = CartState();

  return (
    <Fragment>
      <div className={classes.invoiceBox}>
        <div className={classes.invoiceWrap}>
          <div className={classes.title}>สรุปคำสั่งซื้อ</div>
          <div className={classes.detailBox}>
            <div>ยอดรวม</div>
            <div>THB{priceFormat(totalAmount)}</div>
          </div>
          <div className={`${classes.detailBox} ${classes.order}`}>
            <div>ค่าส่ง</div>
            <div>THB40.00</div>
          </div>
          <div className={classes.detailBox}>
            <div>ยอดสุทธิ</div>
            <div style={{ fontSize: '18px' }}>
              THB{priceFormat(totalAmount + 40)}
            </div>
          </div>
          <Link to="/cart/checkout" className={classes.orderBtn}>
            {props.btn}
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Invoice;
