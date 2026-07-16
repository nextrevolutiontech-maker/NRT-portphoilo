import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const url = request.nextUrl;
  
  // Example: Normalize trailing slashes or redirect legacy URLs
  // This helps prevent duplicate content issues in SEO
  if (url.pathname !== '/' && url.pathname.endsWith('/')) {
    const newUrl = url.clone();
    newUrl.pathname = url.pathname.slice(0, -1);
    return NextResponse.redirect(newUrl, 308); // 308 Permanent Redirect for SEO
  }

  // Future-ready: Add i18n locale routing here if targeting global audiences

  const response = NextResponse.next();
  return response;
}

// Only run middleware on relevant paths (exclude static files, images, etc.)
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
