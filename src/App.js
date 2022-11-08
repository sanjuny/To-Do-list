import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [toDos,setTodos]=useState([]);
  const [toDo,setTodo]=useState('');
  return (
    <div className="app">
      <div className="activeTask">
        <h1>Dropped</h1>
        {toDos.map((datas)=>{
          if(datas.drop){
            return(<h2>{datas.text}</h2>)
          }
          return null;
        })}
        </div>
        <div>
          <div className='mainHeading'>
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2 className='datte'>{new Date().toDateString()} </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        {toDo ? <i onClick={()=>{
          setTodos([...toDos,{id:new Date(), text: toDo,status:false}])
          setTodo('')
        }
        }
          className="fas fa-plus"></i> : ''}
      </div>
      <div className="todos">
        { toDos.map((value)=>{
          if(!value.drop && !value.status){
        return ( 
        <div className="todo">
          <div className="left">
            <input type='checkbox' onChange={(e)=>{
              setTodos(toDos.filter(obj2=>{
                if(obj2.id===value.id){
                  obj2.status=e.target.checked
                }
                return obj2
              }))
            }} value={value.status}  name="" id="" />
            <p>{value.text}</p>
            
          </div>
          <div className="right">
            <i onClick={(e)=>{
              e.target.value = true
              setTodos(toDos.filter((obj2)=>{
                if(obj2.id === value.id){
                  obj2.drop = e.target.value;
                }
                return obj2
              }))

            }} className="fas fa-times"></i>
          </div>
        </div>
)} })
          }
          </div>
          </div>
          <div className='activeTask2'>
            <h1>Done</h1>



{toDos.map((datas)=>{
  if(datas.status){
    return(<h1>{datas.text}</h1>)
  }
  return null

})}
   </div> 
    </div>
  );
}

export default App;
