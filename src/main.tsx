import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootElement =
	document.getElementById("root") ??
	(() => {
		const el = document.createElement("div");
		el.id = "root";
		document.body.appendChild(el);
		return el;
	})();

createRoot(rootElement).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
