import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  defaultLocale: "hr",
  // A list of all locales that are supported
  localePrefix: "always",
  locales: ["hr", "en"],
  // Used when no locale matches
  pathnames: {
    // If all locales use the same pathname, a single
    // external path can be used for all locales.
    "/": "/",
  },
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(hr|en)/:path*"],
};
