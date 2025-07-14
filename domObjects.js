const virtualDOM = {
  type: "div",
  props: { className: "container" },
  children: [
    { type: "h1", props: {}, children: ["Hello World"] },
    { type: "div", props: {}, children: [
        {type: "p", props: {}, children: ["This is a simple implementation of Virtual DOM"]},
        {type: "p", props: {}, children: ["and DOM Diffing (is that a word?)"]}
    ] }
  ]
};

const updatedVirtualDom = {
  type: "div",
  props: { className: "container" },
  children: [
    { type: "header", props: {}, children: [
        { type: "h2", props: {}, children: ["Welcome to Virtual DOM"] },
        { type: "p", props: {}, children: ["A lightweight DOM representation."] }
    ] },
    { type: "div", props: { className: "content" }, children: [
        { type: "p", props: {}, children: ["This example showcases nested structures."] },
        { type: "ul", props: {}, children: [
            { type: "li", props: {}, children: ["Fast rendering"] },
            { type: "li", props: {}, children: ["Efficient updates"] },
            { type: "li", props: {}, children: ["Easier testing"] }
        ] }
    ] },
    { type: "footer", props: {}, children: [
        { type: "small", props: {}, children: ["Rendered using Virtual DOM v1.1"] }
    ] }
  ]
};

export {virtualDOM, updatedVirtualDom}