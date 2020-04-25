const connectDB = require('./connect-db')

const dbFunctions = {
    addNewTask: async task => {
        let db = await connectDB();
        let collection = db.collection(`tasks`);
        await collection.insertOne(task);
    },

    updateTask: async task => {
        let { id, group, isComplete, name } = task;
        let db = await connectDB();
        let collection = db.collection(`tasks`);
        if (group) {
            await collection.updateOne({ id }, { $set: { group } });
        }
        if (name) {
            await collection.updateOne({ id }, { $set: { name } });
        }
        if (isComplete !== undefined) {
            await collection.updateOne({ id }, { $set: { isComplete } });
        }
    }
}


module.exports = dbFunctions;