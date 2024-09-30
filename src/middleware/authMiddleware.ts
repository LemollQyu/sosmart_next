import next from "next";
import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from "next/server";

export default function authMiddleware(
    middleware: NextMiddleware,
    requireAuth: string[] = []
) {
    return async (req: NextRequest, next: NextFetchEvent) => {
        const pathname = req.nextUrl.pathname;

        if (requireAuth.includes(pathname)) {
            const accessToken = req.cookies.get('acces-token')?.value;
            const refreshToken = req.cookies.get('refresh-token')?.value;

            if (accessToken && refreshToken) {
                return NextResponse.redirect(new URL('/', req.url));
            } else {
                return NextResponse.redirect(new URL('/authentikasi/login'));
            }
        }

        // Call the original middleware
        return middleware(req, next);
    };
}