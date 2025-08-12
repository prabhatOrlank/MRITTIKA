import express from "express";
import {
    getAllUsers,
    getUserById,
    loginUser,
    registerUser,
    toggleUserActivation,
    updateProfile,
    updateUser
} from "../controllers/userController.js";
import { protect, authorize } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Logged-in users only
router.put('/profile/:userId', protect, updateProfile);

// Admin routes
router.put('/:userId', protect, authorize('admin'), updateUser);
router.get('/', protect, authorize('admin'), getAllUsers);
router.get('/:userId', protect, authorize('admin'), getUserById);
router.delete('/:userId', protect, authorize('admin'), toggleUserActivation);

export default router;
