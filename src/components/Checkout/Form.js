import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import $ from 'jquery';

import Input from './Input';
import kerryImg from '../../assets/kerry.png';

import classes from './Form.module.css';

const Form = (props) => {
  const changeShipping = (e) => {
    $("#shipping input[type='radio']").prop('checked', false);
    $("#shipping input[type='radio']")
      .parent()
      .removeClass(`${classes.active}`);
    $(e.target).prop('checked', true);
    $(e.target).parent().addClass(`${classes.active}`);
  };

  const changePayment = (e) => {
    $("#payment input[type='radio']").prop('checked', false);
    $("#payment input[type='radio']").parent().removeClass(`${classes.active}`);
    $(e.target).prop('checked', true);
    $(e.target).parent().addClass(`${classes.active}`);
  };

  return (
    <Fragment>
      <form>
        <div className={classes.formSection}>
          <div className={classes.formTitle}>ที่อยู่ในการจัดส่ง</div>
          <div className={classes.inputGroup}>
            <div className={classes.flexBox}>
              <div className={classes.flexItem}>
                <Input key="name" title="ชื่อ" />
              </div>
              <div className={classes.flexItem}>
                <Input key="lname" title="นามสกุล" />
              </div>
            </div>
            <Input key="country" title="ประเทศ" />
            <Input
              key="adrress"
              title={
                <>
                  ที่อยู่{' '}
                  <span className={classes.address}>
                    (บ้านเลขที่/หมู่บ้าน/หมู่ที่/ซอย/ถนน)
                  </span>
                </>
              }
            />
            <div className={classes.flexBox}>
              <div className={classes.flexItem}>
                <Input key="distict" title="แขวง/ตำบล" />
              </div>
              <div className={classes.flexItem}>
                <Input key="subDistict" title="เขต/อำเภอ" />
              </div>
            </div>
            <div className={classes.flexBox}>
              <div className={classes.flexItem}>
                <Input key="province" title="จังหวัด" />
              </div>
              <div className={classes.flexItem}>
                <Input key="postal" title="รหัสไปรษณีย์" />
              </div>
            </div>
            <Input
              key="tel"
              title="เบอร์ติดต่อ (กรุณาระบุหมายเลขโทรศัพท์ เฉพาะตัวเลขเท่านั้น)"
            />
          </div>
        </div>
        <div id="shipping" className={classes.formSection}>
          <div className={classes.formTitle}>เลือกขนส่ง</div>
          <div className={classes.cashBox}>
            <input type="radio" onChange={changeShipping} />
            <div className={classes.cashText}>Free Shipping</div>
            <div className={classes.cashPrice}>THB0.00</div>
          </div>
          <div className={classes.cashBox}>
            <input type="radio" onChange={changeShipping} />
            <div className={classes.cashImg}>
              <img src={kerryImg} alt="" className={classes.kerry} />
            </div>
            <div className={classes.cashPrice}>THB40.00</div>
          </div>
        </div>
        <div id="payment" className={classes.formSection}>
          <div className={classes.formTitle}>วิธีการชำระเงิน</div>
          <div className={classes.cashBox}>
            <input type="radio" onChange={changePayment} />
            <div className={classes.cashText}>
              {' '}
              <FontAwesomeIcon
                icon={faDollarSign}
                className={classes.cashBtn}
              />
              Cash
            </div>
          </div>
          <div className={classes.cashBox}>
            <input type="radio" onChange={changePayment} />
            <div className={classes.cashText}>
              <FontAwesomeIcon
                icon={faCreditCard}
                className={classes.cashBtn}
              />
              Credit/Debit
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default Form;
