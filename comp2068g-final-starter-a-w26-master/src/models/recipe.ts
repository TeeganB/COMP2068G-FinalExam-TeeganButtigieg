import mongoose, { Model, Schema } from 'mongoose';

interface IRecipe {
    name: string;
    type: string;
    ingredients: [string];
    instructions: string;
}

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    },
    instructions: {
        type: String,
        required: true
    }
});

// create Model def and make public
const Recipe = mongoose.model<IRecipe>('Recipe', recipeSchema);
export default Recipe;