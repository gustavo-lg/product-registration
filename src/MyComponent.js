import React, {Component} from 'react';
import PropTypes from 'prop-types';

const PropTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired

}

class MyComponent extends Component {
    render(){
        const {title, name} = this.props;

        return(
          <div className="myComponent">
              <h1>Title: {title}</h1>
              <h1>Name: {name}</h1>
          </div>  
        );
    }
}

MyComponent.propTypes = propTypes;

export default MyComponent;