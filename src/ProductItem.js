import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';


class ProductItem extends Component {
    constructor(props){
        super(props);

        this.state={
            isEdit: false
        }

        this.onEdit = this.onEdit.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    onEdit() {
        this.setState({isEdit: true});
    }

    onEditSubmit(event) {
        event.preventDefault();

        this.props.onEditSubmit(this.nameInput.value, this.priceInput.value, this.props.name);

        this.setState({ isEdit: false });
    }

    onDelete() {
        const {onDelete, name} = this.props;

        onDelete(name);
    }
    render(){
        const {name, price} = this.props;

        return(
            <div>
                {this.state.isEdit
                    ?(
<<<<<<< HEAD
                        <form onSubmit={this.onEditSubmit}>                           
                            <input placeholder="Name" ref={nameInput => this.nameInput = nameInput} defaultValue={name}/>
                            <input placeholder="Price" ref={priceInput => this.priceInput = priceInput} defaultValue={price}/>
                            <Button onClick={this.onEditSubmit}>Save</Button>
=======
                        <form onSubmit={this.onEditSubmit}>  
                        <InputGroup>                       
                            <FormControl placeholder="Name" ref={nameInput => this.nameInput = nameInput} defaultValue={name}/>
                            <FormControl placeholder="Price" ref={priceInput => this.priceInput = priceInput} defaultValue={price}/>
                            <Button onClick={this.onEditSubmit}>Save</Button>
                        </InputGroup>
>>>>>>> 5aa4f363e672a3c94241e417feaabd4c12e7ddc6
                        </form>
                    )
                    : (  
                        <ListGroup>
                            
                            <ListGroup.Item variant="dark">
                                <span>{name}</span> 
                                {' - '}
                                
                                <span>{price}</span>
                                
                                <div className="text-right">
                                <Button onClick={this.onEdit} className="ml-1">Edit</Button>
                                <Button className="text-left" onClick={this.onDelete} className="ml-1">Delete</Button>
                                </div>
                            </ListGroup.Item>
                            <hr></hr>
                            
                        </ListGroup>
                    )
                }
          </div>
        );
    }
}


export default ProductItem;