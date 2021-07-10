import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Test from './components/Header';
import Home from './components/Home';
import Blog from './components/Blog';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component<{}, {}> {
  constructor(props: any) {
    super(props);
  }
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  render() {
    return (
      <div className="app">
        <Router>
          <div className="app-body">
            <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/blog' component={Blog} />
            </Switch>
            <Footer/>

          </div>
        </Router>


      </div>

    );

  }


}

export default App;
