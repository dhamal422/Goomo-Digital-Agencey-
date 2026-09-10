import mongoose from 'mongoose';

let isConnected = false;

export async function connectDB(): Promise<boolean> {
  if (isConnected) {
    return true;
  }

  const mongoUri = process.env.MONGODB_URI || process.env.MONGO_URI;

  if (!mongoUri) {
    console.log('ℹ️ [DATABASE NOTE] MONGODB_URI not detected in environment. Running with hybrid In-Memory + Mongoose Schema simulation mode.');
    return false;
  }

  try {
    const conn = await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000,
    });

    isConnected = true;
    console.log(`✅ [MONGODB CONNECTED] Successfully connected to host: ${conn.connection.host}`);
    return true;
  } catch (error: any) {
    console.warn(`⚠️ [MONGODB CONNECTION WARNING] Could not connect to MongoDB URI (${error.message}). Falling back gracefully.`);
    return false;
  }
}

export function isMongoConnected(): boolean {
  return mongoose.connection.readyState === 1;
}
