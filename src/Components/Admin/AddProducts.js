import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function AddProducts() {
  const { register, handleSubmit } = useForm();
  const [imageURL, setImageURL] = useState(null);
  const onSubmit = (data) => {
    const eventData = {
      name: data.name,
      quantity: data.quantity,
      price: data.price,
      imageURL: imageURL,
    };

    const url = "https://infinite-cove-19847.herokuapp.com/addProduct";

    fetch(url , {
      method: "POST",
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify(eventData)
    })
    .then(res => console.log("response from server" , res))
    // console.log(data);
  };

  const handelImageUpload = (event) => {
    // console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "19fd446bbd7abff8762dbbf43f75a693");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <input
          name="name"
          className="form-control"
          defaultValue=""
          ref={register}
          placeholder="Product Name"
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          defaultValue=""
          name="quantity"
          ref={register({ required: true })}
          placeholder="Quantity"
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          defaultValue=""
          name="price"
          ref={register({ required: true })}
          placeholder="Price"
        />
      </div>

      <div className="custom-file mb-3">
        <input
          onChange={handelImageUpload}
          type="file"
          className="custom-file-input"
          id="inputGroupFile01"
        />
        <label className="custom-file-label">Choose file</label>
      </div>

      <input className="btn btn-success" type="submit" />
    </form>
  );
}
