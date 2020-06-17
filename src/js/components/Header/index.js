import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Dropdown } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faList } from '@fortawesome/free-solid-svg-icons'


class Header extends Component {
    constructor(props) {
        super(props);        
        this.state = {
            active: false
        };
      }
    toggleClass() {        
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };
    render() {
        return (
            <header>                
                <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                    <div className="my-0 mr-md-auto font-weight-normal width-header">                         

                        <img src = "https://www.nenewe.com/home-page-style/img/logo.png" className = 'logo dis-inline'/>                        
                        <Dropdown className="dis-inline">
                            <Dropdown.Toggle variant="success" id="dropdown-basic" className = 'english-style'>
                                En
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick = {()=> {                                    
                                    const style = document.getElementById('style-direction');
                                    style.href = '';

                                    }}>English</Dropdown.Item>
                                <Dropdown.Item  onClick = {()=> {                                    
                                    const style = document.getElementById('style-direction');
                                    style.href = './css/rtl.css';                                    

                                    }}>Arabic</Dropdown.Item>                            
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <Button className='mobileView' onClick = {()=> this.toggleClass() }>
                        <FontAwesomeIcon icon={faList} />
                    </Button>

                    <div className = {this.state.active ? "hiddenmobile": "hidden-mobile"} >
                        <div className="box-cart">
                            <div className='notification-cart'></div>
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </div>                                                    
                        <Link className="btn btn-add-restaurant" to="#" >Add Restaurant</Link>
                        <Link className="btn btn-signIn" to="/login" >Sign In</Link>
                    </div>
                    
                </div>
            </header>
        )
    }
}

export default Header;