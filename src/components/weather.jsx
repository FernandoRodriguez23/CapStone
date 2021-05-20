import General, {package} from "./General"
import {package} from "./json"

const task = ({tasks}) => {
    return (
    <>
    {tasks.map((task, key) =>(
        <General task={task} key={task.id} />
    ))}
    </>
    );

    const {id, main, Clear,
    description, clear, icon};
}
