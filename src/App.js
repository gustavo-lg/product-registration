import React, { Component } from "react";
import './App.css';
import ProductItem from './ProductItem';
import AddProduct from "./AddProduct";
import { ListGroup } from 'react-bootstrap';

const products = [
  {
    name: 'iPad',
    price: 500
  },
  {
    name: 'iPhone',
    price: 200
  }
];

localStorage.setItem('products',  JSON.stringify(products));

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      products: JSON.parse(localStorage.getItem('products'))
    };

    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }
  componentWillMount() {
    const products = this.getProducts();

    this.setState({products});
  }

  getProducts(){
    return this.state.products;
  }

  onAdd(name, price){
    const products = this.getProducts();

    products.push({
      name,
      price
    });

    this.setState({products});
  }

  onDelete(name){
    const products = this.getProducts();

    const filteredProducts = products.filter(product => {
      return product.name !== name;
    });

    this.setState({products: filteredProducts});
  }

  onEditSubmit(name, price, originalName) {
    let products = this.getProducts();

    products = products.map(product => {
      if (product.name === originalName){
        product.name = name;
        product.price = price;
      }

      return product;
    });

    this.setState({products});
    
}

  render() {
    return(
      <div className="App">
        <h1>Product Manager</h1>
        <hr/>
        <ListGroup>
          <ListGroup.Item>
            <AddProduct
              onAdd={this.onAdd}
            />
            <h1>Products List</h1>
            {
              this.state.products.map(product => {
                return (
                <ProductItem
                  key={product.name}
                  {...product}
                  onDelete={this.onDelete}
                  onEditSubmit={this.onEditSubmit}
                />
                );
              })
            }
          </ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}

export default App;
