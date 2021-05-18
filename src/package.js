import {package} from "./General"
import {general} from "./General"

const task = ({tasks}) => {
    return (
    <>
    {tasks.map((name, key) =>(
        <ListItem task={name} key={name,id} />
        
    ))}
    </>
    );
}