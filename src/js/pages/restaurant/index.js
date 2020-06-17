import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Dropdown } from 'react-bootstrap';
import NumericInput from 'react-numeric-input';
import Form from 'react-bootstrap/Form'


import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faUtensils, faComment, faEdit, faInfoCircle, faPlusCircle,faTimes,faPen,faStar,faStarHalf, faMinusCircle, faWindowClose } from '@fortawesome/free-solid-svg-icons'
class restaurant extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showPopup: false,
            fixed: null
        };
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);        
    }
    
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll() {        
        const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const scrolled = winScroll;

        if(winScroll > 428){
            document.getElementById("Cart_box").classList.add("fixed-box");
        }else{
            document.getElementById("Cart_box").classList.remove("fixed-box");
        }



        console.log("scrolled"+ scrolled)

    }
    _togglePopup() {
        // window.scrollTo(0, 0)    
        window.scroll({top: 0, left: 0, behavior: 'smooth' })
        this.setState({
            showPopup: true
        });
    }
    _ClosePopup() {  
        this.setState({  
             showPopup: false
        });  
    } 

    render() {
        return (
            <div className="restaurant-container">
                <div className='container-fluid'>
                    <div className="row">
                        <div className="col-12 h6 f-12-m breadcrumbs m-y-md">
                            <a href="/">Home</a>
                            <span className="p-x-md main-color">
                                <FontAwesomeIcon icon={faAngleRight} />
                            </span>
                            <a ng-href="/uae/restaurants/1217/" className="ng-binding" href="/uae/restaurants/1217/">
                                Al Qusais 3
                            </a>
                            <span className="p-x-md main-color">
                                <FontAwesomeIcon icon={faAngleRight} />
                            </span>
                            <span className="active-crumb ng-binding">
                                Vigilante Mexican Food
                            </span>
                        </div>
                    </div>
                    <div className="row pt-3">
                        <div className="col-12 rest-info">
                            <div className="media rest-media">
                                <div className="media-left">
                                    <div className="rest-logo-bg">
                                        <span className="valign-helper"></span>
                                        <img src="https://images.deliveryhero.io/image/talabat/restaurants/Vigilante_Logo_636601690596886118.jpg?size=120" />
                                    </div>
                                </div>
                                <div className="media-body">
                                    <div className="row">
                                        <div className="col-8 p-r-0">
                                            <h1 className="f-15-m media-heading ng-binding">Vigilante Mexican Food</h1>
                                        </div>
                                        <div className="col-4 f-15-m text-right">
                                            <b className="h5 menu-open ng-binding greentext">OPEN</b>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-8">
                                            <p className="m-b-0 cuisShow truncate f-12-m f-14 text-75">
                                                <span className="ng-binding ng-scope">Mexican<span>,&nbsp;</span></span>
                                            </p>
                                        </div>
                                        <div className="col-4">
                                            <div className="rating-sect-menu p-t-5-m text-right text-left-m">
                                                {/* <!-- New Rating --> */}
                                                {/* <!-- ngIf: model.restaurant.rat >= 1 --> */}
                                                <div ng-if="model.restaurant.rat >= 1" data-restaurant-rating="" rating="model.restaurant.rat" className="ng-scope ng-isolate-scope">
                                                    <div className="rating-wrapper">
                                                        <div className="rating-image-word">
                                                            <div className="smiley-rating rating_very_good"></div>
                                                            <div className="rating-word ng-binding">Very good</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- end ngIf: model.restaurant.rat >= 1 --> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-8 text-75">
                                            Min. order:
                                        <span className="ng-binding ng-scope">AED 0.00</span>
                                        </div>
                                        <div className="col-4 p-l-0">
                                            <p className="m-b-0 text-right payment-img">
                                                <img src="https://www.talabat.com/images/talabat/visacheckout_brand.svg" width="35" className="vc-icon ng-scope" height="20" />
                                                <img src="https://www.talabat.com/images/talabat/cash-icon.svg" className="ng-scope" width="35" />
                                                <img src="https://www.talabat.com/images/talabat/visa-icon1.svg" className="ng-scope" />
                                                <img src="https://www.talabat.com/images/talabat/mastercard-icon.svg" className="ng-scope" />
                                                <img src="https://www.talabat.com/images/talabat/ico_amex.svg" className="ng-scope" />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid'>
                    <div className='row pt-3'>
                        <div className='col-md-12'>
                            <Tabs defaultActiveKey="Menu" id="uncontrolled-tab-example">
                                <Tab eventKey="Menu" title={<span><FontAwesomeIcon icon={faUtensils} /> Menu</span>}>
                                    <div className='container-menu row'>
                                        <div className='col-lg-12'>
                                            <input className="inputSearch" type="text" placeholder="Search menu item" />
                                        </div>
                                        <div className='col-md-12 restaurant-drop'>
                                            <Dropdown className="dis-inline" >
                                                <Dropdown.Toggle variant="success" id="dropdown-basic" className='english-style'>
                                                    Most Selling
                                            </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <Dropdown className="dis-inline">
                                                <Dropdown.Toggle variant="success" id="dropdown-basic2" className='english-style'>
                                                    New Menu Items!
                                            </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <Dropdown className="dis-inline">
                                                <Dropdown.Toggle variant="success" id="dropdown-basic3" className='english-style'>
                                                    20Aed Meals
                                            </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <Dropdown className="dis-inline">
                                                <Dropdown.Toggle variant="success" id="dropdown-basic4" className='english-style'>
                                                    Tapas
                                            </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <Dropdown className="dis-inline">
                                                <Dropdown.Toggle variant="success" id="dropdown-basic5" className='english-style'>
                                                    Burrito Bowls
                                            </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <Dropdown className="dis-inline">
                                                <Dropdown.Toggle variant="success" id="dropdown-basic6" className='english-style'>
                                                    20Aed Meals
                                            </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item> Sauces/ Dips </Dropdown.Item>
                                                    <Dropdown.Item> Sauces/ Dips </Dropdown.Item>
                                                    <Dropdown.Item> Sauces/ Dips </Dropdown.Item>
                                                    <Dropdown.Item> Sauces/ Dips </Dropdown.Item>
                                                    <Dropdown.Item> Sauces/ Dips </Dropdown.Item>
                                                    <Dropdown.Item> Sauces/ Dips </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <Dropdown className="dis-inline">
                                                <Dropdown.Toggle variant="success" id="dropdown-basic7" className='english-style'>
                                                    Wanted Burritos
                                            </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item> Sauces/ Dips </Dropdown.Item>
                                                    <Dropdown.Item> Sauces/ Dips </Dropdown.Item>
                                                    <Dropdown.Item> Sauces/ Dips </Dropdown.Item>
                                                    <Dropdown.Item> Sauces/ Dips </Dropdown.Item>
                                                    <Dropdown.Item> Sauces/ Dips </Dropdown.Item>
                                                    <Dropdown.Item> Sauces/ Dips </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <Dropdown className="dis-inline">
                                                <Dropdown.Toggle variant="success" id="dropdown-basic8" className='english-style'>
                                                    Cantina Quesadillas
                                            </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item> Sauces/ Dips </Dropdown.Item>
                                                    <Dropdown.Item> Sauces/ Dips </Dropdown.Item>
                                                    <Dropdown.Item> Sauces/ Dips </Dropdown.Item>
                                                    <Dropdown.Item> Sauces/ Dips </Dropdown.Item>
                                                    <Dropdown.Item> Sauces/ Dips </Dropdown.Item>
                                                    <Dropdown.Item> Sauces/ Dips </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <Dropdown className="dis-inline">
                                                <Dropdown.Toggle variant="success" id="dropdown-basic9" className='english-style'>
                                                    Feisty Fajita
                                            </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item>  Feisty Fajita Crunchwraps </Dropdown.Item>
                                                    <Dropdown.Item> Feisty Fajita Crunchwraps </Dropdown.Item>
                                                    <Dropdown.Item>  Feisty Fajita Crunchwraps </Dropdown.Item>
                                                    <Dropdown.Item>  Feisty Fajita Crunchwraps </Dropdown.Item>
                                                    <Dropdown.Item>  Feisty Fajita Crunchwraps </Dropdown.Item>
                                                    <Dropdown.Item>  Feisty Fajita Crunchwraps </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <Dropdown className="dis-inline">
                                                <Dropdown.Toggle variant="success" id="dropdown-basic10" className='english-style'>
                                                    Sauces/ Dips
                                            </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item> Sauces/ Dips </Dropdown.Item>
                                                    <Dropdown.Item> Sauces/ Dips </Dropdown.Item>
                                                    <Dropdown.Item> Sauces/ Dips </Dropdown.Item>
                                                    <Dropdown.Item> Sauces/ Dips </Dropdown.Item>
                                                    <Dropdown.Item> Sauces/ Dips </Dropdown.Item>
                                                    <Dropdown.Item> Sauces/ Dips </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <Dropdown className="dis-inline" >
                                                <Dropdown.Toggle variant="success" id="dropdown-basic11" className='english-style'>
                                                    Most Selling
                                            </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <Dropdown className="dis-inline">
                                                <Dropdown.Toggle variant="success" id="dropdown-basic12" className='english-style'>
                                                    New Menu Items!
                                            </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <Dropdown className="dis-inline" >
                                                <Dropdown.Toggle variant="success" id="dropdown-basic13" className='english-style'>
                                                    Most Selling
                                            </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <Dropdown className="dis-inline">
                                                <Dropdown.Toggle variant="success" id="dropdown-basic14" className='english-style'>
                                                    New Menu Items!
                                            </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <Dropdown className="dis-inline" >
                                                <Dropdown.Toggle variant="success" id="dropdown-basic15" className='english-style'>
                                                    Most Selling
                                            </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <Dropdown className="dis-inline">
                                                <Dropdown.Toggle variant="success" id="dropdown-basic16" className='english-style'>
                                                    New Menu Items!
                                            </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                    <Dropdown.Item>  Burrito Bowls </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <div className='pd-l-r col-md-8'>
                                            <div className='row'>
                                                {/* <!-- Box For Restaurant --> */}
                                                {/* <button onClick={this._togglePopup.bind(this)}> Click To Launch Popup</button>  */}
                                                <div className='col-md-6 box-restaurant-add' onClick={this._togglePopup.bind(this)}>
                                                    <div className='row'>
                                                        <div className='col-md-2 n0-pd-r'>
                                                            <img src='https://images.deliveryhero.io/image/talabat/MenuItems/vigilante_fajita_bom_637198969473955249.jpg?width=68&height=60' />
                                                        </div>
                                                        <div className='col-md-8 border-bt'>
                                                            <h2>Vigilante Fajita Bombs</h2>
                                                            <p>Shredded chicken with cheese, pickled jalapenos, sweet corn, and kick a$$ mexican spices rolled into bite-sized bombs and then deep fried.</p>
                                                        </div>
                                                        <div className='col-md-2 text-center n0-pd'>
                                                            <h6>AED 14.00</h6>                                                            
                                                            <div className='icon-add-product'>
                                                                <FontAwesomeIcon icon={faPlusCircle} />
                                                            </div>                                                            
                                                            <h6 className='old-price'>AED 14.00</h6>

                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- Box For Restaurant --> */}
                                                <div className='col-md-6 box-restaurant-add' onClick={this._togglePopup.bind(this)}>
                                                    <div className='row'>
                                                        <div className='col-md-2 n0-pd-r'>
                                                            <img src='https://images.deliveryhero.io/image/talabat/MenuItems/jalapeno_poppers_637167816965723455.jpg?width=68&height=60' />
                                                        </div>
                                                        <div className='col-md-8 border-bt'>
                                                            <h2>Vigilante Fajita Bombs</h2>
                                                            <p>Shredded chicken with cheese, pickled jalapenos, sweet corn, and kick a$$ mexican spices rolled into bite-sized bombs and then deep fried.</p>
                                                        </div>
                                                        <div className='col-md-2 text-center n0-pd'>
                                                            <h6>AED 14.00</h6>
                                                            <div className='icon-add-product'>
                                                                <FontAwesomeIcon icon={faPlusCircle} />
                                                            </div>
                                                            <h6 className='old-price'>AED 14.00</h6>

                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- Box For Restaurant --> */}
                                                <div className='col-md-6 box-restaurant-add' onClick={this._togglePopup.bind(this)}>
                                                    <div className='row'>
                                                        <div className='col-md-2 n0-pd-r'>
                                                            <img src='https://images.deliveryhero.io/image/talabat/MenuItems/jalapeno_poppers_637167816965723455.jpg?width=68&height=60' />
                                                        </div>
                                                        <div className='col-md-8 border-bt'>
                                                            <h2>Vigilante Fajita Bombs</h2>
                                                            <p>Shredded chicken with cheese, pickled jalapenos, sweet corn, and kick a$$ mexican spices rolled into bite-sized bombs and then deep fried.</p>
                                                        </div>
                                                        <div className='col-md-2 text-center n0-pd'>
                                                            <h6>AED 14.00</h6>
                                                            <div className='icon-add-product'>
                                                                <FontAwesomeIcon icon={faPlusCircle} />
                                                            </div>
                                                            <h6 className='old-price'>AED 14.00</h6>

                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- Box For Restaurant --> */}
                                                <div className='col-md-6 box-restaurant-add' onClick={this._togglePopup.bind(this)}>
                                                    <div className='row'>
                                                        <div className='col-md-2 n0-pd-r'>
                                                            <img src='https://images.deliveryhero.io/image/talabat/MenuItems/Build_your_own_burri_637198966516002450.jpg?width=68&height=60' />
                                                        </div>
                                                        <div className='col-md-8 border-bt'>
                                                            <h2>Vigilante Fajita Bombs</h2>
                                                            <p>Shredded chicken with cheese, pickled jalapenos, sweet corn, and kick a$$ mexican spices rolled into bite-sized bombs and then deep fried.</p>
                                                        </div>
                                                        <div className='col-md-2 text-center n0-pd'>
                                                            <h6>AED 14.00</h6>
                                                            <div className='icon-add-product'>
                                                                <FontAwesomeIcon icon={faPlusCircle} />
                                                            </div>
                                                            <h6 className='old-price'>AED 14.00</h6>

                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- Box For Restaurant --> */}
                                                <div className='col-md-6 box-restaurant-add' onClick={this._togglePopup.bind(this)}>
                                                    <div className='row'>
                                                        <div className='col-md-2 n0-pd-r'>
                                                            <img src='https://images.deliveryhero.io/image/talabat/MenuItems/vigilante_fajita_bom_637198969473955249.jpg?width=68&height=60' />
                                                        </div>
                                                        <div className='col-md-8 border-bt'>
                                                            <h2>Vigilante Fajita Bombs</h2>
                                                            <p>Shredded chicken with cheese, pickled jalapenos, sweet corn, and kick a$$ mexican spices rolled into bite-sized bombs and then deep fried.</p>
                                                        </div>
                                                        <div className='col-md-2 text-center n0-pd'>
                                                            <h6>AED 14.00</h6>
                                                            <div className='icon-add-product'>
                                                                <FontAwesomeIcon icon={faPlusCircle} />
                                                            </div>
                                                            <h6 className='old-price'>AED 14.00</h6>

                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- Box For Restaurant --> */}
                                                <div className='col-md-6 box-restaurant-add' onClick={this._togglePopup.bind(this)}>
                                                    <div className='row'>
                                                        <div className='col-md-2 n0-pd-r'>
                                                            <img src='https://images.deliveryhero.io/image/talabat/MenuItems/Build_your_own_burri_637198966516002450.jpg?width=68&height=60' />
                                                        </div>
                                                        <div className='col-md-8 border-bt'>
                                                            <h2>Vigilante Fajita Bombs</h2>
                                                            <p>Shredded chicken with cheese, pickled jalapenos, sweet corn, and kick a$$ mexican spices rolled into bite-sized bombs and then deep fried.</p>
                                                        </div>
                                                        <div className='col-md-2 text-center n0-pd'>
                                                            <h6>AED 14.00</h6>
                                                            <div className='icon-add-product'>
                                                                <FontAwesomeIcon icon={faPlusCircle} />
                                                            </div>
                                                            <h6 className='old-price'>AED 14.00</h6>

                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- Box For Restaurant --> */}
                                                <div className='col-md-6 box-restaurant-add' onClick={this._togglePopup.bind(this)}>
                                                    <div className='row'>
                                                        <div className='col-md-2 n0-pd-r'>
                                                            <img src='https://images.deliveryhero.io/image/talabat/MenuItems/vigilante_fajita_bom_637198969473955249.jpg?width=68&height=60' />
                                                        </div>
                                                        <div className='col-md-8 border-bt'>
                                                            <h2>Vigilante Fajita Bombs</h2>
                                                            <p>Shredded chicken with cheese, pickled jalapenos, sweet corn, and kick a$$ mexican spices rolled into bite-sized bombs and then deep fried.</p>
                                                        </div>
                                                        <div className='col-md-2 text-center n0-pd'>
                                                            <h6>AED 14.00</h6>
                                                            <div className='icon-add-product'>
                                                                <FontAwesomeIcon icon={faPlusCircle} />
                                                            </div>
                                                            <h6 className='old-price'>AED 14.00</h6>

                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- Box For Restaurant --> */}
                                                <div className='col-md-6 box-restaurant-add' onClick={this._togglePopup.bind(this)}>
                                                    <div className='row'>
                                                        <div className='col-md-2 n0-pd-r'>
                                                            <img src='https://images.deliveryhero.io/image/talabat/MenuItems/vigilante_fajita_bom_637198969473955249.jpg?width=68&height=60' />
                                                        </div>
                                                        <div className='col-md-8 border-bt'>
                                                            <h2>Vigilante Fajita Bombs</h2>
                                                            <p>Shredded chicken with cheese, pickled jalapenos, sweet corn, and kick a$$ mexican spices rolled into bite-sized bombs and then deep fried.</p>
                                                        </div>
                                                        <div className='col-md-2 text-center n0-pd'>
                                                            <h6>AED 14.00</h6>
                                                            <div className='icon-add-product'>
                                                                <FontAwesomeIcon icon={faPlusCircle} />
                                                            </div>
                                                            <h6 className='old-price'>AED 14.00</h6>

                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- Box For Restaurant --> */}
                                                <div className='col-md-6 box-restaurant-add' onClick={this._togglePopup.bind(this)}>
                                                    <div className='row'>
                                                        <div className='col-md-2 n0-pd-r'>
                                                            <img src='https://images.deliveryhero.io/image/talabat/MenuItems/vigilante_fajita_bom_637198969473955249.jpg?width=68&height=60' />
                                                        </div>
                                                        <div className='col-md-8 border-bt'>
                                                            <h2>Vigilante Fajita Bombs</h2>
                                                            <p>Shredded chicken with cheese, pickled jalapenos, sweet corn, and kick a$$ mexican spices rolled into bite-sized bombs and then deep fried.</p>
                                                        </div>
                                                        <div className='col-md-2 text-center n0-pd'>
                                                            <h6>AED 14.00</h6>
                                                            <div className='icon-add-product'>
                                                                <FontAwesomeIcon icon={faPlusCircle} />
                                                            </div>
                                                            <h6 className='old-price'>AED 14.00</h6>

                                                        </div>
                                                    </div>
                                                </div>
                                                 {/* <!-- Box For Restaurant --> */}
                                                {/* <button onClick={this._togglePopup.bind(this)}> Click To Launch Popup</button>  */}
                                                <div className='col-md-6 box-restaurant-add' onClick={this._togglePopup.bind(this)}>
                                                    <div className='row'>
                                                        <div className='col-md-2 n0-pd-r'>
                                                            <img src='https://images.deliveryhero.io/image/talabat/MenuItems/vigilante_fajita_bom_637198969473955249.jpg?width=68&height=60' />
                                                        </div>
                                                        <div className='col-md-8 border-bt'>
                                                            <h2>Vigilante Fajita Bombs</h2>
                                                            <p>Shredded chicken with cheese, pickled jalapenos, sweet corn, and kick a$$ mexican spices rolled into bite-sized bombs and then deep fried.</p>
                                                        </div>
                                                        <div className='col-md-2 text-center n0-pd'>
                                                            <h6>AED 14.00</h6>                                                            
                                                            <div className='icon-add-product'>
                                                                <FontAwesomeIcon icon={faPlusCircle} />
                                                            </div>                                                            
                                                            <h6 className='old-price'>AED 14.00</h6>

                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- Box For Restaurant --> */}
                                                <div className='col-md-6 box-restaurant-add' onClick={this._togglePopup.bind(this)}>
                                                    <div className='row'>
                                                        <div className='col-md-2 n0-pd-r'>
                                                            <img src='https://images.deliveryhero.io/image/talabat/MenuItems/jalapeno_poppers_637167816965723455.jpg?width=68&height=60' />
                                                        </div>
                                                        <div className='col-md-8 border-bt'>
                                                            <h2>Vigilante Fajita Bombs</h2>
                                                            <p>Shredded chicken with cheese, pickled jalapenos, sweet corn, and kick a$$ mexican spices rolled into bite-sized bombs and then deep fried.</p>
                                                        </div>
                                                        <div className='col-md-2 text-center n0-pd'>
                                                            <h6>AED 14.00</h6>
                                                            <div className='icon-add-product'>
                                                                <FontAwesomeIcon icon={faPlusCircle} />
                                                            </div>
                                                            <h6 className='old-price'>AED 14.00</h6>

                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- Box For Restaurant --> */}
                                                <div className='col-md-6 box-restaurant-add' onClick={this._togglePopup.bind(this)}>
                                                    <div className='row'>
                                                        <div className='col-md-2 n0-pd-r'>
                                                            <img src='https://images.deliveryhero.io/image/talabat/MenuItems/jalapeno_poppers_637167816965723455.jpg?width=68&height=60' />
                                                        </div>
                                                        <div className='col-md-8 border-bt'>
                                                            <h2>Vigilante Fajita Bombs</h2>
                                                            <p>Shredded chicken with cheese, pickled jalapenos, sweet corn, and kick a$$ mexican spices rolled into bite-sized bombs and then deep fried.</p>
                                                        </div>
                                                        <div className='col-md-2 text-center n0-pd'>
                                                            <h6>AED 14.00</h6>
                                                            <div className='icon-add-product'>
                                                                <FontAwesomeIcon icon={faPlusCircle} />
                                                            </div>
                                                            <h6 className='old-price'>AED 14.00</h6>

                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- Box For Restaurant --> */}
                                                <div className='col-md-6 box-restaurant-add' onClick={this._togglePopup.bind(this)}>
                                                    <div className='row'>
                                                        <div className='col-md-2 n0-pd-r'>
                                                            <img src='https://images.deliveryhero.io/image/talabat/MenuItems/Build_your_own_burri_637198966516002450.jpg?width=68&height=60' />
                                                        </div>
                                                        <div className='col-md-8 border-bt'>
                                                            <h2>Vigilante Fajita Bombs</h2>
                                                            <p>Shredded chicken with cheese, pickled jalapenos, sweet corn, and kick a$$ mexican spices rolled into bite-sized bombs and then deep fried.</p>
                                                        </div>
                                                        <div className='col-md-2 text-center n0-pd'>
                                                            <h6>AED 14.00</h6>
                                                            <div className='icon-add-product'>
                                                                <FontAwesomeIcon icon={faPlusCircle} />
                                                            </div>
                                                            <h6 className='old-price'>AED 14.00</h6>

                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- Box For Restaurant --> */}
                                                <div className='col-md-6 box-restaurant-add' onClick={this._togglePopup.bind(this)}>
                                                    <div className='row'>
                                                        <div className='col-md-2 n0-pd-r'>
                                                            <img src='https://images.deliveryhero.io/image/talabat/MenuItems/vigilante_fajita_bom_637198969473955249.jpg?width=68&height=60' />
                                                        </div>
                                                        <div className='col-md-8 border-bt'>
                                                            <h2>Vigilante Fajita Bombs</h2>
                                                            <p>Shredded chicken with cheese, pickled jalapenos, sweet corn, and kick a$$ mexican spices rolled into bite-sized bombs and then deep fried.</p>
                                                        </div>
                                                        <div className='col-md-2 text-center n0-pd'>
                                                            <h6>AED 14.00</h6>
                                                            <div className='icon-add-product'>
                                                                <FontAwesomeIcon icon={faPlusCircle} />
                                                            </div>
                                                            <h6 className='old-price'>AED 14.00</h6>

                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- Box For Restaurant --> */}
                                                <div className='col-md-6 box-restaurant-add' onClick={this._togglePopup.bind(this)}>
                                                    <div className='row'>
                                                        <div className='col-md-2 n0-pd-r'>
                                                            <img src='https://images.deliveryhero.io/image/talabat/MenuItems/Build_your_own_burri_637198966516002450.jpg?width=68&height=60' />
                                                        </div>
                                                        <div className='col-md-8 border-bt'>
                                                            <h2>Vigilante Fajita Bombs</h2>
                                                            <p>Shredded chicken with cheese, pickled jalapenos, sweet corn, and kick a$$ mexican spices rolled into bite-sized bombs and then deep fried.</p>
                                                        </div>
                                                        <div className='col-md-2 text-center n0-pd'>
                                                            <h6>AED 14.00</h6>
                                                            <div className='icon-add-product'>
                                                                <FontAwesomeIcon icon={faPlusCircle} />
                                                            </div>
                                                            <h6 className='old-price'>AED 14.00</h6>

                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- Box For Restaurant --> */}
                                                <div className='col-md-6 box-restaurant-add' onClick={this._togglePopup.bind(this)}>
                                                    <div className='row'>
                                                        <div className='col-md-2 n0-pd-r'>
                                                            <img src='https://images.deliveryhero.io/image/talabat/MenuItems/vigilante_fajita_bom_637198969473955249.jpg?width=68&height=60' />
                                                        </div>
                                                        <div className='col-md-8 border-bt'>
                                                            <h2>Vigilante Fajita Bombs</h2>
                                                            <p>Shredded chicken with cheese, pickled jalapenos, sweet corn, and kick a$$ mexican spices rolled into bite-sized bombs and then deep fried.</p>
                                                        </div>
                                                        <div className='col-md-2 text-center n0-pd'>
                                                            <h6>AED 14.00</h6>
                                                            <div className='icon-add-product'>
                                                                <FontAwesomeIcon icon={faPlusCircle} />
                                                            </div>
                                                            <h6 className='old-price'>AED 14.00</h6>

                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- Box For Restaurant --> */}
                                                <div className='col-md-6 box-restaurant-add' onClick={this._togglePopup.bind(this)}>
                                                    <div className='row'>
                                                        <div className='col-md-2 n0-pd-r'>
                                                            <img src='https://images.deliveryhero.io/image/talabat/MenuItems/vigilante_fajita_bom_637198969473955249.jpg?width=68&height=60' />
                                                        </div>
                                                        <div className='col-md-8 border-bt'>
                                                            <h2>Vigilante Fajita Bombs</h2>
                                                            <p>Shredded chicken with cheese, pickled jalapenos, sweet corn, and kick a$$ mexican spices rolled into bite-sized bombs and then deep fried.</p>
                                                        </div>
                                                        <div className='col-md-2 text-center n0-pd'>
                                                            <h6>AED 14.00</h6>
                                                            <div className='icon-add-product'>
                                                                <FontAwesomeIcon icon={faPlusCircle} />
                                                            </div>
                                                            <h6 className='old-price'>AED 14.00</h6>

                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- Box For Restaurant --> */}
                                                <div className='col-md-6 box-restaurant-add' onClick={this._togglePopup.bind(this)}>
                                                    <div className='row'>
                                                        <div className='col-md-2 n0-pd-r'>
                                                            <img src='https://images.deliveryhero.io/image/talabat/MenuItems/vigilante_fajita_bom_637198969473955249.jpg?width=68&height=60' />
                                                        </div>
                                                        <div className='col-md-8 border-bt'>
                                                            <h2>Vigilante Fajita Bombs</h2>
                                                            <p>Shredded chicken with cheese, pickled jalapenos, sweet corn, and kick a$$ mexican spices rolled into bite-sized bombs and then deep fried.</p>
                                                        </div>
                                                        <div className='col-md-2 text-center n0-pd'>
                                                            <h6>AED 14.00</h6>
                                                            <div className='icon-add-product'>
                                                                <FontAwesomeIcon icon={faPlusCircle} />
                                                            </div>
                                                            <h6 className='old-price'>AED 14.00</h6>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div className='cart-box' id='Cart_box'>
                                                <h3>
                                                    Your Cart <span>(2342)</span>
                                                </h3>
                                                <div className='box-details'>
                                                <Tabs defaultActiveKey="DELIVERY" id="Tabs_Proceed">
                                                    <Tab eventKey="DELIVERY" title={"DELIVERY"}>
                                                        <ul>
                                                            <li>
                                                                <p><span className='count-order'>3</span> Cypriot jumbo Pita <FontAwesomeIcon icon={faPen} /> 
                                                                <>
                                                                    {['top'].map((placement) => (
                                                                        <>
                                                                        <OverlayTrigger
                                                                            key={1.34232432}
                                                                            placement={placement}
                                                                            overlay={
                                                                            <Tooltip id={`tooltip-${placement}`}>
                                                                                Add Message For Order <strong>{placement}</strong>.
                                                                            </Tooltip>
                                                                            }
                                                                        >                                                                            
                                                                            <FontAwesomeIcon icon={faInfoCircle} variant="secondary">Tooltip on {placement}</FontAwesomeIcon>
                                                                        </OverlayTrigger>{' '}
                                                                        </>
                                                                    ))}
                                                                </>
                                                                </p>
                                                                <span>$8.70 <FontAwesomeIcon icon={faTimes} /></span>
                                                            </li>
                                                            <li>
                                                                <p><span className='count-order'>4</span> Cypriot jumbo Pita <FontAwesomeIcon icon={faPen} /> 
                                                                <>
                                                                    {['top'].map((placement) => (
                                                                        <>
                                                                        <OverlayTrigger
                                                                            key={2.3243432}
                                                                            placement={placement}
                                                                            overlay={
                                                                            <Tooltip id={`tooltip-${placement}`}>
                                                                              Add Message For Order <strong>{placement}</strong>.
                                                                            </Tooltip>
                                                                            }
                                                                        >                                                                            
                                                                            <FontAwesomeIcon icon={faInfoCircle} variant="secondary">Tooltip on {placement}</FontAwesomeIcon>
                                                                        </OverlayTrigger>{' '}
                                                                        </>
                                                                    ))}
                                                                </>
                                                                </p>
                                                                <span>$8.70 <FontAwesomeIcon icon={faTimes} /></span>
                                                            </li>
                                                            <li>
                                                                <p><span className='count-order'>7</span> Cypriot jumbo Pita <FontAwesomeIcon icon={faPen} />
                                                                <>
                                                                    {['top'].map((placement) => (
                                                                        <>
                                                                        <OverlayTrigger
                                                                            key={3.234234234}
                                                                            placement={placement}
                                                                            overlay={
                                                                            <Tooltip id={`tooltip-${placement}`}>
                                                                                Add Message For Order <strong>{placement}</strong>.
                                                                            </Tooltip>
                                                                            }
                                                                        >                                                                            
                                                                            <FontAwesomeIcon icon={faInfoCircle} variant="secondary">Tooltip on {placement}</FontAwesomeIcon>
                                                                        </OverlayTrigger>{' '}
                                                                        </>
                                                                    ))}
                                                                </>
                                                                </p>
                                                                <span>$8.70 <FontAwesomeIcon icon={faTimes} /></span>
                                                            </li>
                                                        </ul>
                                                    </Tab>
                                                    <Tab eventKey="TAKEWAY" title={"TAKEWAY"}>
                                                        <ul>
                                                            <li>
                                                                <p><span className='count-order'>7</span>  Cypriot jumbo  <FontAwesomeIcon icon={faPen} /> </p>
                                                                <span>$18.70 <FontAwesomeIcon icon={faTimes} /></span>
                                                            </li>
                                                            <li>
                                                                <p><span className='count-order'>7</span>  Pork Doner <FontAwesomeIcon icon={faPen} /> </p>
                                                                <span>$28.70 <FontAwesomeIcon icon={faTimes} /></span>
                                                            </li>
                                                            <li>
                                                                <p><span className='count-order'>7</span>  Cypriot jumbo Pita <FontAwesomeIcon icon={faPen} /> </p>
                                                                <span>$3.70 <FontAwesomeIcon icon={faTimes} /></span>
                                                            </li>
                                                        </ul>
                                                    </Tab>
                                                    <Tab eventKey="INSIDE" title={"INSIDE"}>
                                                         <ul>
                                                            <li>
                                                                <p><span className='count-order'>7</span>  Pork Doner  <FontAwesomeIcon icon={faPen} /> </p>
                                                                <span>$13.70 <FontAwesomeIcon icon={faTimes} /></span>
                                                            </li>
                                                            <li>
                                                                <p><span className='count-order'>7</span>  Pork Doner <FontAwesomeIcon icon={faPen} /> </p>
                                                                <span>$12.70 <FontAwesomeIcon icon={faTimes} /></span>
                                                            </li>
                                                            <li>
                                                                <p><span className='count-order'>7</span>  Cypriot jumbo Pita <FontAwesomeIcon icon={faPen} /> </p>
                                                                <span>$13.70 <FontAwesomeIcon icon={faTimes} /></span>
                                                            </li>
                                                        </ul>
                                                    </Tab>
                                                </Tabs>
                                                    {/* <a className='head'>Vigilante Mexican Food</a>
                                                     <div className='data-product'>
                                                        <NumericInput mobile min={0} max={9} value={2} />
                                                        <b className="ng-binding">
                                                            Barbacoa Beef Brisket Burrito&nbsp;
                                                        <FontAwesomeIcon icon={faInfoCircle} />
                                                        </b>
                                                        <div className='data-product-pirce'>
                                                            <span>204.00</span>
                                                            <a className='remove-product'>
                                                                <FontAwesomeIcon icon={faMinusCircle} />
                                                            </a>

                                                        </div>
                                                    </div> */}
                                                    <table className="table table-condensed">
                                                        <tbody>
                                                            <tr className="text-75 f-14">
                                                                <td>Subtotal</td>
                                                                <td className="text-right price ng-binding">AED 136.00</td>
                                                            </tr>

                                                            <tr className="text-75 f-14" >
                                                                <td>
                                                                    <b className="ng-binding ng-hide"></b>
                                                                    <span>Delivery Fee</span>
                                                                </td>
                                                                <td className="text-right price relative">
                                                                    <span className="tgo-del ng-binding ng-hide alignr">AED 0.00</span>
                                                                </td>
                                                            </tr>
                                                            <tr className="text-75 f-14" >
                                                                <td>
                                                                    <b className="ng-binding ng-hide"></b>
                                                                    <span>tax</span>
                                                                </td>
                                                                <td className="text-right price relative">
                                                                    <span className="tgo-del ng-binding ng-hide alignr">AED 5.00</span>
                                                                </td>
                                                            </tr>
                                                            <tr className="text-75 f-14" >
                                                                <td>
                                                                    <b className="ng-binding ng-hide"></b>
                                                                    <span>packaging</span>
                                                                </td>
                                                                <td className="text-right price relative">
                                                                    <span className="tgo-del ng-binding ng-hide alignr">AED 1.95</span>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td>
                                                                    <b className="f-14">Total Amount</b></td>
                                                                <td className="text-right price"><b className="f-14 ng-binding">AED 136.00</b></td>
                                                            </tr>
                                                        </tbody>                                                      
                                                    </table>
                                                    <Form className='from-addComment '>
                                                        <textarea rows="4"  cols="10" placeholder='Add Comment '></textarea>
                                                    </Form>
                                                    <>
                                                        <Button variant="success">Proceed to Checkout</Button>
                                                    </>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="Reviews" title={<span><FontAwesomeIcon icon={faComment} /> Reviews</span>}>
                                    <div className='text-center section-rate'>
                                        <h2> <span>(116) Reviews</span></h2>
                                        <div className='rate'>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStarHalf} />    
                                            <span>4.5</span>
                                        </div>
                                        <div className='rate'>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStarHalf} />    
                                            <span>3.5</span>
                                        </div>
                                        <div className='rate'>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />                                            
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />                                            
                                            <span>5</span>
                                        </div>
                                        <div className='rate'>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStarHalf} />    
                                            <span>4.5</span>
                                        </div>
                                        <div className='rate'>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />                                            
                                            <span>4</span>
                                        </div>
                                        <div className='rate'>
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStar} />
                                            <FontAwesomeIcon icon={faStarHalf} />    
                                            <span>3.5</span>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="Info" title={<span><FontAwesomeIcon icon={faInfoCircle} /> Info</span>}>
                                    <table className="table table-condensed">
                                        <tbody>
                                            <tr className="text-75 f-14">
                                                <td>Minimum Order Amount</td>
                                                <td className="text-right price ng-binding">AED 0.00</td>
                                            </tr>

                                            <tr className="text-75 f-14" >
                                                <td>
                                                    <b className="ng-binding ng-hide"></b>
                                                    <span>Delivery Time</span>
                                                </td>
                                                <td className="text-right price relative">
                                                    <span className="tgo-del ng-binding ng-hide alignr">37 mins</span>
                                                </td>
                                            </tr>
                                            <tr className="text-75 f-14" >
                                                <td>
                                                    <b className="ng-binding ng-hide"></b>
                                                    <span>Service Charge</span>
                                                </td>
                                                <td className="text-right price relative">
                                                    <span className="tgo-del ng-binding ng-hide alignr">Yes</span>
                                                </td>
                                            </tr>
                                            <tr className="text-75 f-14" >
                                                <td>
                                                    <b className="ng-binding ng-hide"></b>
                                                    <span>Rating</span>
                                                </td>
                                                <td className="text-right price relative">
                                                    <span className="tgo-del ng-binding ng-hide alignr">Very good</span>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>
                                                    <b className="f-14">Cuisines</b></td>
                                                <td className="text-right price"><b className="f-14 ng-binding">American,Burgers</b></td>
                                            </tr>
                                        </tbody>                                                      
                                    </table>
                                </Tab>
                            </Tabs>
                        </div>
                        <div className='col-md-4'></div>
                    </div>
                    {/* popups */}
                    {this.state.showPopup ?
                        <>
                        <div className='cover' onClick={this._ClosePopup.bind(this)}></div>
                        <div className='Pupops-Products-data '>
                            <div className='row header'>
                                <div className='col-md-8'>
                                    <p>Add Item Choices</p>
                                </div>
                                <div className='col-md-4 text-right '>
                                    <FontAwesomeIcon icon={faTimes} onClick={this._ClosePopup.bind(this)} />
                                </div>
                            </div>                            
                            <section className='section-popupd-top'>
                                <div className='data-product'>
                                    <h3>Vigilante Fajita Bombs</h3>
                                    <NumericInput mobile min={0} max={9} value={2} />                                   
                                    <div className='data-product-pirce'>
                                        <span>204.00$</span>                                        
                                    </div>
                                </div>
                            </section>
                            <section>
                                <Form>
                                    <div className='box-input-radio'>
                                        <p className='title-section'>Your Choice of 1st Burger: <span>(Choose 1)</span></p>
                                        <label>
                                            <input type="radio" name="radio5996078" id="catradio102705390"  className="ng-pristine ng-untouched ng-valid ng-not-empty ng-valid-required"/>
                                                <span></span>
                                                Shack Burger&nbsp;
                                                <span ng-show="::(choice.opr != -1)" className="ng-hide">
                                                    (<del className="ng-binding">-1.00</del>)
                                                </span>
                                                    &nbsp;
                                                <span ng-show="choice.pr" className="ng-binding ng-hide">(0.00)</span>                                                
                                        </label>
                                        <label>
                                            <input type="radio" name="radio5996078" id="catradio102705390"  className="ng-pristine ng-untouched ng-valid ng-not-empty ng-valid-required"/>
                                                <span></span>
                                                Shack Burger&nbsp;
                                                <span ng-show="::(choice.opr != -1)" className="ng-hide">
                                                    (<del className="ng-binding">-1.00</del>)
                                                </span>
                                                    &nbsp;
                                                <span ng-show="choice.pr" className="ng-binding ng-hide">(0.00)</span>                                                
                                        </label>
                                        <label>
                                            <input type="radio" name="radio5996078" id="catradio102705390"  className="ng-pristine ng-untouched ng-valid ng-not-empty ng-valid-required"/>
                                                <span></span>
                                                Shack Burger&nbsp;
                                                <span ng-show="::(choice.opr != -1)" className="ng-hide">
                                                    (<del className="ng-binding">-1.00</del>)
                                                </span>
                                                    &nbsp;
                                                <span ng-show="choice.pr" className="ng-binding ng-hide">(0.00)</span>                                                
                                        </label>
                                        <label>
                                        <input type="radio" name="radio5996078" id="catradio102705390"  className="ng-pristine ng-untouched ng-valid ng-not-empty ng-valid-required"/>
                                            <span></span>
                                            Shack Burger&nbsp;
                                            <span ng-show="::(choice.opr != -1)" className="ng-hide">
                                                (<del className="ng-binding">-1.00</del>)
                                            </span>
                                                &nbsp;
                                            <span ng-show="choice.pr" className="ng-binding ng-hide">(0.00)</span>                                                
                                    </label>
                                    </div>
                                    <div className='box-input-checkbox'>
                                        <p className='title-section'>Your Choice of 1st Burger: <span>(Choose 1)</span></p>
                                        <label>
                                            <input type="checkbox" name="radio5996078" id="catradio102705390"  className="ng-pristine ng-untouched ng-valid ng-not-empty ng-valid-required"/>
                                                <span></span>
                                                Shack Burger&nbsp;
                                                <span ng-show="::(choice.opr != -1)" className="ng-hide">
                                                    (<del className="ng-binding">-1.00</del>)
                                                </span>
                                                    &nbsp;
                                                <span ng-show="choice.pr" className="ng-binding ng-hide">(0.00)</span>                                                
                                        </label>
                                        <label>
                                            <input type="checkbox" name="radio5996078" id="catradio102705390"  className="ng-pristine ng-untouched ng-valid ng-not-empty ng-valid-required"/>
                                                <span></span>
                                                Shack Burger&nbsp;
                                                <span ng-show="::(choice.opr != -1)" className="ng-hide">
                                                    (<del className="ng-binding">-1.00</del>)
                                                </span>
                                                    &nbsp;
                                                <span ng-show="choice.pr" className="ng-binding ng-hide">(0.00)</span>                                                
                                        </label>
                                        <label>
                                            <input type="checkbox" name="radio5996078" id="catradio102705390"  className="ng-pristine ng-untouched ng-valid ng-not-empty ng-valid-required"/>
                                                <span></span>
                                                Shack Burger&nbsp;
                                                <span ng-show="::(choice.opr != -1)" className="ng-hide">
                                                    (<del className="ng-binding">-1.00</del>)
                                                </span>
                                                    &nbsp;
                                                <span ng-show="choice.pr" className="ng-binding ng-hide">(0.00)</span>                                                
                                        </label>
                                        <label>
                                        <input type="checkbox" name="radio5996078" id="catradio102705390"  className="ng-pristine ng-untouched ng-valid ng-not-empty ng-valid-required"/>
                                            <span></span>
                                            Shack Burger&nbsp;
                                            <span ng-show="::(choice.opr != -1)" className="ng-hide">
                                                (<del className="ng-binding">-1.00</del>)
                                            </span>
                                                &nbsp;
                                            <span ng-show="choice.pr" className="ng-binding ng-hide">(0.00)</span>                                                
                                    </label>
                                    </div>
                                    <div className='box-input-checkbox'>
                                        <p className='title-section'>Your Choice of 1st Burger: <span>(Choose 1)</span></p>
                                        <label>
                                            <input type="checkbox" name="radio5996078" id="catradio102705390"  className="ng-pristine ng-untouched ng-valid ng-not-empty ng-valid-required"/>
                                                <span></span>
                                                Shack Burger&nbsp;
                                                <span ng-show="::(choice.opr != -1)" className="ng-hide">
                                                    (<del className="ng-binding">-1.00</del>)
                                                </span>
                                                    &nbsp;
                                                <span ng-show="choice.pr" className="ng-binding ng-hide">(0.00)</span>                                                
                                        </label>
                                        <label>
                                            <input type="checkbox" name="radio5996078" id="catradio102705390"  className="ng-pristine ng-untouched ng-valid ng-not-empty ng-valid-required"/>
                                                <span></span>
                                                Shack Burger&nbsp;
                                                <span ng-show="::(choice.opr != -1)" className="ng-hide">
                                                    (<del className="ng-binding">-1.00</del>)
                                                </span>
                                                    &nbsp;
                                                <span ng-show="choice.pr" className="ng-binding ng-hide">(0.00)</span>                                                
                                        </label>
                                        <label>
                                            <input type="checkbox" name="radio5996078" id="catradio102705390"  className="ng-pristine ng-untouched ng-valid ng-not-empty ng-valid-required"/>
                                                <span></span>
                                                Shack Burger&nbsp;
                                                <span ng-show="::(choice.opr != -1)" className="ng-hide">
                                                    (<del className="ng-binding">-1.00</del>)
                                                </span>
                                                    &nbsp;
                                                <span ng-show="choice.pr" className="ng-binding ng-hide">(0.00)</span>                                                
                                        </label>
                                        <label>
                                        <input type="checkbox" name="radio5996078" id="catradio102705390"  className="ng-pristine ng-untouched ng-valid ng-not-empty ng-valid-required"/>
                                            <span></span>
                                            Shack Burger&nbsp;
                                            <span ng-show="::(choice.opr != -1)" className="ng-hide">
                                                (<del className="ng-binding">-1.00</del>)
                                            </span>
                                                &nbsp;
                                            <span ng-show="choice.pr" className="ng-binding ng-hide">(0.00)</span>                                                
                                    </label>
                                    </div>
                                    <div className='box-input-checkbox'>
                                        <p className='title-section'>Your Choice of 1st Burger: <span>(Choose 1)</span></p>
                                        <label>
                                            <input type="checkbox" name="radio5996078" id="catradio102705390"  className="ng-pristine ng-untouched ng-valid ng-not-empty ng-valid-required"/>
                                                <span></span>
                                                Shack Burger&nbsp;
                                                <span ng-show="::(choice.opr != -1)" className="ng-hide">
                                                    (<del className="ng-binding">-1.00</del>)
                                                </span>
                                                    &nbsp;
                                                <span ng-show="choice.pr" className="ng-binding ng-hide">(0.00)</span>                                                
                                        </label>
                                        <label>
                                            <input type="checkbox" name="radio5996078" id="catradio102705390"  className="ng-pristine ng-untouched ng-valid ng-not-empty ng-valid-required"/>
                                                <span></span>
                                                Shack Burger&nbsp;
                                                <span ng-show="::(choice.opr != -1)" className="ng-hide">
                                                    (<del className="ng-binding">-1.00</del>)
                                                </span>
                                                    &nbsp;
                                                <span ng-show="choice.pr" className="ng-binding ng-hide">(0.00)</span>                                                
                                        </label>
                                        <label>
                                            <input type="checkbox" name="radio5996078" id="catradio102705390"  className="ng-pristine ng-untouched ng-valid ng-not-empty ng-valid-required"/>
                                                <span></span>
                                                Shack Burger&nbsp;
                                                <span ng-show="::(choice.opr != -1)" className="ng-hide">
                                                    (<del className="ng-binding">-1.00</del>)
                                                </span>
                                                    &nbsp;
                                                <span ng-show="choice.pr" className="ng-binding ng-hide">(0.00)</span>                                                
                                        </label>
                                        <label>
                                        <input type="checkbox" name="radio5996078" id="catradio102705390"  className="ng-pristine ng-untouched ng-valid ng-not-empty ng-valid-required"/>
                                            <span></span>
                                            Shack Burger&nbsp;
                                            <span ng-show="::(choice.opr != -1)" className="ng-hide">
                                                (<del className="ng-binding">-1.00</del>)
                                            </span>
                                                &nbsp;
                                            <span ng-show="choice.pr" className="ng-binding ng-hide">(0.00)</span>                                                
                                    </label>
                                    </div>
                                    <div className='text-center btn-add-cart'>
                                        <Button variant="success">
                                            <img src="https://www.talabat.com/images/talabat/icon_cart.svg" width="20"/>
                                            Add To Cart
                                        </Button>
                                    </div>                                    
                                </Form>
                            </section>

                        </div>
                        </>
                        : null
                    }
                </div>
            </div>
        )
    }
}
export default restaurant;