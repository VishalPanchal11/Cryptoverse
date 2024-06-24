import React from "react";
import { Button, Typography, Menu, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
const Navbar = () => {
  return (
    <div className="navcontainer">
      <div className="logo-conatiner">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
            <Link to="/" >Cryptoverse</Link>
        </Typography.Title>
        {/* <button className="menu-control-container"></button> */}
      </div>
    </div>
  );
};

export default Navbar;
