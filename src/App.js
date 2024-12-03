
import './App.css';
import React from "react";
import { TaskProvider } from './context/TaskContext';
import  { RouteProvider } from './routes.js';
import Home from "./pages/Home";


function App() {
  return (
    <RouteProvider>
      <TaskProvider>
         <Home/>
      </TaskProvider>
    </RouteProvider>
  );
}

export default App;



