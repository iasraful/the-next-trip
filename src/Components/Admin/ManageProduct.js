import React, { useEffect ,useState} from 'react';

const ManageProduct = () => {
  const [products , setProducts] = useState([]);
    useEffect(()=>{
        const url = 'https://infinite-cove-19847.herokuapp.com/products';
        fetch(url)
        .then(res => res.json()).then(data => setProducts(data))
    })

  function deleteProduct (id){
    fetch(`/deleteProd/${id}` , {
      method : "DELETE"
    })
    .then(res => res.json())
    .then(result => console.log("deleted" , result))
  }
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Unit</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map(product => (
              <tr>
                <td>{product.name}</td>
                <td> ${product.price} </td>
                <td>
                    <button onClick={() => deleteProduct(`${product._id}`)} className="btn btn-danger px-2">Delete</button>
                </td>
              </tr>
            ))
          }

        </tbody>
      </table>
    </div>
  );
};

export default ManageProduct;
