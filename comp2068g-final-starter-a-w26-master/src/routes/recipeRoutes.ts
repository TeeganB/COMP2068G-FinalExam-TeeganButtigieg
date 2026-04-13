//Question 1 Create Controller and Route files in the coresponding folders.
//This controller needs to Read all method that fetches data from the database as json.
import { Router } from 'express';
import { getAllRecipes } from '../controllers/recipeControllers';

const router: Router = Router();

// Route to get all recipes
router.get('/recipes', getAllRecipes);
export default router;

