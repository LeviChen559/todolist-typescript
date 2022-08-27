import React, { useState, useEffect, useRef, FormEvent, useMemo } from 'react'
import { ITask } from '../../utility/types'
import { TaskItemContainer } from './taskItem.style'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';

interface Props {
  task: ITask;
  taskList: Array<ITask>;
  setTaskList: React.Dispatch<React.SetStateAction<Array<ITask>>>;
}

const TaskItem = ({ task, setTaskList, taskList }: Props,) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTaskName, setEditTaskName] = useState<string>(task.TaskName);
  const [editDeadline, setEditDeadline] = useState<string>(task.Deadline);
  const inputTaskNameRef = useRef<HTMLInputElement | null>(null);
  const inputDeadlineRef = useRef<HTMLInputElement | null>(null);
  const executeRef = useRef<boolean>(false);
  useEffect(() => {
    if (executeRef.current) { return }
    inputTaskNameRef.current?.focus();
    inputDeadlineRef.current?.focus();
    executeRef.current = true;
  }, [edit]);
  console.log(inputTaskNameRef.current);
  console.log(inputDeadlineRef.current);

  const EditTask = (e: FormEvent, id: string) => {
    e.preventDefault();
    setTaskList(
      taskList.map((task) => (task.id === id ? { ...task, TaskName: editTaskName, Deadline: editDeadline } : task))
    );
    setEdit(false);
  };
  const CompleteTask = (id: string): void => {
    setTaskList(taskList.map((task) => task.id === id ?
      { ...task, Completed: !task.Completed } : task))

  }
  const DeleteTask = (id: string): void => {
    setTaskList(taskList.filter((task) => {
      return task.id != id
    }))
  }

  return <>

    {task.Priority && task.Completed === true ?
      <Card sx={{ maxWidth: 345, backgroundColor: 'red', margin: 1, opacity: .25 }} >
        <CardContent>
          <form
            onSubmit={(e) => EditTask(e, task.id)}
          >
            {edit ? (
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <input
                  type="text"
                  value={editTaskName}
                  onChange={(e) => setEditTaskName(e.target.value)}
                  ref={inputTaskNameRef}
                />
                <input
                  type="date"
                  value={editDeadline}
                  onChange={(e) => setEditDeadline(e.target.value)}
                  ref={inputDeadlineRef}
                />
              </div>
            )
              :
              // task.Completed === true ? 
              <>
                <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white' }}>
                  {task.TaskName}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
                  {task.Deadline}
                </Typography>
              </>
              // :
              //   <>
              //     <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white' }}>
              //       {task.TaskName}
              //     </Typography>
              //     <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
              //       {task.Deadline}
              //     </Typography>
              //   </>
            }
          </form>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => { if (!edit && task.Completed != true) { setEdit(!edit) } }}><EditIcon /></Button>
          <Button size="small" onClick={() => CompleteTask(task.id)}><CheckIcon /></Button>
          <Button size="small" onClick={() => DeleteTask(task.id)}><DeleteForeverIcon /></Button>
        </CardActions>
      </Card>
      :
      task.Priority === true && task.Completed === false ?
        <Card sx={{ maxWidth: 345, backgroundColor: 'red', margin: 1, opacity: 1 }} >
          <CardContent>
            <form
              onSubmit={(e) => EditTask(e, task.id)}
            >
              {edit ? (
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <input
                    type="text"
                    value={editTaskName}
                    onChange={(e) => setEditTaskName(e.target.value)}
                    ref={inputTaskNameRef}
                  />
                  <input
                    type="date"
                    value={editDeadline}
                    onChange={(e) => setEditDeadline(e.target.value)}
                    ref={inputDeadlineRef}
                  />
                </div>
              )
                :
                <>
                  <Typography gutterBottom variant="h5" component="div" >
                    {task.TaskName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{}}>
                    {task.Deadline}
                  </Typography>
                </>
              }
            </form>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => { if (!edit && task.Completed != true) { setEdit(!edit) } }}><EditIcon /></Button>
            <Button size="small" onClick={() => CompleteTask(task.id)}><CheckIcon /></Button>
            <Button size="small" onClick={() => DeleteTask(task.id)}><DeleteForeverIcon /></Button>
          </CardActions>
        </Card>
        : task.Priority === false && task.Completed === true ?
          <Card sx={{ maxWidth: 345, backgroundColor: 'white', margin: 1, opacity: .25 }} >
            <CardContent>
              <form
                onSubmit={(e) => EditTask(e, task.id)}
              >
                {edit ? (
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <input
                      type="text"
                      value={editTaskName}
                      onChange={(e) => setEditTaskName(e.target.value)}
                      ref={inputTaskNameRef}
                    />
                    <input
                      type="date"
                      value={editDeadline}
                      onChange={(e) => setEditDeadline(e.target.value)}
                      ref={inputDeadlineRef}
                    />
                  </div>
                )
                  :
                  <>
                    <Typography gutterBottom variant="h5" component="div" >
                      {task.TaskName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{}}>
                      {task.Deadline}
                    </Typography>
                  </>
                }
              </form>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => { if (!edit && task.Completed != true) { setEdit(!edit) } }}><EditIcon /></Button>
              <Button size="small" onClick={() => CompleteTask(task.id)}><CheckIcon /></Button>
              <Button size="small" onClick={() => DeleteTask(task.id)}><DeleteForeverIcon /></Button>
            </CardActions>
          </Card>
          :
          <Card sx={{ maxWidth: 345, backgroundColor: 'white', margin: 1, opacity: 1 }} >
            <CardContent>
              <form
                onSubmit={(e) => EditTask(e, task.id)}
              >
                {edit ? (
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <input
                      type="text"
                      value={editTaskName}
                      onChange={(e) => setEditTaskName(e.target.value)}
                      ref={inputTaskNameRef}
                    />
                    <input
                      type="date"
                      value={editDeadline}
                      onChange={(e) => setEditDeadline(e.target.value)}
                      ref={inputDeadlineRef}
                    />
                  </div>
                )
                  :
                  <>
                    <Typography gutterBottom variant="h5" component="div" >
                      {task.TaskName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{}}>
                      {task.Deadline}
                    </Typography>
                  </>
                }
              </form>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => { if (!edit && task.Completed != true) { setEdit(!edit) } }}><EditIcon /></Button>
              <Button size="small" onClick={() => CompleteTask(task.id)}><CheckIcon /></Button>
              <Button size="small" onClick={() => DeleteTask(task.id)}><DeleteForeverIcon /></Button>
            </CardActions>
          </Card>
    }


  </>
}

export default React.memo(TaskItem) 
