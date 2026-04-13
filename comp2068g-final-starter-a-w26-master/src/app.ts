import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser'; // accept json body in POST / PUT requests
import mongoose from 'mongoose';  // mongodb access lib

const app: Application = express();

// configure app globally to parse http request bodies as json
app.use(bodyParser.json());

// db connection
const dbUri = process.env.DB!;

mongoose.connect(dbUri)
.then(() => { console.log('Connected to MongoDB') })
.catch((err: Error) => { console.log(`Connection Failed: ${err.message}`) });

app.listen(4000, () => { console.log('Server running on port 4000') });

//Question 1 Map All Requests with the path "v1/api/recipes" to your router. GET request to your controller method
app.use('/api/v1/recipes', recipeRoutes);
