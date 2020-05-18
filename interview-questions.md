# ASSESSMENT 2: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. Why would you use the method super()?

  Your answer:
      super() pulls the methods from the parent/higher level classes
  Researched answer:
      Search Results
      super is a keyword. It is used inside a sub-class method definition to call a method defined in the super class. Private methods of the super-class cannot be called. Only public and protected methods can be called by the super keyword.


2. What is a virtual DOM?

  Your answer:
      a virtual DOM is a blueprint of the real DOM, where changes can be made easily and efficiently before getting pushed to the live site

  Researched answer:
      A virtual DOM object has the same properties as a real DOM object, but it lacks the real thing’s power to directly change what’s on the screen.

      Manipulating the DOM is slow. Manipulating the virtual DOM is much faster, because nothing gets drawn onscreen. Think of manipulating the virtual DOM as editing a blueprint, as opposed to moving rooms in an actual house.


3. When creating a basic (stateless) class component in React, what are the necessary elements needed to display "Hello World" in the browser?

  Your answer:
      return, render, div, import
  Researched answer:
      Dumb components are also called ‘presentational’ components because their only responsibility is to present something to the DOM. Once that is done, the component is done with it. No keeping tabs on it, no checking in once in a while to see how things are going. Nope. Put the info on the page and move on.
      The components themselves only have a render() method (they don’t need any others) and are often just Javascript functions. They don’t have internal state to manage. They wouldn’t know how to change the data they are presenting if they were asked. Ignorance is bliss.


4. What is JSX?

  Your answer:
      Javascript inside of a React component - it's what renders the javascript as readable by the program
  Researched answer:
      JSX is an XML/HTML-like syntax used by React that extends ECMAScript so that XML/HTML-like text can co-exist with JavaScript/React code.


5. What is state in React?

  Your answer:
      state is what changes in the JSX to make changes to the site

  Researched answer:
      In the React sense, “state” is an object that represents the parts of the app that can change. Each component can maintain its own state, which lives in an object called this. state


6. STRETCH: What is hoisting in JavaScript?

  Your answer:
      Hoisting is what allows a function to be called before variables are defined

  Researched answer:
      Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.


## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- React lifecycle methods
    Constructor, getDirivedstateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate, componentDidMount, componentDidUpdate, componentWillUnmount

- API
    Application Programming Interface - An application programming interface is a computing interface which defines interactions between multiple software intermediaries. It defines the kinds of calls or requests that can be made, how to make them, the data formats that should be used, the conventions to follow, etc.

- event.preventDefault()
    The Event interface's preventDefault() method tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be. The event continues to propagate as usual, unless one of its event listeners calls stopPropagation() or stopImmediatePropagation(), either of which terminates propagation at once.

    As noted below, calling preventDefault() for a non-cancelable event, such as one dispatched via EventTarget.dispatchEvent(), without specifying cancelable: true has no effect.

- DOM events
    DOM Events are sent to notify code of interesting things that have taken place. Each event is represented by an object which is based on the Event interface, and may have additional custom fields and/or functions used to get additional information about what happened. Events can represent everything from basic user interactions to automated notifications of things happening in the rendering model.

- http verbs
    The primary or most-commonly-used HTTP verbs (or methods, as they are properly called) are POST, GET, PUT, PATCH, and DELETE. These correspond to create, read, update, and delete (or CRUD) operations, respectively. There are a number of other verbs, too, but are utilized less frequently.

- MVC
    Model View Controler - Model–view–controller is a software design pattern commonly used for developing user interfaces which divides the related program logic into three interconnected elements. This is done to separate internal representations of information from the ways information is presented to and accepted from the user.