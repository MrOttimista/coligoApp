import React, { Component } from 'react';
import { Row,Menu,Icon} from 'antd';

class SiderNav extends Component{

    render(){
        return (
          <Row>
            <div className="logo" />
            <h1
              style={{
                color: "white",
                textAlign: "center",
                paddingTop: "30px",
                marginBottom: "40px",
                fontSize: "28px"
              }}
            >
              Coligo
            </h1>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <Icon type="home" />
                <span className="nav-text">Dashboard</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="schedule" />
                <span className="nav-text">Schadule</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="book" />
                <span className="nav-text">Courses</span>
              </Menu.Item>
              <Menu.Item key="4">
                <Icon type="dashboard" />
                <span className="nav-text">GradeBook</span>
              </Menu.Item>
              <Menu.Item key="5">
                <Icon type="stock" />
                <span className="nav-text">Preformance</span>
              </Menu.Item>
              <Menu.Item key="6">
                <Icon type="sound" />
                <span className="nav-text">Announcment</span>
              </Menu.Item>
            </Menu>
          </Row>
        );
    }
}

export default SiderNav