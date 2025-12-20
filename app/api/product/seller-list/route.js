import connectDB from "@/config/db.js";
import authSeller from "@/lib/authSeller.js";
import Product from "@/models/Product.js";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


export async function GET(request) {
    try{

        const {userId}=getAuth(request)

        const isSeller=authSeller(userId)

        if(!isSeller){
            return NextResponse.json({success:false,message:'Not authorized'});
        }

        await connectDB();
        const products=await Product.find({})
        return NextResponse.json({success:true,products});
    }catch(error){
        return NextResponse.json({success:false,message:error.message});
    }
}