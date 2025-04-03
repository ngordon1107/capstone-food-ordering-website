import { Request, Response } from "express";
import User from "../models/user";

const createCurrentUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        //checking if user exists
        const { auth0Id } = req.body;
        const existingUser = await User.findOne({ auth0Id });

        if (existingUser) {
            return res.status(200).send();
        }

        //if user doesn't exist, create new user
        const newUser = new User(req.body);
        await newUser.save();
        
        //returning user object to the calling client
        return res.status(201).json(newUser.toObject());

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error creating user" });
        }
    };

export default {
    createCurrentUser,
};