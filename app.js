import express from "express";
import 'dotenv/config';

import taskRoute from "./routes/task.js";
import authRoute from "./routes/auth.js";
import connect from "./utils/mongodb.js";


const app = express();
const PORT = process.env.PORT;
const MONGO_DB_URL = process.env.MONGO_DB_URL

app.use(express.json());
app.use("/api/v1/tasks",taskRoute);
app.use("/api/v1/auth",authRoute);

connect(MONGO_DB_URL)
    .then(()=>{
        console.log("Connected with MongoDB");
    })

app.listen(PORT, 
    console.log(`Server started on Port: ${PORT}!!`)
);

