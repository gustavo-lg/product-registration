import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';


class AddProduct extends Component {
    constructor(props){
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();

        this.props.onAdd(this.nameInput.value, this.priceInput.value);

        this.nameInput.value= '';
        this.priceInput.value= '';
    }
   
    render(){
        
        return(
            <form className="AddProductForm" onSubmit={this.onSubmit}>
                <div>
                    <h3>Add Product</h3>
<<<<<<< HEAD
                    <InputGroup placeholder="Name" ref={nameInput => this.nameInput = nameInput}/>
                    <InputGroup placeholder="Price" ref={priceInput => this.priceInput = priceInput}/>
=======
                    <InputGroup className="mt-3">
                    <FormControl placeholder="Name" ref={nameInput => this.nameInput = nameInput}/>
                    <FormControl placeholder="Price" ref={priceInput => this.priceInput = priceInput}/>
>>>>>>> 5aa4f363e672a3c94241e417feaabd4c12e7ddc6
                    <Button variant="primary">Add</Button>
                    </InputGroup>
                    <hr/>

                </div>
            </form>
        );
    }
}


export default AddProduct;