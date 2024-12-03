import React from "react";

const TaskStepTwo = ({ formData, setFormData, errors }) => (
  <div>
    <h2 className="text-xl mb-4">Task Description</h2>
    <textarea
      value={formData.description}
      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
      className="w-full p-2 border rounded"
      placeholder="Enter task description"
    />
    {errors.description && <p className="text-red-500">{errors.description}</p>}
  </div>
);



export default TaskStepTwo;
