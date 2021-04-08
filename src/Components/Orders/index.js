import React, { useEffect ,useState} from 'react';
import { Link } from "react-router-dom";

const Orders = () => {
  const [orders , setOrders] = useState([]);
    useEffect(()=>{
        const url = 'https://infinite-cove-19847.herokuapp.com/orders';
        fetch(url)
        .then(res => res.json())
        .then(data => setOrders(data))
    })
  return (
    <div className="container py-5">
      <div className="row ">
        <div className="col-md-10 offset-md-1">
          <h3>Orders</h3>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Description</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {
                orders.map(product =>  (
                  <tr>
                    <th>{product.name}</th>
                    <td>{1}</td>
                    <td>{product.price}</td>
                    <button className='btn btn-danger mt-2'>Delate</button>
                  </tr>
                ))
                
              }            
            </tbody>
          </table>

          <div className="d-block text-right">
          <Link to="checkout" className="btn btn-success px-3 py-2 text-white">Checkout</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
