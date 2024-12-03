import React, { useState } from "react";
import MultiStepForm from "../components/MultiStepForm/MultiStepForm";
import { useTaskContext } from "../context/TaskContext";
import { Edit, Trash2 } from 'lucide-react';
import Modal from "../components/Modal";

const Dashboard = () => {
  const { tasks, deleteTask } = useTaskContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredTasks = tasks.filter(task => 
    task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openEditModal = (task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Smart Tasker</h1>

      <div className="mb-4 flex space-x-2">
        <input 
          type="text" 
          placeholder="Search tasks..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow p-2 border rounded"
        />
        <button 
          onClick={() => {
            setEditingTask(null);
            setIsModalOpen(true);
          }}
          className="bg-purple-500 text-white px-4 py-2 rounded"
        >
          Add New Task
        </button>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
      >
        <MultiStepForm
          onClose={() => setIsModalOpen(false)}
          initialTask={editingTask} 
        />
      </Modal>

      <div className="space-y-2">
        {filteredTasks.map(task => (
          <div 
            key={task.id} 
            className="flex items-center justify-between p-3 border rounded"
          >
            <div>
              <h3 className="font-bold">{task.title}</h3>
              <p>{task.description}</p>
              <span className="text-sm text-gray-500">
                Due: {task.dueDate} | Priority: {task.priority}
              </span>
            </div>
            <div className="flex space-x-2">
              <button 
                onClick={() => openEditModal(task)}
                className="text-purple-500"
              >
                <Edit size={20} />
              </button>
              <button 
                onClick={() => deleteTask(task.id)}
                className="text-red-500"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

