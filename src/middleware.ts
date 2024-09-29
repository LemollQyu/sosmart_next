import { NextRequest, NextResponse } from "next/server";


export function middleware(req: NextRequest) {
    // console.log('request', req.nextUrl.pathname)

    // if(req.nextUrl.pathname.startsWith('/')){

    //     console.log("halaman home-page")

    //     return NextResponse.next();
    // }


    const cookie = req.cookies.get('bareer');

    console.log('cookie', cookie)


    return NextResponse.next();

    
    
}

export const config = {
    matcher: '/',
}