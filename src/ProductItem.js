import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';


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
                            <input placeholder="Name" ref={nameInput => this.nameInput = nameInput} defaultValue={name}/>
                            <input placeholder="Price" ref={priceInput => this.priceInput = priceInput} defaultValue={price}/>
                            <Button>Save</Button>
                        </form>
                    )
                    : (  
                        <div>
                        <span>{name}</span> 
                        {' | '}
                        <span>{price}</span>
                        {' | '}
                        <Button onClick={this.onEdit}>Edit</Button>
                        <Button onClick={this.onDelete}>Delete</Button>
                        <hr></hr>
                        </div>
                    )
                }
          </div>
        );
    }
}


export default ProductItem;