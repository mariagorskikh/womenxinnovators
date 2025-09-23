import { MongoClient, Db } from 'mongodb';

// MongoDB connection string - in production, this should come from environment variables
const MONGODB_URI = 'mongodb+srv://mariagorskikh1:Y5UMW8uYqidFw1D7@twins.rzwxeaa.mongodb.net/?retryWrites=true&w=majority';
const MONGODB_DB = 'WomenXInnovators';

let client: MongoClient;
let db: Db;

export async function connectToDatabase() {
  if (db) {
    return { client, db };
  }

  try {
    client = new MongoClient(MONGODB_URI);
    await client.connect();
    db = client.db(MONGODB_DB);
    
    console.log('Connected to MongoDB');
    return { client, db };
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

export async function getCollection(collectionName: string) {
  const { db } = await connectToDatabase();
  return db.collection(collectionName);
}

