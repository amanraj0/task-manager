import {Schema, model} from "mongoose";

const taskSchema = Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    dueDate:{
        type: String,
        required: false,
    },
    priority:{
        type: String,
        enum: ['Low', 'Medium', 'High', 'Critical'],
        required: false,
    },
    tags:{
        type: [String],
        required: false,
        default: [],
    },
    status:{
        type: String,
        enum: ['Pending', 'In-Progress', 'Blocked', 'Completed'],
        required: false,
        default: 'Pending',
    },
    createdBy:{
        type: Schema.Types.ObjectId,
        ref: "user"
    }
},{timestamps: true});



const task = model('task',taskSchema);

export default task;