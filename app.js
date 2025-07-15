import { renderNode } from "./dom.service";
import { virtualDOM } from "./domObjects";

document.addEventListener("DOMContentLoaded", (event) => {
    
   const root = document.getElementById("root")
   const renderedDom =  renderNode(virtualDOM)
   root.appendChild(renderedDom)

});