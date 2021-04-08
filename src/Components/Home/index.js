import { CircularProgress } from '@material-ui/core';
import React, { useEffect ,useState} from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    // const [loggedInUser, SetLoggedInUser] = useState({});
    const [products , setProducts] = useState([]);
    useEffect(()=>{
        
        const url = 'https://infinite-cove-19847.herokuapp.com/products';
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data))  //This line is done according to module 48.6 
    })

    // place order
    const placeOrder = (productName, productPrice) => {
        
        const eventData = {
          name: productName,
          price: productPrice
        };
    
        const url = "https://infinite-cove-19847.herokuapp.com/addOrders";
    
        fetch(url , {
          method: "POST",
          headers: {
            "content-type" : "application/json"
          },
          body: JSON.stringify(eventData)
        })
        .then(res => console.log("orders response from server" , res))
        // console.log(data);
      };
    // place order end
    return (
        <div className="homeBg py-5">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-6 offset-3">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Search your choice..."/>
                            <span className="input-group-text bg-info text-white" id="basic-addon2">Search</span>
                        </div>
                    </div>
                </div>
                <div className="row">

                {
                        products.length === 0 && <div className='container-fluid text-center mt-5'>
                            <CircularProgress  color="secondary" />

                        </div>
                    }
                    {
                        products.map(product => (
                            <div className="col-md-3 mb-3">
                                <div className="card py-3">
                                    <img src={product.imageURL} className="card-img-top img-fluid" alt="Card img"/>
                                    <div className="card-body">
                                        <h5 className="card-title my-3">{product.name}</h5>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h4>$ {product.price}</h4>
                                            <Link to="/orders" onClick={() => placeOrder(`${product.name}`) } className="btn btn-success">Buy Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;