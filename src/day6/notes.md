Q1 What is memory leak and how to overcome?

Memory leak occurs when programmers create a memory in heap and forget to delete it.

The consequences of memory leak is that it reduces the performance of the computer by reducing the amount of available memory.

Fixes for Memory Leaks
There are a few ways to eliminate memory leaks. Some of them are as follows.

1.  Using Boolean Flag
    const [value, setValue] = useState('checking value...');
    useEffect(() => {
    let isMounted = true;
    fetchValue().then(() => {
    if(isMounted ){
    setValue("done!"); // no more error
    }
    });
    return () => {
    isMounted = false;
    };
    }, []);
    In the above code, I've created a boolean variable isMounted, whose initial value is true. When isMounted is true, the state is updated and function is returned. Else if the action is unmounted before completion, then function is returned with isMounted as false. This ensures that when a new effect is to be executed, the previous effect will be first taken care of.

2.  Using AbortController
    useEffect(() => {  
     let abortController = new AbortController();  
     // your async action is here  
     return () => {  
     abortController.abort();  
     }  
     }, []);
    In the above code, I've used AbortController to unsubscribe the effect. When the async action is completed, then I abort the controller and unsubscribe the effect.

3.  Using use-state-if-mounted Hook
    const [value, setValue] = useStateIfMounted('checking value...');
    useEffect(() => {
    fetchValue().then(() => {
    setValue("done!"); // no more error
    });
    }, []);

        Q3 Explain reducer as pure function in redux

        In Redux, a reducer is a pure function that takes an action and the previous state of the application and returns the new state. The action describes what happened and it is the reducer's job to return the new state based on that action.

        The reducer takes two parameters: state and action. You need to have an initial value so that when Redux calls the reducer for the first time with undefined, it will return the initialState. Then the function uses a switch statement to determine which type of action it's dealing with. If there is an unknown action, then it should return the state, so that the application doesn't lose its current state.

Redux simply checks whether the old object is the same as the new object by comparing the memory locations of the two objects. So if you mutate the old object’s property inside a reducer, the “new state” and the “old state” will both point to the same object. Hence Redux thinks nothing has changed! So this won’t work.So, it is necessary for a reducer to be a pure function in Redux

Q4Why do we use redux thunk?

Redux Thunk is middleware that allows you to return functions, rather than just actions, within Redux. This allows for delayed actions, including working with promises.

One of the main use cases for this middleware is for handling actions that might not be synchronous, for example, using axios to send a GET request. Redux Thunk allows us to dispatch those actions asynchronously and resolve each promise that gets returned.

Q5 what is NPM?

npm is the world's largest software registry.

NPM – or "Node Package Manager" – is the default package manager for JavaScript's runtime Node.js.

It's also known as "Ninja Pumpkin Mutants", "Nonprofit Pizza Makers", and a host of other random names that you can explore and probably contribute to over at npm-expansions.

NPM consists of two main parts:

a CLI (command-line interface) tool for publishing and downloading packages, and
an online repository that hosts JavaScript packages

Use npm to . . .
Adapt packages of code for your apps, or incorporate packages as they are.
Download standalone tools you can use right away.
Run packages without downloading using npx.
Share code with any npm user, anywhere.
Restrict code to specific developers.
Create organizations to coordinate package maintenance, coding, and developers.
Form virtual teams by using organizations.
Manage multiple versions of code and code dependencies.
Update applications easily when underlying code is updated.
Discover multiple ways to solve the same puzzle.
Find other developers who are working on similar problems and projects.
