import mongoose from "mongoose";

const SellCarSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  number: String,
  brand: String,
  model: String,
  numberPlate: String,
  Fuel: String,
  Gear: String,
  Price: String,
  img: String,
},
  { collection: "img_details" }
);

const SellCar = mongoose.model("img_details", SellCarSchema);
export default SellCar;
