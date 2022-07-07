
**What exactly is Reactjs?

Reactjs is a JavaScript library that supports both front-end and server. Furthermore, it can be used to create user interfaces for mobile apps and websites.

**what Exactly is react Native

React Native is a cross-platform mobile framework that uses Reactjs for building apps and websites. React Native compiles to native app components enables the programmer to build mobile applications that can run on different platforms such as Windows, Android, iOS in JavaScript.

**What are the main differences between Reactjs and React Native?

1. Reactjs can be described as a base derivative of React DOM, for the web platform while React Native is a base derivative in itself, which means that the syntax and workflow remain the same, but components alter.

2.Reactjs, eventually, is a JavaScript library, which enables the programmer to create an engaging and high performing UI Layer while React Native is an entire framework for building cross-platform apps, be it web, iOS or Android. 

3. In Reactjs, virtual DOM is used to render browser code in Reactjs while in React Native, native APIs are used to render components in mobile.

4.The apps developed with Reactjs renders HTML in UI while React Native uses JSX for rendering UI, which is nothing but javascript. 

5. CSS is used for creating styling in Reactjs while a stylesheet is used for styling in React Native.

6. In Reactjs, the animation is possible, using CSS, just like web development while in React Native, an animated API is used for inducing 7. 

7.animation across different components of the React Native application.

8. If the need is to build a high performing, dynamic, and responsive UI for web interfaces, then Reactjs is the best option while if the need is to give mobile apps a truly native feeling, then React Native is the best option.

**What is the package name you are using for routing

the package Name use for routing in react is React-router-dom
having multiple component {BrowserRouter, Link, Route, Switch, }
 
The BrowserRouter component enables the client-side routing feature and handle the routing logic using the browser history API. The Route component renders the page UI when the route path matches the active URL. The Switch component only allows the first matched path to be rendered.

If you have a bunch of Route components that match the same URL, you’ll end up rendering all the routes, which is not expected. Only one route should be rendered for a URL.
Link similar to a tag use to link multiple pages

**How do you pass data from parent to child

we can do that by using Props

Props passing data are below

Passing data from parent to child using props
Passing data from child to parent employing callbacks
Passing data among siblings. This can be achieved by one of the following methods:

a. Integrating the methods mentioned above

b. Using Redux

c. Utilizing React's Context API.

**What is lazy loading in react ?

In essence, lazy loading means that a component or a part of code must get loaded when it is required. It is also referred to as code splitting and data fetching.
Lazy loading is the technique of rendering only-needed or critical user interface items first, then quietly unrolling the non-critical items later. It is now fully integrated into core react library itself. We formerly used react-loadable to achieve this but now we have react.lazy() in react core.

Firstly, bundling involves aligning our code components in progression and putting them in one javascript chunk that it passes to the browser; but as our application grows, we notice that bundle gets very cumbersome in size. This can quickly make using your application very hard and especially slow. With Code splitting, the bundle can be split to smaller chunks where the most important chunk can be loaded first and then every other secondary one lazily loaded.

Also, while building applications we know that as a best practise consideration should be made for users using mobile internet data and others with really slow internet connections. We the developers should always be able to control the user experience even during a suspense period when resources are being loaded to the DOM.

**Difference b/w Stateful and stateless Component

Stateful components are those components which have a state


Stateless components are those components which don’t have any state at all

A stateless component can render props, whereas a stateful component can render both props and state

Stateful components can use react life cycle hooks
Stateless components can not use the react life cycle hooks
In some component, the data keeps changing, for example, watching the cricket score etc.
In some component, the data remains the same, for example, showing the static data.

**How do you switch one component to another, Conditional Rendering

we can switch from one component to another by using like Link,Route from react-router-dom also we  can use condition Rendering

with conditional rendering there are multiple ways to swith component.

**Tenary Operator and Logical Operator
**Inline If-Else with Conditional Operator

Another method for conditionally rendering elements inline is to use the JavaScript conditional operator condition ? true : false.
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  );
}



**Inline If with Logical && Operator

You may embed expressions in JSX by wrapping them in curly braces. This includes the JavaScript logical && operator. It can be handy for conditionally including an element:

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<Mailbox unreadMessages={messages} />);


**Using an if…else Statement

An if…else statement will execute the actions contained in the if block when the condition is satisfied. Otherwise, it will execute the actions contained in the else block.



**Using a switch Statement

As shown previously, you can conditionally return different markup from a component based on set conditions using an if…else statement. The same could be achieved with a switch statement where you can specify the markup for various conditions.

**Using Element Variables

Element variables are similar to the approach to extract the conditional rendering into a function. Element variables are variables that hold JSX elements. You can conditionally assign elements or components to these variables outside the JSX and only render the variable within JSX.

**Using Immediately Invoked Function Expressions (IIFEs)

Earlier sections mentioned that JSX limitations make it unable to execute every type of JavaScript code. It is possible to bypass these limitations with Immediately Invoked Function Expressions (IFFEs). IFFEs is a JavaScript function that runs as soon as it is defined:
