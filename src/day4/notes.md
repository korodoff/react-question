1.What are React Life cycles Explain each one with Example

In ReactJS, every component creation process involves various lifecycle methods. These lifecycle methods are termed as component's lifecycle. These lifecycle methods are not very complicated and called at various points during a component's life. The lifecycle of the component is divided into four phases. They are: Initial Phase Mounting Phase Updating Phase Unmounting Phase Each phase contains some lifecycle methods that are specific to the particular phase.

Initial Phase It is the birth phase of the lifecycle of a ReactJS component. Here, the component starts its journey on a way to the DOM. In this phase, a component contains the default Props and initial State. These default properties are done in the constructor of a component. The initial phase only occurs once and consists of the following methods. getDefaultProps() It is used to specify the default value of this.props. It is invoked before the creation of the component or any props from the parent is passed into it. getInitialState() It is used to specify the default value of this.state. It is invoked before the creation of the component.

Mounting Phase In this phase, the instance of a component is created and inserted into the DOM. It consists of the following methods. componentWillMount() This is invoked immediately before a component gets rendered into the DOM. In the case, when you call setState() inside this method, the component will not re-render. componentDidMount() This is invoked immediately after a component gets rendered and placed on the DOM. Now, you can do any DOM querying operations. render() This method is defined in each and every component. It is responsible for returning a single root HTML node element. If you don't want to render anything, you can return a null or false value.

Updating Phase It is the next phase of the lifecycle of a react component. Here, we get new Props and change State. This phase also allows to handle user interaction and provide communication with the components hierarchy. The main aim of this phase is to ensure that the component is displaying the latest version of itself. Unlike the Birth or Death phase, this phase repeats again and again. This phase consists of the following methods. componentWillRecieveProps() It is invoked when a component receives new props. If you want to update the state in response to prop changes, you should compare this.props and nextProps to perform state transition by using this.setState() method. shouldComponentUpdate() It is invoked when a component decides any changes/updation to the DOM. It allows you to control the component's behavior of updating itself. If this method returns true, the component will update. Otherwise, the component will skip the updating. componentWillUpdate() It is invoked just before the component updating occurs. Here, you can't change the component state by invoking this.setState() method. It will not be called, if shouldComponentUpdate() returns false. render() It is invoked to examine this.props and this.state and return one of the following types: React elements, Arrays and fragments, Booleans or null, String and Number. If shouldComponentUpdate() returns false, the code inside render() will be invoked again to ensure that the component displays itself properly. componentDidUpdate() It is invoked immediately after the component updating occurs. In this method, you can put any code inside this which you want to execute once the updating occurs. This method is not invoked for the initial render.

Unmounting Phase It is the final phase of the react component lifecycle. It is called when a component instance is destroyed and unmounted from the DOM. This phase contains only one method and is given below. componentWillUnmount() This method is invoked immediately before a component is destroyed and unmounted permanently. It performs any necessary cleanup related task such as invalidating timers, event listener, canceling network requests, or cleaning up DOM elements. If a component instance is unmounted, you cannot mount it again.

What is UseMemo Hook ?(Implementation)

The useMemo is a hook used in the functional component of react that returns a memoized value. In Computer Science, memoization is a concept used in general when we don’t need to recompute the function with a given argument for the next time as it returns the cached result. A memoized function remembers the results of output for a given set of inputs. ex:- 1+2=3 ,whn we enter same input again it give catched value without doing the addition The useMemo hook is used to improve performance in our React application. What is UseRef Hook ?(Implementation)

The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. What is Context api

Context API is a React API that can solve a lot of problems that modern applications face related to state management and how they’re passing state to their components.

The Context API provides a way to pass data through the component tree without having to pass props down manually at every level. The syntax is really easy to understand and also, there is not much boilerplate code to write to get it set up.

createContext To start with the Context API, the first thing we need to do is create a context using the createContext function from React. const NotesContext = createContext([]);

Provider The Provider component is going to be used to wrap the components that are going to have access to our context. <NotesContext.Provider value={this.state.notes}> ... </Notes.Provider> The Provider component receives a prop called value, which can be accessed from all the components that are wrapped inside Provider, and it will be responsible to grant access to the context data

Consumer After you wrap all the components that are going to need access to the context with the Provider component, you need to tell which component is going to consume that data. <NotesContext.Consumer> {values =>

{value } </Notes.Consumer> Difference between callback and useCallback Hook ?

callback is a function, usually given as an argument, that you execute before returning from your function.

This is usually used in asynchoronous situations when you need to wait for I/O

The callback function may be some code that hasn't been executed yet, and you don't know what's above your function in the call stack

The useCallback hook is used when you have a component in which the child is rerendering again and again without need.

Pass an inline callback and an array of dependencies. useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed.

prevent unnecessary renders.

const memoizedCallback = useCallback( () => { doSomething(a, b); }, [a, b], );

What is Props Drilling Concept ?What is State Uplifting ?

Props:-Components in React can be passed some parameters. These parameters are generally named props. Prop drilling is basically a situation when the same data is being sent at almost every level due to requirements in the final level. The problem with Prop Drilling is that whenever data from the Parent component will be needed, it would have to come from each level, Regardless of the fact that it is not needed there and simply needed in last. A better alternative to this is using useContext hook. The useContext hook is based on Context API and works on the mechanism of Provider and Consumer. Provider needs to wrap components inside Provider Components in which data have to be consumed. Then in those components, using the useContext hook that data needs to be consumed.

Lifting up the State

every component in React has its own state. Because of this sometimes data can be redundant and inconsistent. So, by Lifting up the state we make the state of the parent component as a single source of truth and pass the data of the parent in its children. Difference between useEffect and useContext ?

React Hooks allow us to manage state data inside functional components; now we don’t need to create class components just to manage state data. React has a few built-in hooks such as useState, useCallback, useEffect, etc. The useContext hook allows us to connect and consume a context. The useContext hook receives a single argument, which is the context that you want to have access to. const notes = useContext(NotesContext); useContext: useContext is a hook that provides a way to pass data through the component tree without manually passing props down through each nested component. useEffect: A hook that helps us to perform mutations, subscriptions, timers, logging, and other side effects after all the components has been rendered. The useEffect accepts a function that is imperative in nature and a list of dependencies. When its dependencies change it executes the passed function. Now if we don’t use useEffect, every time a button is pressed data will be fetched from the server even if the choice does not change. In such a condition this hook helps us to not call the fetching logic unless our choice changes.
