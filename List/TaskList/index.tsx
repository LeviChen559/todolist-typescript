import React,{FC,useState,useEffect,useRef,useMemo, useCallback} from 'react'
import { ITask } from '../../utility/types'
import TaskItem from '../../components/TaskItem'


interface Props{
taskList:Array<ITask>;
setTaskList: React.Dispatch<React.SetStateAction<Array<ITask>>>;

}

const TaskListUI:FC<Props> = ({taskList,setTaskList} )  => {
    const [activeList, setActiveList] = useState<ITask[]>([])

    
    useEffect(() => {
      
      ActiveList()
     
    }, [taskList])

    const ActiveList = () => {
        setActiveList(taskList.filter((task) => {
          return task.Priority != true && task.Completed!= true
        }))
      }


    return (
        <>
         {activeList.map((task: ITask, key: number) => { 
            return  <TaskItem key={key} task={task} setTaskList={setTaskList} taskList={taskList} />
           
        })}
        
        </>
    )
}


export default TaskListUI
