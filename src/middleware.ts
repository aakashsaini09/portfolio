import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'
export {default} from 'next-auth/middleware'
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/home', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/sign-in',
    '/sign-up',
    '/',
    '/dashboard/:path*',
    '/verify/:path*'
],
}