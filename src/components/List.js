import React from 'react';
import ListItems from './ListItems';

const List = ({ listx }) => {
  return (
    <>
      <ul id="list">
      
        <>
          <li className="items" style={{ display: 'none' }}>Placeholder</li>
          {listx.map((item) => (
            <ListItems key={item} value={item} />
          ))}
        </>
      </ul>
    </>
  );
}

export default List;
