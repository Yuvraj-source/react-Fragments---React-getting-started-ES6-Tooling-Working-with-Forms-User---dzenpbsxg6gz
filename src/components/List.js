import React from 'react';
import ListItems from './ListItems';

const List = ({ listx }) => {
  return (
    <>
      <li className="items">First Item</li>
      {listx.map((item) => (
        <ListItems key={item} valuex={item} />
      ))}
    </>
  );
}

export default List;
