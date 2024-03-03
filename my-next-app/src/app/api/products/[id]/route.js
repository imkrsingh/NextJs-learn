///////// Dynamic API Route //////////
import { NextResponse } from "next/server";

export const GET = async (req, context) => {
    // console.log("Req:", req);

    ////// How to get context
    console.log("Context:", context);
    console.log("Context_Params:", context.params);
    console.log("Context_Params_id:", context.params.id);

    return NextResponse.json({"msg": "Success"}, {status:200})
}