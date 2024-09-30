import {
  NextRequest,
  NextResponse,
  NextFetchEvent,
  NextMiddleware,
} from "next/server";

export default function authMiddleware(
  middleware: NextMiddleware,
  requireAuth: string[] = [],
  restrictedIfLoggedIn: string[] = []
) {
  return (req: NextRequest, next: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname;
    const accessToken = req.cookies.get("access-token")?.value;
    const refreshToken = req.cookies.get("refresh-token")?.value;

    // Jika user sudah login dan mencoba akses halaman login, redirect ke halaman lain
    if (
      accessToken &&
      refreshToken &&
      restrictedIfLoggedIn.includes(pathname)
    ) {
      console.log("User sudah login, redirect ke halaman lain...");
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    // Cek jika route memerlukan autentikasi
    if (requireAuth.includes(pathname)) {
      console.log("AccessToken:", accessToken);
      console.log("RefreshToken:", refreshToken);

      // Jika tidak ada token, redirect ke halaman login
      if (!accessToken || !refreshToken) {
        console.log("Redirecting to login...");
        return NextResponse.redirect(new URL("/authentikasi/login", req.url));
      }
    }

    // Jika token ada atau route tidak memerlukan autentikasi, panggil middleware asli
    return middleware(req, next);
  };
}
