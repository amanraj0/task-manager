import taskService from "../service/taskService.js";
import { successResponse, errorResponse } from "../utils/response.js";
import {formatTaskResponse} from "../utils/taskResponseTransformer.js";

const createTask = async (req, res) => {
    try {
        const taskData = req.body;
        const userId = req.user._id;
        const task = await taskService.createTask(taskData, userId);
        const newTask = formatTaskResponse(task);
        return successResponse(res, 'New Task Added', newTask, 201);
    } catch (error) {
        console.error('Error creating task:', error);
        return errorResponse(res, 'Internal Server Error', [], 500);
    }
};

const getTaskById = async (req, res) => {

    const taskId = req.params.taskId;
    const userId = req.user._id;
    try {
        const task = await taskService.getTaskById(taskId,userId);
        if (task) {
            return successResponse(res, "Task retrieved successfully",formatTaskResponse(task),200)
        } else {
            return errorResponse(res,`Couldn't find task with id: ${taskId}`,[],404);
        }

    } catch (error) {
        console.error('Error finding task:', error);
        return errorResponse(res,`Invalid id: ${taskId}`,[],400);
    }

}

const getAllTask = async (req, res) => {
    const userId = req.user._id;
    try {
        const tasks = await taskService.getAllTask(userId);
        if(!tasks || tasks.length === 0){
            return successResponse(res, "No tasks available",[],200);
        } else{
            const formattedTask = tasks.map(task => formatTaskResponse(task));
            return successResponse(res, "Task retrieved successfully",formattedTask,200);
        }
    } catch (error) {
         return errorResponse(res,`Error finding task`,[],500);
    }

}

const deleteTaskById = async (req, res) => {

    const taskId = req.params.taskId;
    const userId = req.user._id;
    try {
        const task = await taskService.deleteTaskById(taskId,userId);
        console.log("Deleted task", task);
        if (task) {
            return successResponse(res, "",[],204);
        } else {
            return errorResponse(res,`Couldn't find task with id: ${taskId}`,[],404);
            
        }

    } catch (error) {
        console.error('Error deleting task:', error);
         return errorResponse(res,`Error while deleting task with id: ${taskId}`,[],500);
    }
}

export default {
    createTask,
    getTaskById,
    getAllTask,
    deleteTaskById,
}



