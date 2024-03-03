import { NextResponse } from "next/server";
import { cookies } from "next/headers";

////////////////// GET //////////////////////
export async function GET(req) {
    //console.log(req)

    /////// How to Get headers? ////////
    // const requestHeaders = new Headers(req.headers)
    // console.log(requestHeaders);

    //////// How to Get URL Query Parameters? ///////
    // const { searchParams } = new URL(req.url)
    // console.log(searchParams);

    //////// How to Get Cookies? ///////
    const cooks = req.cookies
    // console.log("Cookies:", cooks);
    const cooks2 = cookies()
    //console.log("Cookie2", cooks2)

    return NextResponse.json({"name": "Manish Kumar Singh"})
}



////////////////// POST //////////////////////
export async function POST(req){
    console.log(req);

    ////// Request Body 
    ////// 1st Method
    //const res = await req.json()
    //console.log("ResJSON", res)

    ////// 2nd Method
    const formData= await req.formData()
    console.log("Form Data:", formData);
    console.log("Form Data:", formData.get("title"));
    console.log("Form Data:", formData.get("body"));

    return NextResponse.json({"msg": "POST Success"})
}


