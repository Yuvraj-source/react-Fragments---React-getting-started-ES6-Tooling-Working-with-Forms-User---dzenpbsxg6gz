import React from 'react';
import ListItems from './ListItems';

const List = ({listx}) => {
  return (
    <React.Fragment>
      <li className="items" style={{display: 'none'}}>Placeholder</li>
      {listx.map((item) => (
        <ListItems key={item} valuex={item} />
      ))}
    </React.Fragment>
  );
}

export default List;
