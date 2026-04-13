//Question 1 Create a Controller Route In this Corresponsing Folder. 
//This controller needs to Read all method that fetches data from the database as json.
import { Request, Response } from 'express';
import Recipe from '../models/recipe';

// Controller method to fetch all recipes from the database
export const getAllRecipes = async (req: Request, res: Response): Promise<void> => {
    try {
        const recipes = await Recipe.find(); // Fetch all recipes from the database
        res.json(recipes); // Send the recipes as JSON response
    } catch (error) {
        console.error('Error fetching recipes:', error);
        res.status(500).json({ message: 'Server error while fetching recipes' }); // Send error response if something goes wrong
    }  
};