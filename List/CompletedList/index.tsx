import React, { FC, useEffect, useState,useRef } from 'react'
import { ITask } from '../../utility/types'
import TaskItem from '../../components/TaskItem'


interface Props {
  taskList: Array<ITask>;

  setTaskList: React.Dispatch<React.SetStateAction<Array<ITask>>>;

}

const CompletedListUI: FC<Props> = ({ taskList, setTaskList }) => {

  const [completedList, setCompletedList] = useState<ITask[]>([])
  

  const CompletedList = () => {
    setCompletedList(taskList.filter((task) => {
      return task.Completed != false
    }))
  }
  useEffect(() => {
   
    CompletedList()
    
  }, [taskList])

  return (
    <>
      {completedList.map((task: ITask, key: number) => {
        return <TaskItem key={key} task={task} setTaskList={setTaskList} taskList={taskList}

        />

      })}

    </>
  )
}


export default CompletedListUI
