import { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faShoppingCart,
  faTimes,
  faSortUp,
} from '@fortawesome/free-solid-svg-icons';

import Block from './Block';

import { priceFormat } from '../Helpers';
import { CartState } from '../../store/Context';
import profileImg from '../../assets/profile.JPG';
import classes from './Header.module.css';
import card from '../Landing/Card.module.css';

const Header = (props) => {
  const {
    state: { items, totalAmount },
  } = CartState();
  const numberOfCartItems = items.reduce((a, v) => (a = a + v.amount), 0);

  const [isShownInput, setIsShownInput] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <Fragment>
      <div className={classes.bgBox}></div>
      <header className={classes.header}>
        <div className={classes.navWrapper}>
          <div className={classes.navBoxLeft}>
            <div className={classes.logo}>
              <Link to="/">Book</Link>
            </div>
            {!isShownInput && (
              <ul className={classes.leftUl}>
                <li>
                  <Link to="/">สินค้าใหม่</Link>
                </li>
                <li>
                  <Link to="/">สินค้าขายดี</Link>
                </li>
                <li>
                  <Link to="/">สินค้าลดราคา</Link>
                </li>
                <li>
                  <Link to="/">สินค้าแนะนำ</Link>
                </li>
              </ul>
            )}
            {isShownInput && (
              <div className={classes.inputWrap}>
                <input
                  type="text"
                  name="search"
                  placeholder="ค้นหาสินค้า"
                  autoComplete="off"
                />
                <FontAwesomeIcon
                  icon={faSearch}
                  className={classes.inputSearch}
                />
              </div>
            )}
          </div>
          <div className={classes.navBoxRight}>
            <ul>
              {!isShownInput && (
                <li onClick={() => setIsShownInput(true)}>
                  <FontAwesomeIcon
                    icon={faSearch}
                    className={classes.hoverIcon}
                  />
                </li>
              )}
              {isShownInput && (
                <li onClick={() => setIsShownInput(false)}>
                  <FontAwesomeIcon
                    icon={faTimes}
                    className={classes.hoverIcon}
                  />
                </li>
              )}
              <li
                className={classes.cartIcon}
                onClick={() => setShowTooltip(!showTooltip)}
              >
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  flip="horizontal"
                  className={classes.hoverIcon}
                />
                {numberOfCartItems > 0 && (
                  <div className={classes.badge}>{numberOfCartItems}</div>
                )}
                {showTooltip && (
                  <div>
                    <FontAwesomeIcon
                      icon={faSortUp}
                      className={classes.arrow}
                    />
                    <div id="cartTooltip" className={classes.tooltipContainer}>
                      <div className={classes.basketTitle}>ตะกร้าของฉัน</div>
                      <div className={classes.basketStatus}>
                        {numberOfCartItems} สินค้าในตะกร้า
                      </div>
                      <Link
                        className={`${card.cartBtn} ${classes.cartBtn}`}
                        to="/cart"
                      >
                        ดูหรือแก้ไขตะกร้าของฉัน
                      </Link>
                      {items.map((book) => (
                        <Block
                          key={book.id}
                          amount={book.amount}
                          image={book.image}
                          title={book.title}
                        />
                      ))}
                      <div className={classes.basketPrice}>
                        ยอดรวม:{' '}
                        <span style={{ fontSize: '20px', color: 'black' }}>
                          THB{priceFormat(totalAmount)}
                        </span>
                      </div>
                      <Link
                        className={`${card.cartBtn} ${classes.checkoutBtn}`}
                        to="/cart/checkout"
                      >
                        ไปชำระเงิน
                      </Link>
                    </div>
                  </div>
                )}
              </li>
              <li>
                <div className={classes.profileImgBox}>
                  <img src={profileImg} className={classes.profileImg} alt="" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
