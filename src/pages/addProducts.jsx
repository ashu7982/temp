

import React, { useState } from "react";

function AddProduct() {
  const [productData, setProductData] = useState({
    Image: "",
    Name: "",
    Description: "",
    Gender: "",
    Category: "",
    Price: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://ashutosh-dubey.onrender.com/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        
        console.log(" added successfully");
      } else {
        
        console.error("Fail to add.");
      }
    } catch (err) {
      console.error( err);
    }
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Image URL:</label>
          <input
            type="text"
            name="Image"
            value={productData.Image}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Product Name:</label>
          <input
            type="text"
            name="Name"
            value={productData.Name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Product Description:</label>
          <textarea
            name="Description"
            value={productData.Description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Gender:</label>
          <select
            name="Gender"
            value={productData.Gender}
            onChange={handleChange}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <label>Category:</label>
          <select
            name="Category"
            value={productData.Category}
            onChange={handleChange}
          >
            <option value="Shirts">Shirts</option>
            <option value="Jeans">Jeans</option>
            <option value="Trousers">Trousers</option>
            <option value="Suits">Suits</option>
            
          </select>
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="Price"
            value={productData.Price}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Add Product</button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;


