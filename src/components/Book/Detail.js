import { Fragment, useState } from 'react';
import $ from 'jquery';

import classes from './Detail.module.css';

const Detail = (props) => {
  const { title, description, detail } = props;
  const [isShowDetail, setIsShowDetail] = useState(false);

  const setActiveClass = (e) => {
    $(`${classes.detailContainer}`).hide();
    $(`.${classes.list}`).removeClass(`${classes.active}`);
    $(e.target).addClass(`${classes.active}`);
    setIsShowDetail(!isShowDetail);
  };

  return (
    <Fragment>
      <div className={classes.detailContainer}>
        <div className={classes.detailHeader}>
          <div
            className={`${classes.list} ${classes.active}`}
            onClick={setActiveClass}
          >
            เกี่ยวกับสินค้า
          </div>
          <div className={classes.list} onClick={setActiveClass}>
            รายละเอียด
          </div>
        </div>
        {!isShowDetail && (
          <div className={classes.detailSection}>
            <div>
              <b>เกี่ยวกับสินค้า:</b> <span>{title}</span>
            </div>
            <div className={classes.wordBox}>{description}</div>
          </div>
        )}
        {isShowDetail && (
          <div className={classes.detailSection}>
            <div>
              <b>รายละเอียด:</b> <span>{title}</span>
            </div>
            <div className={classes.wordBox}>{detail}</div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Detail;
