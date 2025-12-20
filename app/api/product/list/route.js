import connectDB from "@/config/db.js";
import authSeller from "@/lib/authSeller.js";
import Product from "@/models/Product.js";
import { NextResponse } from "next/server";


export async function GET(request) {
    try{
        await connectDB();
        const products=await Product.find({})
        return NextResponse.json({success:true,products});
    }catch(error){
        return NextResponse.json({success:false,message:error.message});
    }
}