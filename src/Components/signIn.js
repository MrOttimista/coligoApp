import React, { Component } from 'react';
import { Row,Input ,Avatar,Icon, Button} from 'antd';
import {logIn} from "../Actions/index";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class SignIn extends Component{
    constructor(props){
        super(props);
        this.state={
            userName:"Adel"
        }
        this.handleChangeInput=this.handleChangeInput.bind(this)
        this.handleClick=this.handleClick.bind(this)

    }
    handleChangeInput(e){
        this.setState({
            userName:e.target.value
        })
    }
    handleClick(){
        if(this.state.userName){
            this.props.logIn(this.state.userName)
            console.log(this.props)
            this.props.history.push('/')
        }
       else alert("Add User Name")
    }
    render(){
        return (
            <Row style={{textAlign: "center",backgroundColor:"white",borderRadius:"15px",position: "absolute",top:0,bottom:0,left:0,right:0}} >
              <h1>SignIn</h1>
              <div><Input
                style={{width:"30%",margin:"5px"}}
                value={this.state.userName}
                onChange={this.handleChangeInput}
              ></Input>
              </div>
              <Button style={{width:"30%"}} type="primary" onClick={this.handleClick}>
                Log in
              </Button>
          </Row>
        );
    }
}

const mapDispatchToProps = (dispatch) =>({
    ...bindActionCreators({
        logIn
    },dispatch)
  })

export default connect(null,mapDispatchToProps)(SignIn)