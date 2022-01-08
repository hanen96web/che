import React from 'react'
import { useSelector ,useDispatch } from "react-redux"
import {Alert, Button} from "react-bootstrap"
import { ModifyTask,Supprimer} from "../Slices/TaskSlice";

const Main = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.tasks.tasks);
    const handleEdit=({id})=>{
        dispatch(ModifyTask({ id }));
    };
        const handleDelete=({id})=> {
            dispatch(Supprimer({ id }));
    };                         

                
    return (
        <div className="ddoo">
            {data.map((task) => (
                <Alert variant={task.isDone ? "danger" :"success"}>
                    <div style={{ display: "flex", justifyContent: "space-between"}}>
                    <div style={{ display: "block"}}>
<h5>{task.title}</h5>
<p>{task.description}</p>
<p>{"Deadline:" + task.deadline}</p>
</div>
<div>
<Button  
variant={task.isDone ? "success" :"warning"}
onClick={() => handleEdit({ id: task.id})}
>✓</Button>
<Button  
variant="danger"
onClick={() => handleDelete({ id: task.id})}
>x</Button>
</div>
</div>
</Alert>
            ))}
            
        </div>
    );
};

export default Main;
