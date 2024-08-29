'use server'
import { connect } from "mongoose";

const MONGODB_URI  = `${process.env.MONGODB_URI}`;
if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env"
  );
}

let cached = (global as any).mongoose || { conn: null, promise: null };

export default async function dbConnect(): Promise<void> {
  try {
    if (cached.conn) return cached.conn;

    if (!MONGODB_URI) {
      throw new Error(
        "Please define the MONGODB_URI environment variable inside .env"
      );
    }
    
  
  if (!cached.promise) {
    

    cached.promise = connect(MONGODB_URI, {
    }).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
  } catch (error) {
    console.log("error while connecting to the mongo server ", error);
  }
}
