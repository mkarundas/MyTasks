export const AddTask = ({taskList, setTaskList, task, setTask}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const date = new Date();
        if(task.id) {
            const updatedTaskList = taskList.map((todo) => (
                todo.id === task.id ? {id: task.id, name: task.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : todo
            ))
            setTaskList(updatedTaskList);
        } else {
            const newTask = {
                id: date.getTime(), 
                name: e.target.task.value, 
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            }
            setTaskList([...taskList, newTask]);
        }
        e.target.task.value = ""
    }

    return (
       <section className="addTask">
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="task" 
                value={task.name}
                onChange={e=> setTask({...task, name: e.target.value})}
                autoComplete="off" 
                placeholder="Add task" 
                maxLength="25"/>
            <button>Add</button>
        </form>
       </section>
    )
}