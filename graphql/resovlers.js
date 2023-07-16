const Recipe = require("../Model/Recipe");

module.exports = {
    Query: {
        async recipe(_, { ID }) {
            return await Recipe.findById(ID)
        },

        async getRecipes(_, { amount }) {
            return await Recipe.find().sort({ createdAt: -1 }).limit(amount);
        }
    },
    Mutation: {
        async createRecipe(_, { input: { name, description } }) {
            const newRecipe = new Recipe({
                name,
                description,
                createdAt: new Date().toISOString(),
                thumbsUp: 0,
                thumbsDown: 0
            });

            const res = await newRecipe.save();
            return {
                id: res.id,
                ...res._doc
            }
        },
        async deleteRecipe(_, { ID }) {
            const flag = (await Recipe.deleteOne({ _id: ID })).deletedCount;
            return flag;
        },
        async editRecipe(_, { ID, input: { name, description } }) {
            const flag = (await Recipe.updateOne({ _id: ID }, { name: name, description: description })).modifiedCount;
            return flag;
        }
    }
}