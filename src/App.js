import React from 'react';
import './App.css';
import InputBox from './components/InputBox';
import TodoItem from './components/TodoItem';
import { selectTodoList } from './features/todoSlice';
import { useSelector } from 'react-redux';


function App() {
  const todoList = useSelector(selectTodoList)

  return (
    <div className="app">
      <div className='app_container'>
        <div className='app_todoContainer"'>
        {
          todoList.map(item=>(
            <TodoItem         
              name={item.item} 
              done={item.done}
              id={item.id}
              key={item.id}
            />
          )
        )
        }
        </div>  
        <InputBox />
      </div>
        {/* {done} */}
      {}
    </div>
  );
}

export default App;
