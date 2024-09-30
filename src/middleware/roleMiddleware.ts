import { NextRequest, NextResponse } from "next/server";

export default function roleMiddleware(
  req: NextRequest,
  require: string[] = []
) {
  const pathName = req.nextUrl.pathname;
  if (require.includes(pathName)) {
    return NextResponse.redirect(new URL("/authentikasi/login", req.url));
  }

  return null;
}
