import React,{Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import ErrorMessage from '../containers/ErrorMessage';

import {store} from '../store';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';//how did this come
import AppNavBar from '../components/nav_bar_reactstrap';
import Footer from '../components/footer/footer';
import CopyRight from '../components/copyright/copyright';


class App extends Component {

  render(){
  return(
    <Provider store={store}>
       <Router>
         <React.Fragment>
             <ErrorMessage />
             <AppNavBar/>
             <Footer/>
             <CopyRight/>
        </React.Fragment>
        </Router>
    </Provider>
  )
 }
}
export default App;
