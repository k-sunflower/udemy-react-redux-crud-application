import React from 'react'; 
//class App extends Component {
//  render() {
//    //const greeting = "Hi!";
//    //const dom = <h1 className="foo">{greeting}</h1>;
//    //return dom;
//    return (
//      <div>
//        <label htmlFor="bar">bar</label>
//        <input type="text" onClick={() => {console.log("AAA")} } />
//      </div>
//    )
//  }
//} 

const App = () => {
  return (
    <div>
      <Cat/>
      <Cat/>
      <Cat/>
    </div>
  )
}

const Cat = () => {
  return <div>Wow!</div>
}

export default App;
