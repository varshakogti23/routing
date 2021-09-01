import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import 'react-router-dom';
function App() {
  return (
    <Router>
    <div classname="App">
      <Nav />
      <Route path="/" component={Home}/>
      <Route path="/About" component={About} />
      <Route path="/Shop" component={Shop} />
    </div>
    </Router>
  );
}
const Home={}=>(
  <div>
    <h1>Home Page</h1>
  <div>
)
export default App;
