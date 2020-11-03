import React from 'react';

const Book = ({ title, author, img, children }) => {
  // attribute and eventHandler
  // onClick, onMouseOver
  const clickHandler = () => {
    alert('Hello world!');
  };

  const complexExample = author => {
    // Logging local variable
    console.log(author);
  };
  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt='Turkey' />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4 style={{ color: 'green', fontSize: '0.75rem', marginTop: '1.25rem' }}>
        {author}
      </h4>
      <button type='button' onClick={clickHandler}>
        Refernce example
      </button>
      <button type='button' onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  );
};

export default Book;
