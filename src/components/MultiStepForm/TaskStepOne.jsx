import React from 'react';

const TaskStepOne = ({ formData, setFormData, errors }) => (
  <div>
    <h2 className="text-xl mb-4">Task Title</h2>
    <input
      type="text"
      value={formData.title}
      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      className="w-full p-2 border rounded"
      placeholder="Enter task title"
    />
    {errors.title && <p className="text-red-500">{errors.title}</p>}
  </div>
);

export default TaskStepOne;
