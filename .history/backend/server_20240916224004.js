const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const jobSheetRoutes = require('./routes/jobSheetRoutes');
const { errorHandler } = require('./middleware/errorMiddleware');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/jobsheets', jobSheetRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
