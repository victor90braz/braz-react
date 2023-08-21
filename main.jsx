import { createRoot } from "react-dom/client";

const domElement = document.querySelector("#app");
const root = createRoot(domElement);

root.render(<h1>hola</h1>);
