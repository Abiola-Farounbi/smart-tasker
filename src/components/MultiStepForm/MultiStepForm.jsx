import React, { useState } from 'react';
import TaskStepOne from './TaskStepOne';
import TaskStepTwo from './TaskStepTwo';
import TaskStepThree from './TaskStepThree';
import TaskStepFour from './TaskStepFour';
import { useTaskContext } from '../../context/TaskContext';
import * as Yup from 'yup';

const MultiStepForm = ({ onClose, initialTask = null }) => {
  const { addTask, editTask } = useTaskContext();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialTask || {
    title: '',
    description: '',
    priority: 'medium',
    dueDate: ''
  });
  const [errors, setErrors] = useState({});

  // Task Validation Schema with Yup
  const taskValidationSchema = Yup.object().shape({
    title: Yup.string()
      .required('Task title is required')
      .min(3, 'Title must be at least 3 characters')
      .max(50, 'Title must be at most 50 characters'),
    description: Yup.string()
      .required('Task description is required')
      .min(10, 'Description must be at least 10 characters')
      .max(200, 'Description must be at most 200 characters'),
    priority: Yup.string()
      .oneOf(['low', 'medium', 'high'], 'Invalid priority level')
      .required('Priority is required'),
    dueDate: Yup.date()
      .required('Due date is required')
      .min(new Date(), 'Due date must be in the future')
  });

  const validateStep = async () => {
    try {
      // Validate based on current step
      switch (step) {
        case 1:
          await taskValidationSchema
            .pick(['title'])
            .validate(formData, { abortEarly: false });
          break;
        case 2:
          await taskValidationSchema
            .pick(['description'])
            .validate(formData, { abortEarly: false });
          break;
        case 3:
          await taskValidationSchema
            .pick(['priority', 'dueDate'])
            .validate(formData, { abortEarly: false });
          break;
        case 4:
          await taskValidationSchema.validate(formData, { abortEarly: false });
          break;
        default:
          return;
      }
      setErrors({});
      return true;
    } catch (validationErrors) {
      const errorMap = {};
      validationErrors.inner.forEach(error => {
        errorMap[error.path] = error.message;
      });
      setErrors(errorMap);
      return false;
    }
  };

  const handleNext = async () => {
    const isValid = await validateStep();
    if (isValid) {
      setStep(prev => Math.min(prev + 1, 4));
    }
  };

  const handlePrevious = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    try {
      await taskValidationSchema.validate(formData, { abortEarly: false });
      if (initialTask) {
        editTask({ ...formData, id: initialTask.id });
      } else {
        addTask(formData);
      }
      onClose();
    } catch (validationErrors) {
      const errorMap = {};
      validationErrors.inner.forEach(error => {
        errorMap[error.path] = error.message;
      });
      setErrors(errorMap);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <TaskStepOne formData={formData} setFormData={setFormData} errors={errors} />;
      case 2:
        return <TaskStepTwo formData={formData} setFormData={setFormData} errors={errors} />;
      case 3:
        return <TaskStepThree formData={formData} setFormData={setFormData} errors={errors} />;
      case 4:
        return <TaskStepFour formData={formData} />;
      default:
        return;
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg">
      <div className="mb-4">Step {step} of 4</div>
      {renderStep()}
      <div className="flex justify-between mt-4">
        {step > 1 && (
          <button
            onClick={handlePrevious}
            className="px-4 py-2 bg-gray-200 rounded"
          >
            Previous
          </button>
        )}
        {step < 4 && (
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-500 text-white rounded ml-auto"
          >
            Next
          </button>
        )}
        {step === 4 && (
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Submit Task
          </button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;