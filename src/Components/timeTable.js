import React, { Component } from 'react';
import { Row,List ,Avatar,Icon} from 'antd';
import apiRequests from "../Api/index";
import {setAnnouncment} from "../Actions/index";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const axios = require('axios');


class TimeTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    let thisGlobal=this
    apiRequests.Quizzes()
      .then(function(response) {
        thisGlobal.props.setAnnouncment(response.data.data)
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <Row
        style={{ backgroundColor: "white", marginLeft: "10px" }}
        height={"100%"}
      >
        <Row>
          <h1
            style={{ paddingLeft: "10px", fontSize: "25px", textAlign: "left" }}
          >
            What's due
          </h1>
          <h3
            style={{
              fontSize: "15px",
              color: "grey",
              textAlign: "left",
              paddingLeft: "18px"
            }}
          >
            sometimes Later becoms Never. Go now{" "}
          </h3>
        </Row>

        <Row>
          {console.log(this.state.data)}
          <List
            itemLayout="vertical"
            dataSource={this.props.Announcment}
            renderItem={item =>
              item.type == "quiz" ? (
                <List.Item>
                  <Row style={{ width: "100%", paddingLeft: "10px" }}>
                    {" "}
                    <h1 style={{ color: "blue", fontSize: "20px" }}>
                      {" "}
                      <Icon type="form" /> {item.name}
                    </h1>{" "}
                  </Row>
                  <Row
                    style={{
                      width: "100%",
                      paddingLeft: "30px",
                      fontSize: "15px"
                    }}
                  >
                    {" "}
                    <Row>Course: {item.course}</Row>{" "}
                    <Row>Topic: {item.Topic}</Row>{" "}
                    <Row>dueTo: {item.dueto}</Row>
                  </Row>
                </List.Item>
              ) : (
                <List.Item>
                  <Row style={{ width: "100%", paddingLeft: "10px" }}>
                    {" "}
                    <h1 style={{ color: "blue", fontSize: "20px" }}>
                      {" "}
                      <Icon type="snippets" /> {item.name}
                    </h1>{" "}
                  </Row>
                  <Row
                    style={{
                      width: "100%",
                      paddingLeft: "30px",
                      fontSize: "15px"
                    }}
                  >
                    {" "}
                    <Row>Course: {item.course}</Row>{" "}
                    <Row>Topic: {item.Topic}</Row>{" "}
                    <Row>dueTo: {item.dueto}</Row>
                  </Row>
                </List.Item>
              )
            }
          />
          ,
        </Row>
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Announcment: state.Announcment
  };
}
const mapDispatchToProps = (dispatch) =>({
  ...bindActionCreators({
      setAnnouncment
  },dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(TimeTable)

