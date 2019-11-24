import React,{Component} from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavLink,NavItem,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem} from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {ButtonContainer} from './Button';
import ligo from '../foodlogo.jpg';
import Home from '../components/home';
import About from '../components/about/about';
import Signup from '../pages/signup';
import Contact from '../pages/contact';
import Signin from '../containers/signin';



const NameCSS = {
  color:"#48602d",
  fontweightL:"bold"
};
class AppNavbar extends Component{
            constructor(props){
                 super(props);
                 this.toggle=this.toggle.bind(this);
                 this.state={
                    isOpen: false,
                    color:'',
                };
            }
            toggle(){
                this.setState({
                    isOpen: !this.state.isOpen
                });
            }

            hoveron(){
              this.setState({
                  textcolor: '#7AF377'
                });
              }
            hoveroff(){
              this.setState({
                textcolor: 'black'
              })
            }

    render(){
        return(
            <Router>
            <Navbar  color="light" light expand="md">
                <NavLink to='/details'>
                        <img src={ligo} alt="services" className="navbar-brand" height="60px"></img>
                </NavLink>
                <NavbarBrand href="/"  style={NameCSS}><h1>FAGITO</h1></NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <ul className='navbar-nav align-items-center'>
                                <li className="nav-item ml-2">
                                <Link to='/home' className="nav-link"> Home</Link>
                                 </li>

                                <li className="nav-item ml-2" onMouseEnter={this.state.hoverOn}
                                                              onMouseLeave={this.state.hoverOff}>
                                    <Link to='/about/' className="nav-link"> About Us</Link>
                                </li>

                                <li className="nav-item ml-2">
                                    <Link to='/contact/' className="nav-link"> Contact</Link>
                                </li>
                                <li className="nav-item ml-2">
                                    <Link to='/login/' className="nav-link">
                                        <button>Login</button>
                                    </Link>
                                </li>
                                <li className="nav-item ml-2">
                                    <Link to='/register/' className="nav-link">
                                        <button> Sign Up</button>
                                    </Link>
                                </li>
                            </ul>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <Route path="/home" component={Home} />
            <Route path="/about/" component={About} />
            <Route path="/register/" component={Signup} />
            <Route path="/login/" component={Signin}/>
            <Route path="/contact/" component={Contact}/>
        </Router>
            )
        }
}
export default AppNavbar;
