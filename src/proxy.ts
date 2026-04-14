export { auth as proxy } from "@/auth";

export const config = {
  matcher: ["/dashboard/:path*", "/api/assessments/:path*", "/api/claims/:path*"],
};
