import { Fragment } from 'react';

import Carousel from './Carousel';
import List from './List';

import bestSeller from '../../data/bestSeller.json';
import newBook from '../../data/recommendBook.json';

const Landing = () => {
  return (
    <Fragment>
      <Carousel />
      <List
        id="bestSeller"
        title="สินค้าขายดี"
        view="ดูสินค้าขายดีทั้งหมด"
        data={bestSeller}
      />
      <List
        id="recommeded"
        title="สินค้าแนะนำ"
        view="ดูสินค้าแนะนำทั้งหมด"
        data={newBook}
      />
    </Fragment>
  );
};

export default Landing;
