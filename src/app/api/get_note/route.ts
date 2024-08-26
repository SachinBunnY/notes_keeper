import { NextRequest, NextResponse } from "next/server";
import { connectMongoDB } from "@/libs/mongoConnect";
import Note from "@/libs/models/Note";

export async function POST(request:NextRequest) {
    try{
        let body = await request.json()
        const {email} = body;
        await connectMongoDB();

        const data = await Note.find({email})
        return NextResponse.json(data)

    }catch(error){
        return NextResponse.json({error,msg:"Something went wrong"},
            {status:400}
        )
    }
}
