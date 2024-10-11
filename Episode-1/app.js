// const root = document.getElementById("root");
// One way of creating markup and injecting it to html
//----------------------------------
// const markup = `
// <h1>Hello World</h1>
// `;
// root.insertAdjacentHTML("afterbegin", markup);

// Another way of creating markup
//---------------------------------
/*const heading = document.createElement("h1");
heading.innerText = "Hello World from Javascript";

root.appendChild(heading);
*/
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello from React!"
);

// creating nested html structure

const parent1 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I am the first h1 tag")
  )
);

const parent2 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am second h1 tag"),
    React.createElement("h2", {}, "I am second h2 tag"),
  ]),
]);

const container = React.createElement("div", { id: "container" }, [
  React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", {}, "I am h1 tag"),
      React.createElement("h2", {}, "I am h2 tag"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "I am second h1 tag"),
      React.createElement("h2", {}, "I am second h2 tag"),
    ]),
  ]),
  React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", {}, "I am h1 tag"),
      React.createElement("h2", {}, "I am h2 tag"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "I am second h1 tag"),
      React.createElement("h2", {}, "I am second h2 tag"),
    ]),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the content onto browser
/************************************* */
root.render(parent1);
// root.render(parent2);
// root.render(container);
