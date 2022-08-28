import { useReducer } from "react";
import { ITask } from "./types";
import { v4 as uuidv4 } from 'uuid'
type Actions =
    { type: 'add', payload: string }
    | { type: 'remove', payload: number }
    | { type: 'done', payload: number }



// const TaskReducer = (state: Array<ITask>, action: Actions) => {
//     switch (action.type) {
//         case "add":
//             return [...state, { id: uuidv4(), TaskName: action.payload, Completed: false }];
//         case "remove":
//             return state.filter((task) => task.id !== action.payload);
//         case "remove":
//             return state.map((task)=>
//             task.id === action.payload ? { ...task, Completed: false } : task);
//     }

// }

// const TodoReducer = () => {
//     const [state, dispatch] = useReducer(TaskReducer, []);
// }