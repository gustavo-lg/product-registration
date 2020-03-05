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
                        <form onSubmit={this.onEditSubmit}>  
                        <InputGroup>                       
                            <FormControl placeholder="Name" ref={nameInput => this.nameInput = nameInput} defaultValue={name}/>
                            <FormControl placeholder="Price" ref={priceInput => this.priceInput = priceInput} defaultValue={price}/>
                            <Button onClick={this.onEditSubmit}>Save</Button>
                        </InputGroup>
                        </form>
                    )
                    : (  
                        <ListGroup>
                            
                            <ListGroup.Item>
                            <div className="row">
                                <div className="col-md-7">
                                    <span>{name}</span> 
                                    {' - '}
                                    <span>{price}</span>
                                    
                                </div>
                                    <div className="col-md-5">
                                        <Button onClick={this.onEdit} className="ml-1">Edit</Button>
                                        
                                        <Button className="text-left" onClick={this.onDelete} className="ml-1">Delete</Button>
                                        
                                    </div>
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