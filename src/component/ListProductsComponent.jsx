import React, { Component } from 'react';
import ProductDataService from '../service/ProductDataService';

const STORE = 'sweetMixByTetay'

class ListProductsComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: [],
            message: null
        }
        this.refreshProducts = this.refreshProducts.bind(this)
        this.updateProductClicked = this.updateProductClicked.bind(this)
        this.deleteProductClicked = this.deleteProductClicked.bind(this)
        this.addProductClicked = this.addProductClicked.bind(this)
    }

    componentDidMount() {
        this.refreshProducts();
    }

    refreshProducts() {
        ProductDataService.retrieveAllProducts(STORE)//HARDCODED
            .then(
                response => {
                    console.log(response);
                    this.setState({products: response.data})
                }
            )
    }

    deleteProductClicked(id) {
        ProductDataService.deleteProduct(STORE, id)
            .then(
                response => {
                    this.setState({ message: `Delete of product ${id} successful.` })
                    this.refreshProducts()
                }
            )
    }
    
    updateProductClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/products/${id}`)
    }

    addProductClicked() {
        this.props.history.push(`/products/-1`)
    }

    render() {
        console.log('render')
        return (
            <div className="container">
                <h3>All Products</h3>
                {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Product Name</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.products.map(
                                    product =>
                                        <tr key={product.id}>
                                            <td>{product.id}</td>
                                            <td>{product.productName}</td>
                                            <td><button className="btn btn-success" onClick={() => this.updateProductClicked(product.id)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteProductClicked(product.id)}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                <div className="row">
                    <button className="btn btn-success" onClick={this.addProductClicked}>Add</button>
                </div>
            </div>
        )
    }

}

export default ListProductsComponent