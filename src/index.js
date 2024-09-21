require('dotenv').config();
const express = require('express');
const cors = require('cors');
const pool = require('./config/db.config');
const app = express();

const userRouter = require('./routes/users');
const notesRouter = require('./routes/notes');
const reminderRouter = require('./routes/reminders');
const categoriesRouter = require('./routes/categories');

app.use(cors());
app.use(express.json());

app.use(userRouter);
app.use(notesRouter);
app.use(reminderRouter);
app.use(categoriesRouter);

const dbConnection = async () => {
    try {
        await pool.query('SELECT 1'); 
        console.log('Database connected');
    } catch (err) {
        console.error('Error connecting to DB:', err.message);
        console.error(err.code);
        process.exit(1);  
    }
};

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`);
    dbConnection();
});
