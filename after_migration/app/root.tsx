import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "react-router";

import Header from "./components/ktl-component/header";
import Footer from "./components/ktl-component/footer";

import type { Route } from "./+types/root";
import "./styles/global.scss";
import "./styles/base.scss";
import "./styles/grid.scss";
import { ThemeProvider } from "@rescui/ui-contexts";

export async function loader() {
  return {
    restyled: "v2",
    headerDropdownTheme: "dark",
    ogImage: "/assets/images/open-graph/general.png",
  };
}

export const meta: Route.MetaFunction = () => [
  { title: "Kotlin Programming Language" },
  { name: "description", content: "Kotlin website" },
];

export const links: Route.LinksFunction = () => [
  { rel: "icon", href: "assets/images/favicon.ico", type: "image/x-icon" },
  { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const data = useLoaderData() as { restyled?: string } | undefined;

  const htmlClass = data?.restyled
    ? `page_restyled_${data.restyled}`
    : "page-old-styled";

  const viewportWidth = data?.restyled === "v2" ? "device-width" : "1000";

  return (
    <html lang="en" className={htmlClass}>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content={`width=${viewportWidth}, initial-scale=1`}
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />

        <Meta />
        <Links />
      </head>
      <body className="page_js_yes">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5P98"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const data = useLoaderData() as { headerDropdownTheme?: string } | undefined;

  return (
    <div className="global-layout">
      <Header
        productWebUrl="https://github.com/JetBrains/kotlin/releases/tag/v1.6.20"
        dropdownTheme={data?.headerDropdownTheme || "dark"}
        hasSearch={false}
      />

      <main className="g-layout global-content">
        <Outlet />
      </main>
      <ThemeProvider theme="dark">
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
