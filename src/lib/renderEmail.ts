import { ReactElement } from "react";
import ReactDOMServer from "react-dom/server";

/**
 * Render any React email component to static HTML markup.
 * @param component - The JSX element to render (e.g., <WelcomeEmail {...props} />)
 */
export function renderEmail(component: ReactElement): string {
  return ReactDOMServer.renderToStaticMarkup(component);
}
