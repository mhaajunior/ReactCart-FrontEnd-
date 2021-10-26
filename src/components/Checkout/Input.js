import { Fragment } from 'react';

import classes from './Input.module.css';

const Input = (props) => {
  return (
    <Fragment>
      <div>
        <label className={classes.label}>{props.title}</label>
        <input type="text" className={classes.input}></input>
      </div>
    </Fragment>
  );
};

export default Input;
