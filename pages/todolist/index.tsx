import React, { ChangeEvent, useEffect, useState, FC, MouseEvent } from 'react'
import {
  Container, Head, Content
} from '../../pageStyles/toDoList.style'
import { ITask } from '../../utility/types'
import TaskItem from '../../components/TaskItem'
import { v4 as uuidv4 } from 'uuid'
import InputFiled from '../../components/InputFiled'

// const getTodayFormat=()=>{
//  const today:Date =new Date();
//  const dd:string= JSON.stringify(today.getDate());
//  const mm:string = 0+JSON.stringify(today.getMonth()+1);
//  const yyyy:string= JSON.stringify(today.getFullYear());

//  const todayFormat:string= `${yyyy}-${mm}-${dd}`
//      return todayFormat;
// }
const ToDoList : FC = () => {


  const [taskName, setTaskName] = useState<string>("")
  const [deadline, setDeadline] = useState<string>("")
  const [complete, setComplete] = useState<boolean>(false)
  const [priority, setPriority] = useState<boolean>(false)
  const [taskList, setTaskList] = useState<ITask[]>([])

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    const newTask = { id: uuidv4(), TaskName: taskName, Deadline: deadline, Completed: complete, Priority: priority };
    setTaskList([...taskList, newTask]);
    setTaskName("")
    setComplete(false)
    setDeadline("")
    setPriority(false)

  }


  console.log(taskList)
  return (

    <Container >
      <Head>
        <h1> ToDoList</h1>
        <InputFiled handleSubmit={handleSubmit} setTaskName={setTaskName} setDeadline={setDeadline}
          deadline={deadline} taskName={taskName} priority={priority} setPriority={setPriority} />
      </Head>
      <Content>
        {taskList.map((task: ITask, key: number) => {
          return <TaskItem key={key} task={task} setTaskList={setTaskList} taskList={taskList} />
        })}
      </Content>
    </Container>
  )
}


export default ToDoList 