import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Row,Col,Button,Icon,Input,Dropdown,Menu } from 'antd';
import { Layout } from 'antd';
import desk from "./desk.svg";
import Announcements from "./announcements";
import TimeTable from "./timeTable";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {logIn,logOut} from "../Actions/index";
import SiderNav from "./slider.js";
import { withRouter } from "react-router-dom";
import MenuItem from 'antd/lib/menu/MenuItem';

let menu = (
  <Menu>
    <MenuItem>
      {" "}
      <Icon
        type="bell"
        style={{
          fontSize: "30px",
          justify: "center",
          paddingLeft: "20px"
        }}
        theme="twoTone"
      />
    </MenuItem>
    <MenuItem>
      {" "}
      <Icon
        type="message"
        style={{
          fontSize: "30px",
          justify: "center",
          paddingLeft: "20px"
        }}
        theme="twoTone"
      />{" "}
    </MenuItem>
    <MenuItem>
     
    </MenuItem>
  </Menu>
);
const {
  Header, Content, Sider,
} = Layout;
const Search = Input.Search;

class HomePage extends Component{
constructor(props){
  super(props)
  this.state={
    collapsed: false,
  }
  this.onCollapse=this.onCollapse.bind(this)
  this.handleClick=this.handleClick.bind(this)
  this.widthControl=this.widthControl.bind(this)

  window.addEventListener("resize", this.widthControl.bind(this));

}
componentDidMount() {
  this.widthControl();
  console.log("S")
  window.addEventListener("resize", this.widthControl.bind(this));;
}
handleClick(){
  this.props.logOut()
  this.props.history.push('/login')
}



onCollapse (collapsed) {
  this.setState({ collapsed });
};
widthControl(){
  if(window.innerWidth<1000) {this.onCollapse(true)}
  else{
      this.setState({
        collapsed:false
      })
  }
}
  render(){
 
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <SiderNav />
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0, height: "70px" }}>
            <span className="welcomeFont">
              Welcome {this.props.Auth.userName},
            </span>

            <span className="dropDownMenu" style={{ float: "right" }}>
              <Dropdown overlay={menu} trigger={["click"]}>
                <a className="ant-dropdown-link" href="#">
                  Menu <Icon type="down" />
                </a>
              </Dropdown>
              <Button type="link" onClick={this.handleClick}>
           Logout
         </Button>
            </span>

            <span
              className="icons"
              style={{
                float: "Right",
                paddingRight: "50px",
                textAlign: "center"
              }}
            >
              <Search placeholder="input search text" style={{ width: 200 }} />
              <Icon
                type="bell"
                style={{
                  fontSize: "30px",
                  justify: "center",
                  paddingLeft: "20px"
                }}
                theme="twoTone"
              />
              <Icon
                type="message"
                style={{
                  fontSize: "30px",
                  justify: "center",
                  paddingLeft: "20px"
                }}
                theme="twoTone"
              />
              <Button type="link" onClick={this.handleClick}>
                Logout
              </Button>
            </span>
          </Header>
          <Content
            style={{
              margin: "0 16px"
            }}
          >
            <div style={{ padding: 24, height: "100%" }}>
              <Row
                style={{
                  backgroundImage:`url(${desk})`,
                  backgroundSize:"300px",
                  backgroundPositionX:"100%",
                  backgroundRepeat:"no-repeat",
                  width: "92%",
                  minHeight: "300px",
                  backgroundColor: "white",
                  marginBottom: "10px"
                }}
              >
                  <h1
                    style={{
                      textAlign: "left",
                      fontSize: "40px",
                      paddingLeft: "10px"
                    }}
                  >
                    EXAMS TIME{" "}
                  </h1>
                  <h3
                    style={{
                      textAlign: "left",
                      fontSize: "18px",
                      paddingLeft: "10px"
                    }}
                  >
                    Here we are,Are you ready to fight? Don't worry, we prepared
                    some tips to be ready for your Exams.
                  </h3>

                  <h3
                    style={{
                      color: "gray",
                      paddingTop: "100px",
                      fontSize: "18px",
                      paddingLeft: "8px"
                    }}
                  >
                    <i>
                      "Nothing happens untill something moves" ~ Albert Enistine{" "}
                    </i>
                  </h3>
                  <span>
                    <Row  style={{ paddingLeft: "50px" }}>
                    <Button
                      type="primary"
                      shape="round"
                      size={"large"}
                      style={{ width: "90%",maxWidth:"180px", height: "50px" }}
                    >
                      View Exams Tips
                    </Button>
                    </Row>
                  </span>
              </Row>

              <div style={{  marginTop: "30px" }} className="GridCol">
                <Col span={18} className="GridCol">
                  <Announcements />
                </Col>
                <Col span={6}  className="GridCol"
                >
                  <TimeTable />
                </Col>
              
              </div>

              <div  className="GridCol1">
                <Row width="100%">
                  <Announcements />
                </Row>
                <Row   width="100%" style={{marginTop:"10px"}}>
                  <TimeTable />
                </Row>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }

}
const mapStateToProps = (state) => {
  return {
    Auth: state.Auth
  };
}

const mapDispatchToProps = (dispatch) =>({
  ...bindActionCreators({
      logIn,logOut
  },dispatch)
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(HomePage))
