import mongoose from "mongoose";
const reviewSchema= new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User',
    },
   rating:{
        type:String,
        required:true,
        default:0,
    },
    comment:{
        type:String,
        required:true,
    },
},{timestamps:true})

const cropSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User',
    },
    name:{
        type:String,
        required:true,
    },
    fertilizers:{
        type:Array,
        required:true,
    },
    season:{
        type:String,
    },
    description:{
        type:String,
        required:true,
    },
    durationPeriod:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        required:true,
    },
    durationInMonths:{
        type:Number,
        required:true,
    },
    pests:{
        type:Array,
        required:true,
    },
    reviews:[reviewSchema],
    avgProfit:{
        type:Number,
        required:true,
        default:0,
    },
    
   
}, {timestamps:true});
const Crop =  mongoose.model('Crop',cropSchema);
export default Crop;