import { renderToString } from "react-dom/server";
import App from "./App.jsx";

export function prerender() {
  // React's server renderer can leave a referenced MessagePort in the build process.
  globalThis.setImmediate(() => {
    for (const handle of globalThis.process._getActiveHandles()) {
      if (handle.constructor.name === "MessagePort") {
        handle.unref();
      }
    }
  });

  return {
    html: renderToString(<App />),
  };
}
