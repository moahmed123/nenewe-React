import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import SearchHeader from './Section/SearchHeader';
import DeliveryService from './Section/DeliveryService'

// Actions
import { exampleAction } from '../../actions/exampleActions'

@connect((store) => {
    return {
        example: store.example,
    }
})
class PageHome extends Component {

    componentDidMount() {
        document.title = "Home";
    }

    render() {
        if(!this.props.example) {
            // Dispatch action
            this.props.dispatch(exampleAction(true));
        }

        // Alert the store
        console.log(this.props.example);

        return (
            <div> 
                <SearchHeader/>
                <DeliveryService/>
            </div>
        )
    }
}

export default PageHome;