import { NextRequest, NextResponse } from "next/server";
import { connectMongoDB } from "@/libs/mongoConnect";
import Note from "@/libs/models/Note";

export async function DELETE(request:NextRequest, URLparams:any) {
    try{
        const id = URLparams?.params?.id;
        await connectMongoDB();

        await Note.findByIdAndDelete(id)
        return NextResponse.json({msg:"Note deleted successfully."})

    }catch(error){
        return NextResponse.json({error,msg:"Something went wrong"},
            {status:400}
        )
    }
}
