import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import ProductDataService from '../service/ProductDataService';

const STORE = 'sweetMixByTetay'

class CourseComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            productName: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }

    componentDidMount() {
        console.log(this.state.id)

        // eslint-disable-next-line
        if (this.state.id == -1) {
            return
        }

        ProductDataService.retrieveProduct(STORE, this.state.id)
            .then(response => this.setState({
                productName: response.data.productName
            }))
    }

    onSubmit(values) {
        let storename = STORE

        let product = {
            id: this.state.id,
            productName: values.productName,
        }

        if (this.state.id === -1) {
            ProductDataService.createProduct(storename, product)
                .then(() => this.props.history.push('/products'))
        } else {
            ProductDataService.updateProduct(storename, this.state.id, product)
                .then(() => this.props.history.push('/products'))
        }

        console.log(values);
    }


    validate(values) {
        let errors = {}
        if (!values.productName) {
            errors.productName = 'Enter a Description'
        } else if (values.productName.length < 5) {
            errors.productName = 'Enter atleast 5 Characters in Product Name'
        }
    
        return errors
    }

    render() {

        let { productName, id } = this.state
    
        return (
            <div>
                <h3>Product</h3>
                <div className="container">
                    <Formik
                        initialValues={{ id, productName }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="productName" component="div" className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Id</label>
                                        <Field className="form-control" type="text" name="id" disabled />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Product Name</label>
                                        <Field className="form-control" type="text" name="productName" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
    
                </div>
            </div>
        )
    }
}

export default CourseComponent