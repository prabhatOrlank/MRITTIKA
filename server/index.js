import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import ConnectDB from './config/database.js';
import userRoutes from './routes/userRoute.js';
import categoryRoutes from './routes/categoryRoutes.js';

// Configure environment variables
dotenv.config();

const app = express();

// Set the port
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173',] || true,
    credentials: true
}));

// Connect to MongoDB
ConnectDB();


// routes
app.get('/', (req, res) => res.send('Admin server is running'));

app.use('/api/users', userRoutes);
app.use('/api/categories', categoryRoutes);


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});