const mongoose = require("mongoose");

const RecipeSchema = mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    createdAt: {
        type: String
    },
    thumbsUp: {
        type: Number
    },
    thumbsDown: {
        type: Number
    }
}, { timestamps: true });

const Recipe = mongoose.model("recipe", RecipeSchema);

module.exports = Recipe;
