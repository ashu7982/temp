
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Box,
    Heading,
    Input,
    Select,
    Button,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
  } from '@chakra-ui/react';



function Dashboard() {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      fetch('https://ashutosh-dubey.onrender.com/products')
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);



    const handleDelete = (id) => {
        
          fetch(`https://ashutosh-dubey.onrender.com/products/${id}`, {
            method: 'DELETE',
          })
            .then((res) => {
              if (res.ok) {
                
                setProducts((prevProducts) =>
                  prevProducts.filter((product) => product.id !== id)
                );
                console.log('deleted successfully');
              } else {
                console.error('not deleted');
              }
            })
            .catch((err) => console.error( err));
        };
      
  
    return (
        <Box p="4">
        <Heading as="h2">Dashboard</Heading>
  
        <Input type="text" placeholder="Search Bar" my="2" />
  
        <Select placeholder="Filter by Category" value={''} onChange={() => {}} my="2">
          <option value="">Filter by Category</option>
          <option value="shirt">Shirt</option>
          <option value="jeans">Jeans</option>
          <option value="trouser">Trouser</option>
          <option value="suit">Suit</option>
        </Select>
  
        <Select placeholder="Filter by Gender" value={''} onChange={() => {}} my="2">
          <option value="">Filter by Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>
  
        <Link to="/addProduct">
          <Button colorScheme="white" my="2">
            Add products
          </Button>
        </Link>
  
        <Heading as="h3" my="4">
          Product List
        </Heading>
  
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Image</Th>
              <Th>Name</Th>
              <Th>Description</Th>
              <Th>Gender</Th>
              <Th>Category</Th>
              <Th>Price</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products.map((product) => (
              <Tr key={product.id}>
                <Td>
                  <img src={product.Image} alt={product.Name} />
                </Td>
                <Td>{product.Name}</Td>
                <Td>{product.Description}</Td>
                <Td>{product.Gender}</Td>
                <Td>{product.Category}</Td>
                <Td>${product.Price}</Td>
                <Td>
                  <Button colorScheme="blue" size="sm" onClick={() => handleEdit(product)}>
                    Edit
                  </Button>
                </Td>
                <Td>
                  <Button colorScheme="red" size="sm" onClick={() => handleDelete(product.id)}>
                    Delete
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    );
  }
  
  export default Dashboard;