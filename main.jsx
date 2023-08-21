import { createRoot } from "react-dom/client";
import App from "./src/App";

const domElement = document.querySelector("#app");
const root = createRoot(domElement);

root.render(<App />);
