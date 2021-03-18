import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-route-dom";
import DashboardPage from '../pages/dashboard-page';
import LmsPage from '../pages/lms-page';
import LoginPage from "../pages/login-page";
import RegisterPage from "../pages/register-page";

export default class Loginpass extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" component={LmsPage} />
                    <Route path="/register" component={RegisterPage} />
                    <Route path="/admin" component={LoginPage} />
                    <Route path="/dash" component={DashboardPage} />
                </Switch>
            </Router>        )
    }
}
