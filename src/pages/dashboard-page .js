import React, { Component } from 'react'
import Dash from '../components/dash'
import Globaldesign from '../components/globaldesign'
import AuthContext from "../shared/auth/Auth-context"


export default class DashboardPage extends Component {
    render() {
        return (
            <Globaldesign>
<Dash></Dash>
            </Globaldesign>

        )
    }
}
DashboardPage.contextType = AuthContext

