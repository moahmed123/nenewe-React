import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker'



class loginPageTwo extends Component {
    constructor(props) {
        super(props);        
        this._restaurantChange = this._restaurantChange.bind(this);
        this._hotelChange = this._hotelChange.bind(this);
        this._cafeChange = this._cafeChange.bind(this);
        this._noTax = this._noTax.bind(this);
        this._yesTax = this._yesTax.bind(this);
        this._noDelivery = this._noDelivery .bind(this);
        this._yesDelivery = this._yesDelivery.bind(this);   
        this._CheckedTimeTwo = this._CheckedTimeTwo.bind(this);
        this._CheckedTimeThree = this._CheckedTimeThree.bind(this);   
        
        
        this.state = {            
            restaurantIsChecked: false,
            cafeIsChecked: false,
            hotelIsChecked: false,
            otherTaxisChecked: false,
            otherDeliveryisChecked: false,
            place: null,
            dateOne: new Date(),
            dateTwo: new Date(),
            dateThree: new Date(),
            dateFour: new Date(),
            dateFive: new Date(),
            dateSix: new Date(),
            disabledTimeTwo: true,
            disabledTimeThree: true 
        }
    }  
    onChangeOne = date => this.setState({ dateOne:date })
    onChangeTwo = date => this.setState({ dateTwo:date })
    onChangeThree = date => this.setState({ dateThree:date })
    onChangeFour = date => this.setState({ dateFour:date })
    onChangeFive = date => this.setState({ dateFive:date })
    onChangeSix = date => this.setState({ dateSix:date })

    _restaurantChange() {
        this.setState({
            restaurantIsChecked: event.target.checked,
            cafeIsChecked: false,
            hotelIsChecked: false
        })
    }
    _cafeChange() {
        console.log('Cafe' + event.target.checked)
        this.setState({
            cafeIsChecked: event.target.checked,
            restaurantIsChecked: false,
            hotelIsChecked: false
        })
    }
    _hotelChange() {
        this.setState({
            cafeIsChecked: false,
            restaurantIsChecked: false,
            hotelIsChecked: event.target.checked
        })
    }
    _yesTax() {
        this.setState({
            otherTaxisChecked: event.target.checked
        })
    }
    _noTax() {
        console.log(!event.target.checked)
        this.setState({
            otherTaxisChecked: !event.target.checked
        })
    }
    _yesDelivery(){        
        this.setState({
            otherDeliveryisChecked: event.target.checked
        })
    }
    _noDelivery() {
        console.log(!event.target.checked)
        this.setState({
            otherDeliveryisChecked: !event.target.checked
        })
    }   
    _CheckedTimeTwo(){        
        this.setState({
            disabledTimeTwo: !event.target.checked
        })
    }
    _CheckedTimeThree(){
        this.setState({
            disabledTimeThree: !event.target.checked
        })
    }
    render() {        
        return (
            <div className="container">
                <div className='login-page-one'>
                    <Form>
                        <Form.Row>
                            <Form.Group controlId="formGridState" className='form-group-currency'>
                                <Form.Label>Currency</Form.Label>
                                <Form.Control as="select">
                                    <option>AUD</option>
                                    <option>BGN</option>
                                    <option>CAD</option>
                                    <option>BRL </option>
                                    <option>CHF</option>
                                    <option>CNY</option>
                                    <option>CZK</option>
                                    <option>DKK</option>
                                    <option>EUR</option>
                                    <option>GBP </option>
                                    <option>HKD </option>
                                    <option>HRK </option>
                                    <option>HUF</option>
                                    <option>IDR</option>
                                    <option>ILS</option>
                                    <option>INR</option>
                                    <option>JPY</option>
                                    <option>KRW</option>
                                    <option>MXN</option>
                                    <option>MYR</option>
                                    <option>NOK</option>
                                    <option>NZD</option>
                                    <option>PHP</option>
                                    <option>PLN</option>
                                    <option>RON</option>
                                    <option>RUB</option>
                                    <option>SEK</option>
                                    <option>SGD</option>
                                    <option>THB</option>
                                    <option>TRY</option>
                                    <option>USD</option>
                                    <option>ZAR</option>          
                                </Form.Control>                                
                            </Form.Group>
                        </Form.Row>  
                        <div className='store-official'>
                            <h5>is there a tax</h5>
                            <input type="radio" name="radio59960781"  onChange={this._yesTax}/>
                            <label>yes</label>
                            <input type="radio" name="radio59960781" onChange={this._noTax} />
                            <label>no</label>
                        </div>
                        {
                            (this.state.otherTaxisChecked) ?
                                <div className='tax-ckecked'>
                                    <Form.Row>
                                        <Form.Group controlId="formGridEmail">
                                            <Form.Control type="text" placeholder="%" />
                                        </Form.Group>                                                                        
                                    </Form.Row>
                                    <h6>is there a tax</h6>
                                    <input type="radio" name="radio59960781"/>
                                    <label>customer</label>
                                    <input type="radio" name="radio59960781" />
                                    <label>restaurant</label>
                                </div>
                                : null
                        }    

                        <div className='Calendar'>
                            <input type='checkbox' checked className='input-checked'/>
                            <h6> duly Time 1 </h6>
                            <span> from </span>
                            <TimePicker                                
                                onChange={this.onChangeOne}
                                value={this.state.dateOne}
                            />
                            <span> to </span>
                            <TimePicker                                
                                onChange={this.onChangeTwo}
                                value={this.state.dateTwo}
                            />
                            
                        </div>   
                        <div className='Calendar'>
                            <input type='checkbox' onChange = {this._CheckedTimeTwo} className='input-checked'/>
                            <h6> duly Time 2 </h6>
                            <span> from </span>
                            <TimePicker
                                disabled = {this.state.disabledTimeTwo}
                                onChange={this.onChangeThree}
                                value={this.state.dateThree}
                            />
                            <span> to </span>
                            <TimePicker
                                disabled = {this.state.disabledTimeTwo}
                                onChange={this.onChangeFour}
                                value={this.state.dateFour}
                            />
                        </div>   
                        <div className='Calendar'>
                            <input type='checkbox' onChange = {this._CheckedTimeThree} className='input-checked'/>
                            <h6> duly Time 3 </h6>
                            <span> from </span>
                            <TimePicker
                                disabled = {this.state.disabledTimeThree}
                                onChange={this.onChangeFive}
                                value={this.state.dateFive}
                            />
                            <span> to </span>
                            <TimePicker
                                disabled = {this.state.disabledTimeThree}
                                onChange={this.onChangeSix}
                                value={this.state.dateSix}
                            />
                        </div>                                                                                  
                        {/* Table  */}
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>sun</th>
                                    <th>mon</th>
                                    <th>tue</th>
                                    <th>wed</th>
                                    <th>thu</th>
                                    <th>fri</th>
                                    <th>sat</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>duty time 1</td>
                                    <td>
                                        <span>7:00</span>
                                        <span>12:30</span>
                                    </td>
                                    <td>
                                        <span>7:00</span>
                                        <span>12:30</span>
                                    </td>
                                    <td>
                                        <span>7:00</span>
                                        <span>12:30</span>
                                    </td>
                                    <td>
                                        <span>7:00</span>
                                        <span>12:30</span>
                                    </td>
                                    <td>
                                    <span>7:00</span>
                                        <span>12:30</span>
                                    </td>
                                    <td>
                                    <span>7:00</span>
                                        <span className='notwork'>notwork</span>
                                    </td>
                                    <td className='notwork'>
                                        <span>notwork</span>
                                        <span>notwork</span>
                                    </td>                                    
                                </tr>
                                <tr>
                                    <td>duty time 2</td>
                                    <td>
                                        <span>7:00</span>
                                        <span>12:30</span>
                                    </td>
                                    <td>
                                        <span>7:00</span>
                                        <span>12:30</span>
                                    </td>
                                    <td>
                                        <span>7:00</span>
                                        <span>12:30</span>
                                    </td>
                                    <td>
                                        <span>7:00</span>
                                        <span>12:30</span>
                                    </td>
                                    <td>
                                    <span>7:00</span>
                                        <span>12:30</span>
                                    </td>
                                    <td>
                                    <span>7:00</span>
                                        <span>12:30</span>
                                    </td>
                                    <td className='notwork'>
                                        <span>notwork</span>
                                        <span>notwork</span>
                                    </td>  
                                </tr>                                                                                      
                            </tbody>
                        </Table>
                        {/* End Table */}

                        <div className='store-official'>
                            <h5>is there a delivery service?</h5>
                            <input type="radio" name="radio59960781"  onChange={this._yesDelivery}/>
                            <label>yes</label>
                            <input type="radio" name="radio59960781" onChange={this._noDelivery} />
                            <label>no</label>
                        </div>
                        {
                            (this.state.otherDeliveryisChecked) ?
                            <>
                                <div className='Delivery-checked'>                                                                       
                                    <input type="radio" name="radio599607812"/>
                                    <label>ifyes</label>
                                    <input type="radio" name="radio599607812" />
                                    <label>ourself</label>
                                    <input type="radio" name="radio599607812" />
                                    <label>other one</label>
                                    <input type="radio" name="radio599607812" />
                                    <label>both</label>
                                </div>                               
                            </>
                                : null
                        }     
                         <Form.Row className='form-delivery'>
                                    <Form.Group controlId="formGridEmail">
                                        <Form.Control type="text" placeholder="username" />
                                    </Form.Group>
                                    <Form.Group controlId="formGridEmail">
                                        <Form.Control type="password" placeholder="password" />
                                    </Form.Group>
                                    <Form.Group controlId="formGridEmail">
                                        <Form.Control type="password" placeholder="confirm password" />
                                    </Form.Group>
                                </Form.Row>


                              

                        <Button variant="primary">
                            Save
                        </Button>
                    </Form>
                </div>
            </div>
        )
    }
}
export default loginPageTwo;