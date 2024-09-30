import { NextRequest, NextResponse } from "next/server";
import authMiddleware from "./middleware/AuthMiddleware";


export function middleware(req: NextRequest) {
    const res = NextResponse.next();
    return res;
}

export default authMiddleware(middleware, ['/dashboard'])

// export function middleware(request: NextRequest) {
//     if (request.nextUrl.pathname.startsWith('/about')) {
//       return NextResponse.redirect(new URL('/', request.url))
//     }
   
//     if (request.nextUrl.pathname.startsWith('/dashboard')) {
//       return NextResponse.rewrite(new URL('/dashboard/user', request.url))
//     }
//   }