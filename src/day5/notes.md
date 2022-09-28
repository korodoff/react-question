Q1 High Order Component in react js ?

It is also known as HOC. In React, HOC is an advanced technique for reusing component logic. It is a function that takes a component and returns a new component.
A higher order component function accepts another function as an argument.

The map function is the best example to understand this. The main goal of this is to decompose the component logic into simpler and smaller functions that can be reused as you need.

Q2 Do you know about SEO ? Is it true that react js supports SEO support

SEO stands for Search Engine Optimisation. SEO is the term used for the practices involved in improving a website’s ranking, to increase chances of being visible through relevant organic searches.

Search Engine Optimisation is used to increase three separate factors of your website, they are as follows.

The Quality Of Traffic – This means ensuring the people who visit your website are genuinely interested in the products or service you offer. For example, if your prospective customer visits your website because they are looking for video games but you sell video creation tools you’re highly likely not to convert that visitor to a sale.

The Quantity Of Traffic – Once you’ve made sure that the right people are visiting your website and finding you through the SERPS ( Search Engine Page Results) you are able to focus on increasing the traffic to your website.



Organic Search Results – Organic Search Results can be defined as any traffic you receive from the SERPS that you didn’t have to pay directly for the advertising space for.

SEO is about answering your customers questions before they ask them, it’s about understanding the words they’re searching with and what type of content your ideal customer likes to consume. Knowing your audience’s intent allows you to connect with quality prospective customers online who are searching for a solution to their problem.

Q3 clean up in useEffect

React’s useEffect cleanup function saves applications from unwanted behaviors like memory leaks by cleaning up effects. In doing so, we can optimize our application’s performance.

Just like the name implies, the useEffect cleanup is a function in the useEffect Hook that allows us to tidy up our code before our component unmounts. When our code runs and reruns for every render, useEffect also cleans up after itself using the cleanup function.

The useEffect Hook is built in a way that we can return a function inside it and this return function is where the cleanup happens. The cleanup function prevents memory leaks and removes some unnecessary and unwanted behaviors.

Q4 What is the use of useCallback and useMemo

useCallback: The useCallback is a react hook that returns a memoized callback when passed a function and a list of dependencies as parameters. It’s very useful when a component is passing a callback to its child component to prevent the rendering of the child component. It only changes the callback when one of its dependencies gets changed.

useMemo: The useMemo is similar to useCallback hook as it accepts a function and a list of dependencies but it returns the memoized value returned by the passed function. It recalculated the value only when one of its dependencies change. It is useful to avoid expensive calculations on every render when the returned value is not going to change.

Q5Why do we need keys in react less
Simply put, they are props that are passed in child elements of a list in order to:

Identify which elements are added.
Identify which elements are updated.
Identify which elements are removed.

we needs keys because of diffing algotitnh

React app is made up of a tree of components. Whenever there’s a prop or state change in any component, React re-renders its components into its virtual DOM. The diffing algorithm compares the new virtual DOM with the old DOM at each level of the component tree, starting from the root node.

Q6 Do you know about redux

Redux is a lightweight state management tool for JavaScript applications, released in 2015 and created by Dan Abramov and Andrew Clark.

Main concepts of Redux
Naturally, using an external solution for state management means being familiar with a few rules in the development process. Redux introduces actions, action creators, reducers, and stores. Ultimately, these concepts are used to create a simple state management architecture.

Action
Action is static information about the event that initiates a state change. When you update your state with Redux, you always start with an action. Actions are in the form of Javascript objects, containing a type and an optional payload.

Action creators
These are simple functions that help you create actions. They are functions that return action objects, and then, the returned object is sent to various reducers in the application.

Reducer
A reducer is a pure function that takes care of inputting changes to its state by returning a new state. The reducer will take in the previous state and action as parameters and return the application state. As your app grows, your single reducer will be split off into smaller reducers that manage certain parts of the state tree.

Redux store
The Redux store is the application state stored as objects. Whenever the store is updated, it will update the React components subscribed to it. You will have to create stores with Redux. The store has the responsibility of storing, reading, and updating state.
