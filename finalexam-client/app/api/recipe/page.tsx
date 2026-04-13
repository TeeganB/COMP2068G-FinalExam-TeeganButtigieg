//Question 4 Create an API Layer to connect to the recipe page and express API

//Question 5 Create an API call to fetch recipes and implements in the recipe page component. USE environment variables for both server and client url
import React, { useEffect, useState } from "react";
import { Recipes } from "../components/recipes";

export async function GET() {
  const res = await fetch(`${process.env.SERVER_URL}/api/v1/recipes/recipes`); // Fetch recipes from the server API
  return res.json(); // Return the response as JSON

  export async function POST(request: Request) {
    const { name, ingredients } = await request.json(); // Parse the request body to get recipe data
    const res = await fetch(
      `${process.env.SERVER_URL}/api/v1/recipes/recipes`,
      {
        method: "POST", // Set the HTTP method to POST
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, ingredients }), // Send the recipe data as JSON in the request body
      },
    );
    return res.json(); // Return the response as JSON
  }
}
