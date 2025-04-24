import mongoose from "mongoose";


const fertilizerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    type:{
        type:Array,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    indication:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        required:true,
    },
    usage:{
        type:Number,
        required:true,
    },
    price:{
        type:Number,
        required:true,
        default:0,
    },
    
   
}, {timestamps:true});
const Fertilizer =  mongoose.model('Fertilizer',fertilizerSchema);
export default Fertilizer;