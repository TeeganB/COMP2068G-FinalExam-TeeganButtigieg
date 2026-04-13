//Question 6 Use the recipe page component to display recipe data from your API in an appropriate HTML table, showing all fields except _id.

import { get } from "http";
import { Recipes } from "../components/recipes";
import React, { useEffect, useState } from "react";

async function getRecipes(): Promise<Recipes[]> {
  const res = await fetch(`${process.env.SERVER_URL}/api/v1/recipes/recipes`);
  if (!res.ok) {
    throw new Error("Failed to fetch recipes");
    }

    const recipes: Recipes[] = await res.json();
    return recipes;
}

export default function RecipePage() {
    const recipes = await getRecipes();

    return (
        <main>
            <h1>Recipes</h1>

            <h3>{recipes.name}</h3>
            <p>{recipes.ingredients}</p>
        </main> )
}