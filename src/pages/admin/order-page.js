import React, { Component } from 'react'
import AdminTheme from '../../theme/admin'
import Orders from '../../components/orders'

export default class OrderPage extends Component {
    render() {
        return (
            <div>
               <AdminTheme>
                   <Orders></Orders>
               </AdminTheme>
            </div>
        )
    }
}
