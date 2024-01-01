const { MongoClient } = require('mongodb');

async function connectToMongoDB() {
    const uri = 'mongodb+srv://vuhaclab:220291@vhlab.3uqaajy.mongodb.net/';
    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log('Connected to MongoDB');

        // Perform database operations here

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    } finally {
        // Close the connection when done
        await client.close();
        console.log('Disconnected from MongoDB');
    }
}

connectToMongoDB();
