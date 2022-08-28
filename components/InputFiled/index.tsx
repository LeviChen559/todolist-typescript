import React, { useState, FC, MouseEvent, ChangeEvent, MouseEventHandler } from 'react'
import {
    InputContainer, TaskInput, TaskInput2, TaskInput3, TaskButton, TaskInputContainer
    , InputContainer2
} from './inputFiled.style'


interface Props {
    setTaskName: React.Dispatch<React.SetStateAction<string>>;
    setDeadline: React.Dispatch<React.SetStateAction<string>>;
    setPriority: React.Dispatch<React.SetStateAction<boolean>>
    handleSubmit: MouseEventHandler<HTMLButtonElement>;
    deadline: string;
    taskName: string;
    priority: boolean
}

const InputFiled:FC<Props> = ({ handleSubmit, taskName, deadline, setTaskName, setDeadline, priority, setPriority }) => {



    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "taskName") {
            setTaskName(event.target.value)
        } else {
            setDeadline(event.target.value)
        }
    }
    const handlePriority = (): void => {
        { setPriority(!priority) }

    }

    return (
        <TaskInputContainer>
            <InputContainer>
                <TaskInput type="text" name="taskName" placeholder="Enter a list of items..." value={taskName} onChange={handleChange} />
                <InputContainer2>
                    <TaskInput2 type="date" name="deadline" value={deadline} onChange={handleChange} />
                    <TaskInput3>Priority<input type="checkbox" name="priority" checked={priority} style={{ background: 'red', color: 'white' }} onChange={handlePriority} /></TaskInput3>
                </InputContainer2>
            </InputContainer>
            <TaskButton onClick={handleSubmit} >Submit</TaskButton>
        </TaskInputContainer>
    )
}

export default InputFiled