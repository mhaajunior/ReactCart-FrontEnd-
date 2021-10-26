import { Fragment } from 'react';
import { useParams } from 'react-router-dom';

import Display from './Display';
import Detail from './Detail';
import List from '../Landing/List';

import books from '../../data/books.json';
import relateBook from '../../data/relateBook.json';

const Book = (props) => {
  let urlId = useParams();
  const displayBook = books.filter((book) => {
    return book.id === +urlId.id;
  });

  const {
    id,
    title,
    image,
    preview,
    author,
    company,
    category,
    type,
    barcode,
    description,
    detail,
    price,
  } = displayBook[0];

  return (
    <Fragment>
      <Display
        id={id}
        title={title}
        image={image}
        preview={preview}
        author={author}
        company={company}
        category={category}
        type={type}
        barcode={barcode}
        price={price}
      ></Display>
      <Detail title={title} description={description} detail={detail} />
      <List
        id="relatedBook"
        title="สินค้าที่เกี่ยวข้อง"
        view="ดูสินค้าทั้งหมด"
        data={relateBook}
      />
    </Fragment>
  );
};

export default Book;
