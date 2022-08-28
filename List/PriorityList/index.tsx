import React,{FC,useState,useEffect,useRef} from 'react'
import { ITask } from '../../utility/types'
import TaskItem from '../../components/TaskItem'


interface Props{
taskList:Array<ITask>;
setTaskList: React.Dispatch<React.SetStateAction<Array<ITask>>>;

}

const PriorityListUI:FC<Props> = ({taskList,setTaskList} )  => {
    const [priorityList,setPriorityList]=useState<ITask[]>([])
   
    const PriorityList = () => {
        setPriorityList(taskList.filter((task) => {
          return task.Priority != false && task.Completed!= true
        }))
      }
      useEffect(() => {
     
        PriorityList()
       
      }, [taskList])

    return (
        <>
         {priorityList.map((task: ITask, key: number) => { 
            return  <TaskItem key={key} task={task} setTaskList={setTaskList} taskList={taskList} />
           
        })}
        
        </>
    )
}


export default PriorityListUI