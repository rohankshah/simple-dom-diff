function renderNode(node) {
    const element = document.createElement(node.type)

    if (node.props) {
        for (const prop of Object.keys(node.props)) {
            element.setAttribute(prop, node.props[prop])
        }
    }

    if (node.children) {
        for (const child of node.children) {
            let childElement
            if (typeof child === "string") {
                childElement = document.createTextNode(child)
            } else {
                childElement = renderNode(child)
            }
            element.appendChild(childElement)
        }
    }
    return element
}
export { renderNode }