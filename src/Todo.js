import React from 'react';
import Item from './Item';
import { useState } from 'react';

function Todo() {
const [value, setvalue] = useState('');
const [list, setlist] = useState([]);


const handlechange=(e)=>{
  setvalue(e.target.value)
}

const addvalue=()=>{
    let updatelist = [...list,{
        id: Math.round((Math.random() *999)) ,
        text: value
    }]
    setlist(updatelist)
    setvalue('')
}
    const del=(id)=>{
        let updatelist = list.filter((item) => {
            return item.id !== id;
        })
        setlist(updatelist)
    } 

    const removeall=()=>{
      setlist([]);
    }
  return (
    <div className='todo'>
        <h1>Task LIST</h1>
        
        <div className="input">
            
            <input type="text" value={value} onChange={handlechange} placeholder='Enter your task' />
            <button onClick={addvalue}>Add task</button>
            
        </div>
        <div className='message'>
               <h1>Your Task list</h1>
        </div>
             
             <div className="output">
                   {
                     list.map((item)=>{
                            return <Item text={item.text} key={item.id} del={del} id={item.id}/>
                     })
                   }
             </div>

             <div className="remove">
              <button onClick={removeall}>Delete All</button>
             </div>
    </div>
  );
}

export default Todo;
