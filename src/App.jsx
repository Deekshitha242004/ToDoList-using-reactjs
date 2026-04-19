import { useState,useEffect } from 'react';
import './App.css'
import TaskItem from './Components/TaskItem'
function App() {
   const[newTask,setNewTask]=useState("");
   const [myTasks, setMyTasks] = useState(() => {
  const saved = localStorage.getItem("myTasks");
  return saved ? JSON.parse(saved) : [
    "Learning Java",
    "Learning ReactJS",
    "Applying Jobs",
    "Writing notes",
    "doing excersise",
    "preparing for interview"
  ];
});

const [completedTasks, setcompletedTasks] = useState(() => {
  const saved = localStorage.getItem("completedTasks");
  return saved ? JSON.parse(saved) : [];
});
   function handleInput(e){
    //  console.log(e);
     let newValue=e.target.value;
     setNewTask(newValue);
   }
    function addTask(){
      setMyTasks(prev=>[...prev,newTask])
      setNewTask("")
    }
    function deleteTask(taskName){
  setMyTasks(prev => prev.filter(x => x !== taskName));
  setcompletedTasks(prev => prev.filter(x => x !== taskName));
}
    function completeTask(taskName){
      let completedTask=myTasks.filter(x=>x==taskName)
      let afterFiltering=myTasks.filter(x=>x!=taskName)
      setMyTasks(afterFiltering)
       setcompletedTasks(prev => [...prev, taskName]);
      
      // setMyTasks(afterDeletionTasks)

    }
    

    useEffect(() => {
    localStorage.setItem("myTasks", JSON.stringify(myTasks));
  }, [myTasks]);

  useEffect(() => {
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
  }, [completedTasks]);
  return (
    <div className='main-body d-flex justify-content-center align-items-center'>
      <div className='todolist'>
        
       <h3 className='headings'style={{ marginTop: "3%",textAlign: "center"  }} >My To do List</h3>
       <div>
        <div className='todo-task-input-div'>
        <div className="form-floating w-75">
  <input type="text" className="form-control" id="floatingInput" placeholder="todo-task" onChange={(e)=>{handleInput(e)}} value={newTask}/>
  <label htmlFor="floatingInput">Todo task</label>
</div>
        <button className='btn btn-success' id="add-button" onClick={()=>addTask()}>+</button>
        
        </div>
        <h6 className='headings' style={{ marginTop: "3%" }}>To be  completed</h6>
        <ul className='tasklist'>
          {
            myTasks.map((task,index)=>
              <TaskItem taskName={task} key={index} deleteTask={deleteTask} completeTask={completeTask}/>
            )
          }
          </ul>
          <hr/>
          <br/>
          <h6 className='headings'>Completed Tasks</h6>
        <ul className='tasklist'>
          {
           completedTasks.map((task,index)=>
              <TaskItem taskName={task} key={index} deleteTask={deleteTask} completeTask={completeTask}/>
            )
          }
          {/* <TaskItem taskName={"Learning Java"}/> */}
          {/* <TaskItem taskName={"Learning ReactJS"}/>
          <TaskItem taskName={"Applying Jobs"}/>
          <TaskItem taskName={"Writing notes"}/>
          <TaskItem taskName={"doing excersise"}/>
          <TaskItem taskName={"preparing for interview"}/>
           */}
 
          
          
        </ul>
       </div>
      
      </div>
       </div>
            
  )
}

export default App
