export function formatTaskResponse(task) {
    return {
            id: task._id,
            title: task.title,
            description: task.description,
            ...(task.dueDate && task.dueDate.trim() !== '' && { dueDate: task.dueDate }),
            ...(task.priority && { priority: task.priority }),
            status: task.status,
            createdBy: task.createdBy,
            createdAt: task.createdAt,
            updatedAt: task.updatedAt,
        }
}