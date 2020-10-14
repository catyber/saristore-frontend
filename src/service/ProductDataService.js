import axios from 'axios'

const STORE = 'sweetMixByTetay'
const PRODUCT_API_URL = 'http://localhost:8080'
const STORE_API_URL = `${PRODUCT_API_URL}/stores/${STORE}`

class ProductDataService {

    retrieveAllProducts(storeName) {
        return axios.get(`${STORE_API_URL}/products`);
    }

    deleteProduct(storeName, id) {
        //console.log('executed service')
        return axios.delete(`${STORE_API_URL}/products/${id}`);
    }

    retrieveProduct(storeName, id) {
        return axios.get(`${STORE_API_URL}/products/${id}`);
    }

    updateProduct(storeName, id, product) {
        return axios.put(`${STORE_API_URL}/products/${id}`, product);
    }
  
    createProduct(storeName, product) {
        return axios.post(`${STORE_API_URL}/products/`, product);
    }
}

export default new ProductDataService()