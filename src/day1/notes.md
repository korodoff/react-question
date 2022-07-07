1.What is Virtual DOM

- It is the representation of Document Object Model used in web frameworks such as react.

- Updating the virtual DOM is faster than updating the actual DOM.

- The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.

- When diffing two trees, React first compares the two root elements. The behavior is different depending on the types of the root elements.

- The changes which we make in component, these changes will be combined and create a new Virtual DOM.
Virtual DOM will be compared with the Real DOM. 
Then it will only replace where change has occurred.
This process increases the efficiency of the application.

- DOM is an interface that allows scripts to update the content, style, and structure of the document. Virtual DOM is a node tree similar to Real DOM that lists elements, content, and attributes as objects and properties.

------------------------------------------------------------------------------------------------------------------------------------------
2.What is SPA

- Single-page Application

- A Single Page Application (SPA) is an application that allows you to work inside a browser and does not require reloading the page when a person is using it.

- SPAs are reactive web applications that give a native look and feel without page loads.

- A single-page application is an application that loads a single HTML page and all the necessary assets (such as JavaScript and CSS) required for the application to run. 

- It only re-render the content without refreshing the website.

- Single page applications (SPAs) are becoming more and more popular. Facebook, YouTube, Twitter, GitHub, and numerous Google's services are all built using the SPA tech.

- MPA-Multi-page applications,  request rendering each time for a new page from the server in the browser. They’re perfect for applications larger than SPAs, and due to the amount of content, they have different levels of UI. They are often known as the “traditional” way of app development

- SPA is faster than MPA but security level is low

- MPA secures each page to its core,therefore it takes more time and effort to maintain the security,hence page loading time is more.

------------------------------------------------------------------------------------------------------------------------------------------

3.What is difference between class and functional component

-----  Functional Components :-

* Functional Components can be used mostly when you want to create dumb or stateless components

* A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX).

* There is no render method used in functional components.

* Functional component run from top to bottom and once the function is returned it cant be kept alive.

* Also known as Stateless components as they simply accept data and display them in some form, that they are mainly responsible for rendering UI.

* React lifecycle methods (for example, componentDidMount) cannot be used in functional components.

* Hooks can be easily used in functional components to make them Stateful.

example: const [name,SetName]= React.useState(‘ ‘)

* Constructors are not used.

* function  Home ()
{
          return ( <div> Home </div> )
}

* Const Home = () =>
{
 return ( <div> Home </div> )
}

----- Class Components

* Class components can be used when you are doing data operations and server calls.

* A class component requires you to extend from React. Component and create a render function which returns a React element.

* It must have the render() method returning JSX (which is syntactically similar to HTML)

* Class component is instantiated and different life cycle method is kept alive and being run and invoked depending on phase of class component.

* Also known as Stateful components because they implement logic and state.

* React lifecycle methods can be used inside class components (for example, componentDidMount).

* It requires different syntax inside a class component to implement hooks.

example: constructor(props) {

   super(props);

   this.state = {name: ‘ ‘}

}

* Constructor are used as it needs to store state. 

------------------------------------------------------------------------------------------------------------------------------------------

4.What does mean by state and its use in react?

- React components has a built-in state object.

The state object is where you store property values that belongs to the component.

When the state object changes, the component re-renders.

- React components has a built-in state object. The state object is where you store property values that belongs to the component. When the state object changes, the component re-renders.

- Props are used to pass data, whereas state is for managing data. Data from props is read-only, and cannot be modified by a component that is receiving it from outside. State data can be modified by its own component, but is private (cannot be accessed from outside)

- State is a JavaScript object that stores a component's dynamic data and determines the component's behaviour. Because state is dynamic, it enables a component to keep track of changing information in between renders and for it to be dynamic and interactive. State can only be used within a class component.

- Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.

- In Functional component we use useState Hook.

------------------------------------------------------------------------------------------------------------------------------------------

5.What is JSX and why do we use it instead of js?

- JSX stands for JavaScript XML.

- JSX allows us to write HTML in React.

- JSX makes it easier to write and add HTML in React.

- JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.

- JSX will throw an error if the HTML is not correct, or if the HTML misses a parent element.

- Use attribute className instead of class.

- It is simply a syntax extension of JavaScript. It allows us to directly write HTML in React (within JavaScript code). It is easy to create a template using JSX in React, but it is not a simple template language instead it comes with the full power of JavaScript.

- It is faster than normal JavaScript as it performs optimizations while translating to regular JavaScript. 

- JSX is not mandatory to use there are other ways to achieve the same thing but using JSX makes it easier to develop react application.
JSX allows writing expression in { }. The expression can be any JS expression or React variable.

- To insert a large block of HTML we have to write it in a parenthesis i.e, ().

- JSX produces react elements.
JSX follows XML rule.

- After compilation, JSX expressions become regular JavaScript function calls.

------------------------------------------------------------------------------------------------------------------------------------------


6.What is package.json

- The package.json file is the heart of Node.js system. It is the manifest file of any Node.js project and contains the metadata of the project. and there dependencies.

- The package.json file is the essential part to understand, learn and work with the Node.js. It is the first step to learn about development in Node.js.

- 1. Identifying metadata properties: It basically consist of the properties to identify the module/project such as the name of the project, current version of the module, license, author of the project, description about the project etc. 

2. Functional metadata properties: As the name suggests, it consists of the functional values/properties of the project/module such as the entry/starting point of the module, dependencies in project, scripts being used, repository links of Node project etc. 

Creating a package.json file: 
A package.json file can be created in two ways: 
1. Using npm init : Running this command, system expects user to fill the vital information required as discussed above. It provides users with default values which are editable by the user. 
2. Writing directly to file : One can directly write into file with all the required information and can include it in the Node project. 

{
  "name": "GeeksForGeeks",
  "version": "1.0.0",
  "description": "GeeksForGeeks",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node start.js",
  },
  "engines": {
    "node": ">=7.6.0",
    "npm": ">=4.1.2"
  },
  "author": "GeeksForGeeks",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.17.1",
    "express": "^4.15.2",
    "express-validator": "^3.1.2",
    "mongoose": "^4.8.7",
    "nodemon": "^1.14.12",
  },
  "devDependencies": {},
  "repository": {
    "type": "git",
    "url": "https://github.com/gfg/gfg.git" //sample git repo url
  },
  "bugs": {
    "url": "https://github.com/gfg/gfg/issues"
  },
  "homepage": "https://github.com/gfg/gfg#readme"
}

Explanation: 

name: The name of the application/project. 

version: The version of application. The version should follow semantic versioning rules. 

description: The description about the application, purpose of the application, technology used like React, MongoDB, etc. 

main: This is the entry/starting point of the app. It specifies the main file of the application that triggers when the application starts. Application can be started using npm start. 

scripts: The scripts which needs to be included in the application to run properly. 

engines: The versions of the node and npm used. These versions are specified in case the application is deployed on cloud like heroku or google-cloud. 

keywords: It specifies the array of strings that characterizes the application. 

author: It consist of the information about the author like name, email and other author related information. 

license: The license to which the application confirms are mentioned in this key-value pair. 

dependencies: The third party package or modules installed using npm are specified in this segment. 

devDependencies: The dependencies that are used only in the development part of the application are specified in this segment. These dependencies do not get rolled out when the application is in production stage. 

repository: It contain the information about the type and url of the repository where the code of the application lives is mentioned here in this segment. 

bugs: The url and email where the bugs in the application should be reported are mentioned in this segment. 


------------------------------------------------------------------------------------------------------------------------------------------

