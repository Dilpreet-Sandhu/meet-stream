import mongoose from "mongoose";

export default async function dbConnect(): Promise<void> {
  try {
    if (mongoose.connection && mongoose.connections[0].readyState) return;

    await mongoose
      .connect(`${process.env.MONGO_URI as string}`)
      .then(() => {
        console.log("mongo database conencted");
      })
      .catch((err) =>
        console.log("error while connecting to the database " + err)
      );
  } catch (error) {
    console.log("error while connecting to the mongo server ", error);
  }
}
