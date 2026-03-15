import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        enum: ['jone', 'doe'],
        require: true, 
    },
}, {timestamps: true});


const Schema = mongoose.model("Schema", schema);

export default Schema