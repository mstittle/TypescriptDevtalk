

/// <reference path="../typings/modules/react/index.d.ts" />

/*

Concepts:
    react support
    jsx

*/

import * as React from "react"

// props is a react concept for attaching data to components
// here we use typescript interface to declare the prop properties
interface Props {
  foo: string;
  bar: string;
}

// state is a react concept for attaching mutable data to components
// here we use typescript interface to declare the prop properties
interface State {
  count: number;
}

// a react Component - using extension and generics
export class MyComponent extends React.Component<Props, State> {
  
  //------------------------------------------------
  // example of jsx
  // https://facebook.github.io/jsx/
  // jsx allows embedded html tags. these compile to react calls on the virtual DOM
  //--------------------------------------
  render() {
    return <div><span>{this.props.foo} {this.state.count}</span></div> 
  }
}


 
