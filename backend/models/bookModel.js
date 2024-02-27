import mongoose from "mongoose";

const bookSchema=mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
        },
        author:{
            type:String,
            required:true,
        },
        publishYear:{
            type:Number,
            required:true,
        },
        notes:{
            type:String,
            required:false
        },
        rating:{
            type:Number,
            required:false
        }

    },
    {
        timestamps:true,
    }
)
export const Book=mongoose.model('Book',bookSchema);