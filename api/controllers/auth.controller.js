import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import { errorHandler } from "../utils/error.js";

export const signup=async (req,res,next) => {
    const {username,email,password}=req.body;
    try {
        // Check if user already exists by username or email
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            if (existingUser.username === username) {
                return res.status(409).json({ success: false, message: 'Username is already taken' });
            }
            if (existingUser.email === email) {
                return res.status(409).json({ success: false, message: 'Email is already registered' });
            }
        }

        // If no existing user, create new user
        const hashedPassword = bcrypt.hashSync(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ success: true, message: 'User created successfully!' });
    } catch (error) {
        // Handle other potential errors (e.g., database connection issues)
        res.status(500).json({ success: false, message: error.message });
    }
};