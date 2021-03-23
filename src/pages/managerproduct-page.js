import React, { Component } from 'react'
import Globaldesign from '../components/globaldesign'
import Product from '../components/product'

export default class ManagerProductPage extends Component {
    render() {
        return (
            <div>
                <Globaldesign>
                    <Product></Product>
                </Globaldesign>
            </div>
        )
    }
}


