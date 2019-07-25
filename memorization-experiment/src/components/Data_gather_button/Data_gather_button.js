import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import './Data_gather_button.css';

class Data_gather_button  extends Component{

  
  constructor() {
    super();
    this.state = {link: ""};
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    if(this.props.stage === "1"){
      this.setState({link: "/break"});
    }
    else{
      this.setState({link: "/finish"});
    }
  }


  // call service to proceed to the next step 
  handleClick() {
  }



  render(){
      return(
        <div className = "section">
            <Button onClick={this.handleClick} component={Link} to={this.state.link} variant="contained" color="primary" className = "button" style={{fontSize: '15px'}} size="large">Submit Data</Button>
        </div>
      )
    }
}; 




export default Data_gather_button;