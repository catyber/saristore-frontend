import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import ListProductsComponent from './ListProductsComponent';
import ProductComponent from "./ProductComponent";

class StoreApp extends Component {
    render() {
        return (
            <Router>
                <>
                    <h1>SariStore Application</h1>
                    <Switch>
                        <Route path="/" exact component={ListProductsComponent} />
                        <Route path="/products" exact component={ListProductsComponent} />
                        <Route path="/products/:id" component={ProductComponent} />
                    </Switch>
                </>
            </Router>
        )
    }
}

export default StoreApp