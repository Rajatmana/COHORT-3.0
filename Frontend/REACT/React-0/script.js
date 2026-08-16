// console.log(React);

//React is the light weight copy of real DOM
let h1 = document.createElement("h1")//This is real DOM
h1.textContent = "hiii"
document.body.append(h1)
console.log(h1);

//This is the light weight copy of real dom(virtual dom)
let rh1 = React.createElement("h1",{className: "box"}, "Hello i'm from react")//Element name, attributes or props, children(text, inner html), children goes under props
// let rh2 = React.createElement("h1", null , React.createElement("span", null, "I am under h1"));
//React dom tell the real dom how to append the elements in body
//React DOM will give the entry of React elements in the Real DOM (in body)
let realDomEle = document.querySelector("#root");
let rootOfReact = ReactDOM.createRoot(realDomEle)
rootOfReact.render(rh1);
// rootOfReact.render(rh2)

// console.log(rh1);
// console.log(rh2);

