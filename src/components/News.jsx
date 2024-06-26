import React from "react";
import { Card, Row, Col, Avatar, Select, Typography } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery(count);

  if (isFetching) return "Loading...";
  console.log(cryptoNews);

  return <div>News</div>;
};

export default News;
