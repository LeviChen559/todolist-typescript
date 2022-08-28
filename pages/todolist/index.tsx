import React, { ChangeEvent, useEffect, useState, FC, MouseEvent, useMemo } from 'react'
import {
  Container, Head, Content,Col,HeaderText
} from '../../pageStyles/toDoList.style'
import { ITask } from '../../utility/types'
import TaskItem from '../../components/TaskItem'
import { v4 as uuidv4 } from 'uuid'
import InputFiled from '../../components/InputFiled'
import TaskListUI from '../../List/TaskList'
import CompletedListUI from '../../List/CompletedList'
import PriorityListUI from '../../List/PriorityList'

const ToDoList: FC = () => {
  

   const today:Date =new Date();
   const dd:string= JSON.stringify(today.getDate());
   const mm:string = 0+JSON.stringify(today.getMonth()+1);
   const yyyy:string= JSON.stringify(today.getFullYear());
  
   const todayFormat:string= `${yyyy}-${mm}-${dd}`
      


  const [taskName, setTaskName] = useState<string>("taskName")
  const [deadline, setDeadline] = useState<string>(todayFormat)
  const [complete, setComplete] = useState<boolean>(false)
  const [priority, setPriority] = useState<boolean>(false)
  const [taskList, setTaskList] = useState<ITask[]>([])
  const [completedkList, setCompletedList] = useState<ITask[]>([])

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    const newTask = { id: uuidv4(), TaskName: taskName, Deadline: deadline, Completed: complete, Priority: priority };
    setTaskList([...taskList, newTask]);
    setTaskName("taskName")
    setComplete(false)
    setDeadline(todayFormat)
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
        <Col>
        <HeaderText> Priority Task</HeaderText>
        <PriorityListUI setTaskList={setTaskList} taskList={taskList}  />
        </Col>
        <Col>
        <HeaderText> Active Task</HeaderText>
        <TaskListUI setTaskList={setTaskList} taskList={taskList} />
        </Col>
        <Col>
        <HeaderText> Completed Task</HeaderText>
        <CompletedListUI setTaskList={setTaskList} taskList={taskList} />
        </Col>
      </Content>
    </Container>
  )
}


export default ToDoList 