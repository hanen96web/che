import React , { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import {useDispatch } from "react-redux";
import { TaskAdd } from '../Slices/TaskSlice';
import {useNavigate} from "react-router"


const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  var ID = function () {
    return Math.random().toString(36).substr(2,9);
  };
  const [newTask, setnewTask] = useState({
    id:ID(),
    title:"",
    description:"",
    deadline:"",
    isDone: false,
  });
  const handleAdd= () => {
    dispatch(TaskAdd({ newTask: newTask }));
    setTimeout(()=> {
      navigate("/");
    }, 200);
    };


  
    return (
        <Container>
        <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Title</Form.Label>
    <Form.Control 
    type="text" 
    placeholder="title"
    onChange={(e) => setnewTask({...newTask,title: e.target.value})}
     />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Description</Form.Label>
    <Form.Control 
     as="textarea"
      rows={3} 
      onChange={(e) => setnewTask({...newTask,description: e.target.value})}
      />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Deadline</Form.Label>
    <Form.Control
     type="text"
      placeholder="deadline"
      onChange={(e) => setnewTask({...newTask,deadline: e.target.value})} />
  </Form.Group>
</Form>

  <Button
   variant="success"
    size="lg"
    onClick={() => handleAdd()}
    > ADD TASK !
    </Button>         
            
        </Container>
    )
}

export default Admin
