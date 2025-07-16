import Task from "../models/task.js";

const createTask = async (taskData, userId) =>{
    const task = new Task({
      ...taskData,
      createdBy: userId,
    });
    return await task.save();
};

const getTaskById = async (taskId, userId) =>{
  const task = await Task.findOne({ _id: taskId, createdBy: userId });
  return await task;
}

const getAllTask = async (userId) =>{
  const tasks = await Task.find({createdBy: userId});
  return await tasks;
}

const deleteTaskById = async (taskId,userId) =>{
  const tasks = await Task.findOneAndDelete({ _id: taskId, createdBy: userId });
  return await tasks;
}

export default {
  createTask,
  getTaskById,
  getAllTask,
  deleteTaskById,
};

