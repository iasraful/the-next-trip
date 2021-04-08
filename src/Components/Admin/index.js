import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import AddProducts from "./AddProducts";
import ManageProduct from './ManageProduct';

const Admin = () => {
    return (
        <div className="container-fluid row">
            <Router>
                <div className="col-md-3 bg-info h-full">
                    <h2 className="text-center my-3">Grocery Shop</h2>

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/manage-product" className="nav-link text-white px-2 py-2 mb-2 rounded bg-dark">Manage Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/add-product" className="nav-link text-white px-2 py-2 mb-2 rounded bg-dark">Add Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/edit-product" className="nav-link text-white px-2 py-2 mb-2 rounded bg-dark">Edit Product</Link>
                        </li>
                    </ul>                                                                                                     
                </div>  
                <Switch>
                    <Route path="/manage-product">
                        <div className="col-md-9 h-full pt-3">
                            <h3>Manage Product</h3>
                            <ManageProduct />
                        </div>
                    </Route>
                    <Route path="/add-product">
                        <div className="col-md-6 h-full pt-3">
                            <h3>Add Product</h3>
                            <AddProducts />
                        </div>
                    </Route>
                    <Route path="/edit-product">
                        <div className="col-md-6 h-full pt-3">
                            <h3>Edit Product</h3>
                            <AddProducts />
                        </div>
                    </Route>
                </Switch>
            </Router>
            
            
        </div>
    );
};

export default Admin;