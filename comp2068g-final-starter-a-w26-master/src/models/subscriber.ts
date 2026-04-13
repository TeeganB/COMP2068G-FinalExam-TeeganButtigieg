//Question 7 - Add Packages needed for authentification to configure. 
//Make Model Name subscriber with the properties of username and password.

import mongoose, { Schema, Document, model } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const subscriberSchema: Schema = new Schema({
    username: { 
        type: String,
        required: [true, 'Username is required'],
        trim: true,
        minLength: 6
    },
    password: {  
        type: String,
        trim: true
    }


});

subscriberSchema.plugin(passportLocalMongoose);

export const Subscriber = mongoose.model('Subscriber', subscriberSchema) as any;


