import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

const ROOT = "/";
const REDIRECT_ROUTE = ["/my-page"];
const DEFAULT_REDIRECT = "/sign-in";

export default async function middleware(req: NextRequest) {
  const { nextUrl } = req;
  const token = await getToken({ req });

  const isAuthenticated = !!token;
  const isPublicRoute = REDIRECT_ROUTE.includes(nextUrl.pathname);

  // 로그인시 auth/login으로 넘어가지 않게 하기
  if (isAuthenticated && !isPublicRoute)
    return Response.redirect(new URL(ROOT, req.url));

  if (!isAuthenticated && isPublicRoute)
    return Response.redirect(new URL(DEFAULT_REDIRECT, req.url));
}

export const config = {
  matcher: ["/my-page"],
};
