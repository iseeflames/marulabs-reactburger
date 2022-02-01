import React, {Component} from 'react';
import "./BottomBread.css";

export default class BottomBread extends Component {

  constructor(props) {
    super(props);
    this.state = {isClicked: false};
  }

  handleClick = () => {
    console.log("Bottom bread clicked");
    this.setState({
      isClicked: true
  })

  }
  render(){    

    let isClicked = this.state.isClicked;
    let style = {display: '',} 

    if(isClicked){
      style = {
        display: 'none'
      }
    }
    return (
      
        <div onClick={this.handleClick} className="bottomBread" style={style}>
        </div>
        );
  }
}