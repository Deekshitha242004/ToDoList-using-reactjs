import React from "react"
function TaskItem({taskName,deleteTask,completeTask}){
    return(
<>
<li className='task d-flex justify-content-between'>{taskName}
          <div className='task-buttons w-50 mr-5 d-flex justify-content-end'>
            <button className='btn btn-sm btn-success' onClick={()=>{completeTask(taskName)}}>complete</button>
            <button className='btn btn-sm btn-danger' onClick={()=>{deleteTask(taskName)}}>Delete</button>

          </div>
          </li>

</>
    )
}
export default TaskItem;