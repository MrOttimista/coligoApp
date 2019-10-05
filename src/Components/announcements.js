import React, { Component } from 'react';
import { Row,List ,Avatar} from 'antd';
import apiRequests from "../Api/index";
import {setQuizzes} from "../Actions/index";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const axios = require('axios');


class Announcements extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
    componentDidMount(){
      let GlobalThis=this
      apiRequests.Announcment()
        .then(function (response) {
          GlobalThis.props.setQuizzes(response.data.data)
        })
        .catch(function (error) {
          console.log(error);
        })


    }
  render(){
    return(
      <Row  style={{backgroundColor:"white",minHeight:"auto"}} >
      <Row>
        <h1 style={{paddingLeft:"10px",fontSize:"25px",textAlign:"left"}}>Announcment</h1>
        <h3 style={{fontSize:"15px",color:"grey",textAlign:"left",paddingLeft:"18px"}}>We educate! Keep updated :) </h3>
      </Row>

      <Row style={{paddingLeft:"30px"}}>
      <List
         itemLayout="horizontal"
         dataSource={this.props.Quizzes}
         renderItem={item => (
           <List.Item>
             <List.Item.Meta
                avatar={<img src={item.img} width={"50px"}/>}
                title={<span style={{fontSize:"18px"}}>{item.name}</span>}
                description={item.Announcment}
             />
           </List.Item>
         )}
       />, 
      </Row>
      </Row>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    Quizzes: state.Quizzes
  };
}
const mapDispatchToProps = (dispatch) =>({
  ...bindActionCreators({
      setQuizzes
  },dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(Announcements)

