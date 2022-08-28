import React,{FC,useState,useEffect} from 'react'
import { ITask } from '../../utility/types'
import TaskItem from '../../components/TaskItem'


interface Props{
taskList:Array<ITask>;
setTaskList: React.Dispatch<React.SetStateAction<Array<ITask>>>;

}

const TaskListUI:FC<Props> = ({taskList,setTaskList} )  => {
    const [activeList, setActiveList] = useState<ITask[]>([])

    const ActiveList = () => {
        setActiveList(taskList.filter((task) => {
          return task.Priority != true && task.Completed!= true
        }))
      }
      useEffect(() => {
        ActiveList()
      }, [activeList])


    return (
        <>
         {activeList.map((task: ITask, key: number) => { 
            return  <TaskItem key={key} task={task} setTaskList={setTaskList} taskList={taskList} />
           
        })}
        
        </>
    )
}


export default TaskListUI
