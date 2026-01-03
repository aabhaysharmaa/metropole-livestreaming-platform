import { clerkMiddleware as Proxy, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isPublicRoutes = createRouteMatcher(['/api/webhooks(.*)', "/"])
const isProtectedRoutes = createRouteMatcher(['/dashboard'])

export default Proxy(async (auth, req) => {
	if (isPublicRoutes(req)) {
		return NextResponse.next()
	}

	if (isProtectedRoutes(req)) {
		await auth.protect()
	}


})

export const config = {
	matcher: [
		// Skip Next.js internals and all static files, unless found in search params
		'/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
		// Always run for API routes
		'/(api|trpc)(.*)',
	],
}