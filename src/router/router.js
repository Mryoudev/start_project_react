import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import DashboardPage from "../pages/dashboard-page ";
import Error404Page from "../pages/Error 404 page";
import RegisterPage from "../pages/register-page";
import LgPage from "../pages/login-page";
import { AuthProvider } from "../shared/auth/Auth-context";
import HomePage from "../pages/home-page";
import ManagerCategoriesPage from "../pages/managercategories-page";
import ManagerProductPage from "../pages/managerproduct-page";
import OrderPage from "../pages/order-page";
import ShoppingCartPage from "../pages/shoppingcart-page";
export default function RouterApp() {
  return (
    
    <Router>
<AuthProvider>
        <Switch>
        <Route exact path="/" component={HomePage}/>
            <Route path="/register" component={RegisterPage}/>
            <Route path="/admin" component={LgPage}/>
            <Route path="/dash" component={DashboardPage}/>
            <Route path="/categories" component={ManagerCategoriesPage} />
            <Route path="/productes" component={ManagerProductPage} />
            <Route path="/orders" component={OrderPage} />
            <Route path="/shoppingcart" component={ShoppingCartPage} />
            <Route path="*" component={Error404Page} />
        
        </Switch>
        </AuthProvider>
    </Router>
    
  );
}