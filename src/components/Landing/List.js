import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import Card from './Card';

import classes from './List.module.css';
import common from './Landing.module.css';

const List = (props) => {
  return (
    <Fragment>
      <div id={props.id} className={classes.listContainer}>
        <div className={classes.headSection}>
          <div className={classes.title}>{props.title}</div>
          <div className={classes.viewAll}>{props.view}</div>
        </div>
        <div className={classes.bookList}>
          <div className={common.leftArrowBox}>
            <FontAwesomeIcon
              icon={faChevronLeft}
              className={common.arrowLeft}
            />
          </div>
          <div className={common.rightArrowBox}>
            <FontAwesomeIcon
              icon={faChevronRight}
              className={common.arrowRight}
            />
          </div>
          {props.data.map((book, idx) => (
            <Card
              key={book.id}
              id={book.id}
              list={props.id}
              idx={idx}
              target={classes}
              title={book.title}
              price={book.price}
              rating={book.rating}
              image={book.image}
              status={book.status}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default List;
