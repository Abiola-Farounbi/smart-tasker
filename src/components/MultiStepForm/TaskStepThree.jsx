import React from "react";

const TaskStepThree = ({ formData, setFormData, errors }) => (
  <div>
    <h2 className="text-xl mb-4">Priority and Due Date</h2>
    <select
      value={formData.priority}
      onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
      className="w-full p-2 border rounded mb-4"
    >
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
    <input
      type="date"
      value={formData.dueDate}
      onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
      className="w-full p-2 border rounded"
    />
    {errors.dueDate && <p className="text-red-500">{errors.dueDate}</p>}
  </div>
);


export default TaskStepThree;
