import React, { Component } from 'react'
import Globaldesign from '../components/globaldesign'
import Orders from '../components/orders'

export default class OrderPage extends Component {
    render() {
        return (
            <div>
               <Globaldesign>
                   <Orders></Orders>
               </Globaldesign>
            </div>
        )
    }
}
