import React from 'react';

const TaskStepFour = ({ formData }) => (
  <div>
    <h2 className="text-xl mb-4">Review Task</h2>
    <p><strong>Title:</strong> {formData.title}</p>
    <p><strong>Description:</strong> {formData.description}</p>
    <p><strong>Priority:</strong> {formData.priority}</p>
    <p><strong>Due Date:</strong> {formData.dueDate}</p>
  </div>
);

export default TaskStepFour;
