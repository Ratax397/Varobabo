import connectDB from "@/config/db.js";
import authSeller from "@/lib/authSeller.js";
import Address from "@/models/Address.js";
import Order from "@/models/Order.js";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";




export async function GET(request) {
    try {
        
        const {userId}=getAuth(request)

        const isSeller=await authSeller(userId)

        if(!isSeller){
            return NextResponse.json({success:false,message:'Not authorized'})
        }

        await connectDB()
        const orders=await Order.find({}).populate('address items.product')

        return NextResponse.json({success:true,orders})

    } catch (error) {
        return NextResponse.json({success:false,message:error.message})
    }
}