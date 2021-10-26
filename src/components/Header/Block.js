import { Fragment } from 'react';

import classes from './Block.module.css';

const Block = (props) => {
  const { title, image, amount } = props;

  return (
    <Fragment>
      <div className={classes.block}>
        <div className={classes.amount}>{amount}x</div>
        <img className={classes.image} src={`/images/${image}`} alt="" />
        <div className={classes.title}>{title}</div>
      </div>
    </Fragment>
  );
};

export default Block;
