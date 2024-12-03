import React, { createContext, useReducer, useContext, useEffect } from "react";


const taskReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        const newTask = { 
          ...action.payload, 
          id: Date.now(), 
          completed: false 
        };
        return [...state, newTask];
      
      case 'DELETE_TASK':
        return state.filter(task => task.id !== action.payload);
      
      case 'EDIT_TASK':
        return state.map(task => 
          task.id === action.payload.id ? action.payload : task
        );
      
      case 'LOAD_TASKS':
        return action.payload;
      
      default:
        return state;
    }
  };
  

  const TaskContext = createContext();

  const TaskProvider = ({ children }) => {
    const [tasks, dispatch] = useReducer(taskReducer, [], () => {
      const localData = localStorage.getItem('tasks');
      return localData ? JSON.parse(localData) : [];
    });
  

    useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
 
    const addTask = (task) => {
      dispatch({ type: 'ADD_TASK', payload: task });
    };
  
    const deleteTask = (id) => {
      dispatch({ type: 'DELETE_TASK', payload: id });
    };
  
    const editTask = (task) => {
      dispatch({ type: 'EDIT_TASK', payload: task });
    };
  
    return (
      <TaskContext.Provider value={{ 
        tasks, 
        addTask, 
        deleteTask, 
        editTask 
      }}>
        {children}
      </TaskContext.Provider>
    );
  };
  
  const useTaskContext = () => {
    const context = useContext(TaskContext);
    if (!context) {
      throw new Error('useTaskContext must be used within a TaskProvider');
    }
    return context;
  };
  

export { TaskContext, TaskProvider , useTaskContext};
