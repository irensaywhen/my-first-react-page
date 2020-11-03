import React from 'react';
import ReactDom from 'react-dom';

// Css
import './index.css';

// Named import - name needs to match
import { books } from './books';

import Book from './book';

// This is our component
// Stateless functional component
// We always need to return JSX
// And you always should return something

function BookList() {
  return (
    <section className='booklist'>
      {books.map(book => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById('root'));
