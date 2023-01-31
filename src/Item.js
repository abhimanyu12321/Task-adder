import React from 'react';

function Item({text,id,del}) {

  return (
      
    <div className="result">
    <div className="text">{text}</div>
    <div className="btn"><button onClick={()=>del(id)} >Delete</button></div>
    </div>
            
  );
}

export default Item;
