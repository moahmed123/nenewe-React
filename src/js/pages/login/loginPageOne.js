import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import { GoogleComponent } from 'react-google-location';




// const API_KEY = "AIzaSyBrcttrTHNPccmUQ80NN05xkWYN-MDl2rs";

class loginPageOne extends Component {
    constructor(props) {
        super(props);
        this._regionChange = this._regionChange.bind(this);
        this._restaurantChange = this._restaurantChange.bind(this);
        this._hotelChange = this._hotelChange.bind(this);
        this._cafeChange = this._cafeChange.bind(this);
        this._sameOwnerChange = this._sameOwnerChange.bind(this);
        this._otherOwnerChange = this._otherOwnerChange.bind(this);
        this._mySubmitFrom = this._mySubmitFrom.bind(this);
        this.state = {
            RegionIsChecked: false,
            restaurantIsChecked: false,
            cafeIsChecked: false,
            hotelIsChecked: false,
            otherOwnerisChecked: false,
            place: null
        }
    }
    _regionChange(){        
        this.setState({
            RegionIsChecked: event.target.checked 
        })        
    }
    _restaurantChange(){        
        this.setState({
            restaurantIsChecked: event.target.checked,
            cafeIsChecked: false,
            hotelIsChecked: false
        }) 
    }
    _cafeChange(){
        console.log('Cafe' + event.target.checked )
        this.setState({
            cafeIsChecked: event.target.checked,
            restaurantIsChecked: false,            
            hotelIsChecked: false 
        }) 
    }
    _hotelChange(){
        this.setState({
            cafeIsChecked: false,
            restaurantIsChecked: false,            
            hotelIsChecked: event.target.checked
        })
    }
    _otherOwnerChange(){
        this.setState({            
            otherOwnerisChecked: event.target.checked
        })
    }
    _sameOwnerChange(){
        console.log(!event.target.checked)
        this.setState({            
            otherOwnerisChecked: !event.target.checked
        })
    }
    //Submit From 
    _mySubmitFrom() {
        // event.preventDefault();
        
        const URL = window.location.origin + "/continueLogin";
        console.log(URL)
        window.location.replace(URL);
    }
    render() {
        return (
            <div className="container">
                <div className='login-page-one'>
                    <Form>
                        <Form.Row>
                            <Form.Group controlId="formGridState" className = 'lang-site'>
                                <Form.Label>Main Language</Form.Label>
                                <Form.Control as="select">
                                    <option>English</option>
                                    <option>Arabic</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group controlId="formGridState" className = 'lang-site'>
                                <Form.Label>Second Language</Form.Label>
                                <Form.Control as="select">
                                    <option>no need other language</option>
                                    <option>english</option>
                                    <option>arabic</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Location</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>
                        <div >
                            {/* <GoogleComponent
                            
                            apiKey={API_KEY}
                            language={'en'}
                            country={'country:in|country:us'}
                            coordinates={true}
                            // locationBoxStyle={'custom-style'}
                            // locationListStyle={'custom-style-list'}
                            onChange={(e) => { this.setState({ place: e }) }} /> */}
                        </div>
                        <Form.Group id="formGridCheckbox">
                            <Form.Label>Region</Form.Label>
                            <Form.Check type="checkbox" label="does not need becouse the city is small " onChange={this._regionChange}/>
                        </Form.Group>
                        {
                            (!this.state.RegionIsChecked)? 
                                <div className='Region-choose'>
                                    <input type="radio" name="radio5996078" />
                                    <label>North</label>                        
                                    <input type="radio" name="radio5996078" />
                                    <label>South</label>
                                    <input type="radio" name="radio5996078" />
                                    <label>East</label>
                                    <input type="radio" name="radio5996078" />
                                    <label>West</label>
                                    <input type="radio" name="radio5996078" />
                                    <label>Middle</label>                        
                                </div>
                            :
                                null
                        }
                        
                            
                        <div className='type'>
                            <h5>Type</h5>
                            <input type="radio" name="radio59960781" onChange={this._restaurantChange}/>
                            <label>Restaurant</label>
                            <input type="radio" name="radio59960781" onChange={this._cafeChange}/>
                            <label>Cafe/casino</label>
                            <input type="radio" name="radio59960781" onChange={this._hotelChange}/>
                            <label>Hotel</label>                            
                        </div>
                        {
                            (this.state.restaurantIsChecked)?
                                <Form.Row className='Restaurant-from'>
                                    <Form.Group controlId="formGridEmail">
                                        <Form.Control type="text" placeholder="Restaurant name" />
                                    </Form.Group>
                                    <Form.Group controlId="formGridEmail">
                                        <Form.Control type="text" placeholder="Restaurant  name Other Language" />
                                    </Form.Group>
                                    <Form.Group controlId="formGridEmail">
                                        <Form.Control type="text" placeholder="Owner name" />
                                    </Form.Group>
                                    <Form.Group controlId="formGridEmail">
                                        <Form.Control type="phone" placeholder="mobile" />
                                    </Form.Group>
                                    <Form.Group controlId="formGridEmail">
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                </Form.Row>
                            :
                                null
                        }
                            {
                            (this.state.cafeIsChecked)?
                                <Form.Row className='Cafe-from'>
                                    <Form.Group controlId="formGridEmail">
                                        <Form.Control type="text" placeholder="Cafe name" />
                                    </Form.Group>
                                    <Form.Group controlId="formGridEmail">
                                        <Form.Control type="text" placeholder="Cafe name Other Language" />
                                    </Form.Group>
                                    <Form.Group controlId="formGridEmail">
                                        <Form.Control type="text" placeholder="Owner name" />
                                    </Form.Group>
                                    <Form.Group controlId="formGridEmail">
                                        <Form.Control type="phone" placeholder="mobile" />
                                    </Form.Group>
                                    <Form.Group controlId="formGridEmail">
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                </Form.Row>
                            :
                                null
                        }
                            {
                            (this.state.hotelIsChecked)?
                                <Form.Row className='Hotel-from'>
                                    <Form.Group controlId="formGridEmail">
                                        <Form.Control type="text" placeholder="Hotel name" />
                                    </Form.Group>
                                    <Form.Group controlId="formGridEmail">
                                        <Form.Control type="text" placeholder="Hotel name Other Language" />
                                    </Form.Group>
                                    <Form.Group controlId="formGridEmail">
                                        <Form.Control type="text" placeholder="Owner name" />
                                    </Form.Group>
                                    <Form.Group controlId="formGridEmail">
                                        <Form.Control type="phone" placeholder="mobile" />
                                    </Form.Group>
                                    <Form.Group controlId="formGridEmail">
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                </Form.Row>
                            :
                                null
                        }
                        

                        <div className='store-official'>
                            <h5>store official</h5>
                            <input type="radio" name="radio59960781" onChange={this._sameOwnerChange}/>
                            <label>same Owner</label>
                            <input type="radio" name="radio59960781" onChange={this._otherOwnerChange}/>
                            <label>Another one</label>                            
                        </div>
                        {
                            (this.state.otherOwnerisChecked)?
                                <Form.Row>
                                    <Form.Group controlId="formGridEmail">
                                        <Form.Control type="text" placeholder="name" />
                                    </Form.Group>
                                    <Form.Group controlId="formGridEmail">
                                        <Form.Control type="phone" placeholder="mobile" />
                                    </Form.Group>
                                    <Form.Group controlId="formGridEmail">
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                </Form.Row>
                            : null
                        }
                       

                        <Form.Group controlId="formGridAddress2">
                            <Form.Label>license number</Form.Label>
                            <Form.Control placeholder="license" />
                        </Form.Group>

                        <Button variant="primary" onClick={this._mySubmitFrom}>
                            Next
                        </Button>
                    </Form>
                </div>
            </div>
        )
    }
}
export default loginPageOne;