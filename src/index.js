import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import BaseLayout from './components/BaseLayout'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import References from './components/References'



ReactDOM.render(


  <Router>


    <App>

      <BaseLayout>

        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/references" component={References}/>

      </BaseLayout>

    </App>
  </Router>




, document.getElementById('root'));
registerServiceWorker();
