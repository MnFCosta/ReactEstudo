import React, {useState} from 'react'

function Routine(){
    const [tasks, setTasks] = useState(['Wake up', 'Eat', 'Get Eepy', 'Sleep']);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(e){
        setNewTask(e.target.value)
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask('');
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks)
    }

    function moveTaskUp(index){
        if(index < (tasks.length - 1)){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }

    function moveTaskDown(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }

    return(
        <div className='routine-planner'>
            <h1>Routine Planner</h1>
            <div>
                <input type="text" placeholder='Enter a task' value={newTask} onChange={handleInputChange}/>
                <button className='add-button' onClick={addTask}>Add</button>
            </div>

            <ul className='task-list'>
                {tasks.map((task,index) =>
                     <li key={index}>
                        <div className='task-container'>
                            <span className='text'>{task} </span>
                            <div className='button-container'>
                                <button className='move-button' onClick={() => moveTaskDown(index)} style={{ visibility: index > 0 ? 'visible' : 'hidden' }}> &lt; </button>
                                <button className='delete-button' onClick={() => deleteTask(index)}>Delete</button>
                                <button className='move-button' onClick={() => moveTaskUp(index)} style={{ visibility: index < tasks.length - 1 ? 'visible' : 'hidden' }}> &gt; </button>
                                
                            </div>
                        </div>
                    </li>)}
            </ul>
        </div>
    );
}

export default Routine

 