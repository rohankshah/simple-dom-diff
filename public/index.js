import { renderNode } from "./helpers/render.js";
import { virtualDOM } from "./constants/vdom.js";

const root = document.getElementById("root")
const renderedDom = renderNode(virtualDOM)
root.appendChild(renderedDom)