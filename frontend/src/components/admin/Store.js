import React from 'react';
import {Spin, Tabs, message} from "antd";

import Product from "./store/Products";
import AllProducts from "./store/AllProducts";

class Store extends React.Component {

    formRef = React.createRef();

    constructor(props) {
        super(props);
        this.state = {
            activeKey: "2",
            loading: false,
            productDetails: {},
            allProducts: [],
            images: [],
            reportProgress: false
        };
    }

    onTabChange = (activeKey) => {
        this.setState({activeKey});
    }

    //search
    search = (searchKey) => {
        this.setState({loading: true, allProducts: []});
        fetch('/api/store/search-products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({searchKey})
        }).then(response => {
            this.setState({loading: false});
            if (response.status !== 200) {
                throw new Error(response.statusText.toString())
            }
            return response.json();
        }).then(data => {
            data = data.map(product => {
                product.images = [product.images];
                return product;
            });
            this.setState({allProducts: data})
        }).catch(() => {
            this.setState({loading: false, error: true});
        });
    }

    //refill amount
    refill = (amount, productID) => {
        this.setState({loading: true})
        fetch('/api/store/refill', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({productID, amount}),
        })
            .then((response) => {
                this.setState({loading: false})
                if (response.status !== 200) {
                    throw new Error(response.statusText.toString())
                }
                return response.json()
            })
            .then(() => {
                const products = this.state.allProducts;
                const product = products.find(item => item._id === productID);
                product.available = parseInt(product.available, 10) + parseInt(amount);
                this.setState({allProducts: products});
                message.success({
                    content: 'Amount added successfully..!',
                    style: {
                        marginTop: '90vh',
                    },
                })
            })
            .catch(() => {
                this.setState({loading: false})
                message.error({
                    content: 'An error occurred while updating..!',
                    style: {
                        marginTop: '90vh',
                    },
                })
            })
    }

    showProductDetails = (productID) => {
        this.setState({activeKey: "1", loading: true, productDetails: {}});
        fetch('/api/store/get-product-details', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({productID})
        }).then(
            response => {
                this.setState({loading: false});
                if (response.status !== 200) {
                    throw new Error(response.statusText.toString());
                }
                return response.json();
            }
        ).then(data => {
            this.setState({productDetails: data}, () => {
                this.formRef.current.setFieldsValue(this.state.productDetails);
            });
        }).catch(() => {
            this.setState({loading: false});
        });
    }

    showAllProducts = () => {
        this.setState({activeKey: "2"});
        this.getAllProducts();
    }

    getAllProducts = () => {
        this.setState({loading: true, allProducts: []});
        fetch('/api/store/get-products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(
            response => {
                this.setState({loading: false});
                if (response.status !== 200) {
                    throw new Error(response.statusText.toString());
                }
                return response.json();
            }
        ).then(data => {
            this.setState({allProducts: data});
        }).catch(() => {
            this.setState({loading: false});
        });
    }

    deleteProduct = (productID) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            this.setState({loading: true});
            fetch('/api/store/delete-product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({productID})
            }).then(
                response => {
                    this.setState({loading: false});
                    if (response.status !== 200) {
                        throw new Error(response.statusText.toString());
                    }
                    return response.json();
                }
            ).then(() => {
                message.success({
                    content: 'Product deleted successfully..!',
                    style: {
                        marginTop: '90vh',
                    },
                });
                this.getAllProducts();
            }).catch(() => {
                message.error({
                    content: 'Error deleting the product..!',
                    style: {
                        marginTop: '90vh',
                    },
                });
                this.setState({loading: false});
            });
        }
    }

    deleteImage = (image) => {
        const productDetails = this.state.productDetails;
        productDetails.images.splice(productDetails.images.indexOf(image), 1);
        this.setState({productDetails});
    }

    deleteProductDetails = () => {
        this.setState({productDetails: {}});
    }

    addImage = (image) => {
        let productDetails = {
            images: []
        }
        if (Object.keys(this.state.productDetails).length !== 0) {
            productDetails = this.state.productDetails;
        }
        productDetails.images.push(image);
        this.setState({productDetails});
    }

    //when component is load run getallproduct function
    componentDidMount() {
        this.getAllProducts();
    }

    render() {

        return (
            <div>
                <div
                    className='d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom'>
                    <h1 className='h2'>Store Management</h1>
                </div>

                <Tabs activeKey={this.state.activeKey} onChange={this.onTabChange}>

                    <Tabs.TabPane tab="Add Product" key="1">
                        <Spin
                            size="large"
                            tip="Loading..."
                            spinning={this.state.loading}
                            style={{minHeight: '200px'}}
                        >
                            <Product
                                changeTab={this.showAllProducts}
                                productDetails={this.state.productDetails}
                                deleteImage={this.deleteImage}
                                deleteProductDetails={this.deleteProductDetails}
                                addImage={this.addImage}
                                formRef={this.formRef}
                            />
                        </Spin>
                    </Tabs.TabPane>

                    <Tabs.TabPane tab="View Products" key="2">
                        <Spin
                            size="large"
                            tip="Loading..."
                            spinning={this.state.loading}
                            style={{minHeight: '200px'}}>
                            <AllProducts
                                search={this.search}
                                changeTab={this.showProductDetails}
                                products={this.state.allProducts}
                                deteleProduct={this.deleteProduct}
                                refill={this.refill}
                            />
                        </Spin>
                    </Tabs.TabPane>

                </Tabs>
            </div>
        );

    }

}

export default Store;
