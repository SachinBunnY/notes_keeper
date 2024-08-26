import { NextRequest, NextResponse } from "next/server";
import { connectMongoDB } from "@/libs/mongoConnect";
import Note from "@/libs/models/Note";

export async function PUT(request:NextRequest, URLparams:any) {
    try{
        let body = await request.json()
        const {note} = body;
        const id = URLparams?.params?.id;
        await connectMongoDB();

        const data = await Note.findByIdAndUpdate(id,{ note })
        return NextResponse.json({msg:"Note updated successfully.", data})

    }catch(error){
        return NextResponse.json({error,msg:"Something went wrong"},
            {status:400}
        )
    }
}
