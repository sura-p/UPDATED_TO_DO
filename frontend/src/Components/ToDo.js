import React, {  useRef, useState } from 'react'
import {Button, Form} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {GoPlus} from 'react-icons/go'
import { addtodos } from '../Services/Actions/action'
import DisplayTodos from './DisplayTodos'
function ToDo() {
 
  document.title="TO-DO-APP"
    const inputref=useRef(true)
    const store = useSelector(state=>state.Todos)
    const activeuser = useSelector(state=>state.Users.activeusers?.email);
  console.log(activeuser);
    const dispatch = useDispatch()
    const [todo,settodo]=useState('')

    
    const handelSubmit=(e)=>{
        e.preventDefault();
        const id=Math.floor(Math.random()*1000)

            dispatch(addtodos({activeuser,todo,id,completed:false}))
            settodo('')
    }
    const handelchange=(e)=>{
        settodo(e.target.value);
        
    }

   
    
  return (
    <>
    
    <div className='.addTodos'>

        <Form onSubmit={handelSubmit} className='addTodos'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="text" placeholder="" onChange={handelchange} value={todo} className="todo-input" />
        
      </Form.Group>
      <Button  type="submit" className='add-btn' >
        <GoPlus/>
      </Button>
        </Form>
        <DisplayTodos/>
       
    </div>
    </>
  )
}

export default ToDo