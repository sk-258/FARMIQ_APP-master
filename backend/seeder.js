import dotenv from "dotenv";
import users from "./data/UserData.js";
import connectDB from "./config/db.js";
import CropData from "./data/CropData.js";
import FertilizersData from "./data/FertilizersData.js";
import PestsData from "./data/PestSpraysData.js";
import User from "./MODELS/userModel.js";
import Crop from "./MODELS/cropModel.js";
import Fertilizer from "./MODELS/fertilizerModel.js";
import Pest from "./MODELS/pestModel.js";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Crop.deleteMany();
    await Fertilizer.deleteMany();
    await Pest.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;
    const sampleProducts = CropData.map((s) => {
      return { ...s, user: adminUser };
    });
    await Fertilizer.insertMany(FertilizersData);
    console.log("inserted Fertilizers");
    await Pest.insertMany(PestsData);
    console.log("inserted Pests");
    await Crop.insertMany(sampleProducts);
    console.log("inserted Crops");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
