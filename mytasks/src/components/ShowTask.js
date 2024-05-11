export const ShowTask = ({taskList, setTaskList}) => {
    return (
        <section className="showTask">
            <div className="head">
                <div>
                    <span className="title">Todo</span>
                    <span className="count">{taskList.length}</span>
                </div>
                <button className="clear" onClick={()=> setTaskList([])}>Clear</button>
            </div>
            <ul>
                 {taskList.map((task) => (<li key={task.id}>
                    <p>
                        <span>{task.name}</span>
                        <span>{task.time}</span>
                    </p>
                    <i className="bi bi-pencil-square"></i>
                    <i className="bi bi-trash"></i>
                </li>
                 )
                 )}
                
            </ul>
        </section>
    )
}