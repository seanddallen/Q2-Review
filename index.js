Key = {
    Padawin: "ESSENTIAL KNOWLEDGE - Q1 Basics",
    Apprentice: "BENEFICIAL KNOWLEDGE - Q1 Intermediate",
    Jedi: "I BOW TO YOU - Q1 Advanced"
}


/////////////////////////////////////////////////////////////////////////
// Q2 - PADAWIN (MUST KNOW!!!)
/////////////////////////////////////////////////////////////////////////

//Q: Why use React? What are the benefits?
//A: Very fast/performant, separation of concerns/modularity

//Q: What is JSX? What are the benefits?
//A: templating language, html-like syntax with dynamic javascript capability

//Q: How do you do conditional rendering in React?
//A: Setup some condition (often in state), then use a conditional (often a ternary) to render one thing or another (or null)

{ isLoggedIn ? <div>Render Me</div> : <div>Not Logged In</div> }

//Q: Explain the data flow in React?
//A: data flows down (via props), events flow up (via callback functions)
// technically it is the event that triggers the reference to the function (passed from the parent) and then the function is executed in the parent component with any data passed to it

//Q: What do all components return?
//A: JSX

//Q: What causes a component to re-render?
//A: update to state

//Q: How do I loop over an array and create multiple instances of a component?
//A: use a map and return an instance of the component for each item in the array

const listOfComponents = components.map(component => {
    return (
        <ChildComponent component={component} />
    )
})

//Q: What are the differences between state and functional components?
//A: State components: use a class construction, need to use "this" keyword, can use state and lifecycle methods (functional can do this with hooks), use the render method to return JSX
//A: Functional components: write with a function, only presentational/dumb components, just return JSX only. 

//Q: What is state (local)?
//A: State is an object that contains the relevant data for the component

//Q: How do you update the state of a component?
//A: using the setState() method. 
//NEVER say this.state.whatever = newValue

//Q: What are the steps to update an input in React?
//A: 1) input has an onChange event listener 2) it calls an event handler (handleChange) 3) the handler updates the state for that input field 4) the input sets its value to be bound to that piece of state

state = {
    search: ""
}

const handleSearch = (e) => {
    const { value, name } = e.target
    this.setState({ [name]: value })
}

return (
    <input value={this.state.search} onChange={this.handleSearch}>
        Search...
    </input>
)

//Q: What is props?
//A: Props is an object that contains data passed from parent to child component

//Q: How do you declare a prop and how do you access it in the child component?
//A: 1) declare an instance of a component inside some JSX 2) pass the prop inside a property of the component 3) access by this.props.propName (or no 'this' in a functional component)

<Component data={myPropData} />

inside 'Component': this.props.data

//Q: What are the two ways to get props in a component? (React + Redux)
//A: React - pass from parent to child. React-Redux - get from the store using mapStateToProps

//Q: What are the 3 main lifecycle stages?
//A: Mounting, Updating, Unmounting

//Q: Which lifecycle method should be used to make an API call and why?
//A: componentDidMount. Dont want to get data before component mounts because often the component relies on the data or the data needs to be put in state which doesn't exist until the component is mounted

//Q: What is Redux? What are the benefits of Redux?
//A: Redux is a state management library. Allows all application to be handled by one single source of truth and access data anywhere needed. 

//Q: Explain the data flow in Redux
//A: SHORT: Component => Action Creator => Reducer => Store => Component rerenders
//A: LONG: 1) Inside component call an action creator. Action creator is a function that returns an action. An action is an object that contains a type and an optional payload. The type tells the reducer which case to run, the payload is the data the reducer will use to update that piece of store state. The action (object) is then dispatched to the reducer. A reducer is a function that takes an action and the previous state and returns the new store state. After the store is updated this then forces the component to rerender and the cycle is complete. 

//Q: What is the store in Redux and what 2 things can we access from it?
//A: Store contains all the relevant application state. We can access the state as well as the dispatch method. 

//Q: What is dispatch used for?
//A: dispatch is used to send the action (object) to the reducer
// clarification: it is often said the action creator is dispatched, this is technically incorrect. the action creator is CALLED which then returns an action object which is then dispatched. So it is the result of the action creator (the action) that is dispatched. 

dispatchEvent(getAllUsers()) //notice order of operations: action creator is called, it returns an action, then that action is dispatched

//Q: Explain mapStateToProps
//A: this is a function (declared outside the component) that allows a component to have access to the store state by mapping the store state to the component. So the component has access to that piece of state through its own props (this.props.users). It takes state as a required parameter (this is the store state) and props as an optional second parameter (this is the props of the component)

const mapStateToProps = state => {
    return {
        users: state.users.all
    }
}

//Q: Explain mapDispatchToProps
//A: this is a function (declared outside the component) that allows a component to have access to the dispatch method and for that method to be bound to any action creator, so that any action creator can be called and the action that is returned will automatically be dispatched. This can be written separately as a function or can simply pass an object with any action creators as the second argument to the connect function (easier)

//option #1
const mapDispatchToProps = dispatch => {
    return bindActionCreators({ getAllUsers, loginUser, otherActionCreator }, dispatch)
}

//option #2
export default connect(mapStateToProps, { getAllUsers, loginUser, otherActionCreator })(Component)

//Q: What is an action creator?
//A: Action creator is a function that returns an action.

//Q: What is an action? What properties does it have?
//A: An action is an object that contains a type and an optional payload. The type tells the reducer which case to run, the payload is the data the reducer will use to update that piece of store state. The action (object) is then dispatched to the reducer.

//Q: What is the role of a reducer?
//A: A reducer is a function that takes an action and the previous state and returns the new store state.

//Q: What do we need to do in a component to call an action creator and get it to the reducer?
//A: 1) import the action creator into the component 2) call the action creator inside the dispatch method to disptach the action to the reducer

//Q: What is react router and why is it useful?
//A: Way to dynamically render specific components based on the URL

//Q: What is a Link tag used for and what attribute does it use?
//A: The way to navigate to a particular URL, then the router decides what to render based on that URL. Like a <a> tag but does not cause a rerender, it used the to="url" attribute instead of href

//Q: What is a Route and what 2 attributes does it use?
//A: Its function is to decide what component to render based on a URL. The two attributes are the URL path and the Component

<Route path="/about" component={About} /> 





/////////////////////////////////////////////////////////////////////////
// Q2 - APPRENTICE (GOOD TO KNOW!)
/////////////////////////////////////////////////////////////////////////


//Q: How do we bind a method to its component?
//A: we can bind it inside the constructor method (old way) or simply by writing our helper functions as an arrow function (automatically binds the method to the context it was declared)


//Q: What are the similarities between state and props?
//A: Both are objects, both store data

//Q: What are the differences between state and props?
//A: props is data meant to be passed/accessed in the child

//Q: What are the arguments that setState takes? (1st is required/2nd is optional)
//A: 1st argument is an object with the piece(s) of state to be updated, second is a callback function that is executed AFTER the state has been set

//Q: What is the "key" used for when looping/creating components?
//A: key is used to make sure there are no duplicates and to make the process faster

//Q: What are propTypes used for?
//A: To declare and enforce the expected types for each component prop

//Q: What do we mean by 'Component Lifecycle'?
//A: The various stages a component goes through. Includes mounting, updating, and unmounting. Can have various things occur at these different stages in the components lifecycle through use of component lifecycle methods. 

//Q: What is the difference between mounting and rendering?
//A: Mounting only occurs once at the beggining of the component lifecycle, render occurs many times anytime there is a change/update to state

//Q: What are the main Lifecycle methods used (name at least 1) in each of the 3 lifecycle stages?
//A: mounting phase - componentDidMount, updating phase - componentDidUpdate, unmounting phase - componentWillUnmount

//Q: What do we mean by 'single source of truth'?
//A: The store (the single source of truth) is the one place all application state is stored, updated, and accessed

//Q: What is Redux Thunk? How does it work?
//A: Redux Thunk is a middleware to handle asynchronous action creators. When using redux thunk the action creator can return either an object or a function. If the action creator is synchronous it will return an action object like normal. If the action creator is asynchronous it will return a function instead (this is the new part). The function will wait for the asyncronous operation to complete and then the action is manually dispatched inside the function. 

//Q: What does the Provider do in React-Redux?
//A: The provider allows any/all components to have access to the store state

//Q: What does Connect do in React-Redux?
//A: the Connect method allows a specific component to actually access the store state that the provider provides

//Q: What two arguments do we pass connect?
//A: mapStateToProps, mapDispatchToProps

//Q: decribe how to write a reducer. What are its parameters and syntax?
//A: write a function, declare state and action as parameters, state can optionally be set to some initial state, make switch statement with action.type as the value to check, add cases for eah type and return the new state using the payload if necessary

const initialState = {
    all: [],
    one: {}
  }

export default function(state = initialState, action) {
    switch (action.type) {
      case ADD_TODO:
        return [ ...state.all, action.payload ]
      default:
        return state
    }
    

//Q: decribe how to write an Action Creator. 

export const fetchUsers = () => {
  return async dispatch => {
    let response = await axios.get(`http://localhost:8000/users`)
        dispatch({
            type: FETCH_USERS,
            payload: response.data
        })
    }
}
    
export const addListing = (newListing) => {
  return async (dispatch) => {
    let listing = await axios.post(`http://localhost:8000/addbucket/${newListing.id}`, newListing)
    dispatch({
      type: ADD_LISTING,
      payload: listing.data[0]
    })
  }
}

//Q: What is Switch tag used for in React-Router?
//A: Renders the first child <Route> or <Redirect> that matches the location. It only renders the first match (unlike just using route tags which will render all matches)






/////////////////////////////////////////////////////////////////////////
// Q2 - JEDI (ON YOUR WAY TO BE A MASTER)
/////////////////////////////////////////////////////////////////////////

//Q: What is the virtual DOM? How does it work?
//A: The virtual DOM is a layer on top of the actual DOM, it provides a separate copy of the DOM so that when it is updating it checks the difference between it (the virtual DOM) and the actual DOM and changes/renders only those differences in the actual DOM


//Q: How can you force a component to rerender?
//A: use forceUpdate() or set a piece of state and then update it

//Q: What method is used to create a Store? What two arguments do we usually pass it?
//A: createStore(rootReducer, applyMiddleware) -- root reducer includes all the combined reducers, applyMiddleware includes all the middleware

//Q: What props does BrowserRouter provide to its children?
//A: router props -- history, match, location

//Q: How can I access the value of a URL param?
//A: props.match.params.nameOfParameter

