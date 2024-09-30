import { NextRequest, NextResponse } from "next/server";
import authMiddleware from "./middleware/authMiddleware";

// Middleware utama tanpa config
export function mainMiddleware(req: NextRequest) {
  // Logika middleware utama jika diperlukan

  //   contoh
  //   const role = roleMiddleware(req, ["/authentikasi/lupa-sandi"]);

  //   if (role) {
  //     return role;
  //   }

  return NextResponse.next();
}

// Gunakan authMiddleware di sini
export default authMiddleware(mainMiddleware, ["/"], ["/authentikasi/login"]);
