import mongoose from "mongoose";

try {
  mongoose.connect(process.env.URI);
  console.log("conectado a MongodB");
} catch (error) {
  console.log(error);
}
