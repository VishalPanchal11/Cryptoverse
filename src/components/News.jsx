import React, { useState, useEffect } from "react";
import { Card, Row, Col, Input, Select, Typography } from "antd";
import moment from "moment";

import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../services/cryptoApi";

import newsIcon from "../images/news.png";

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const count = simplified ? 6 : 48;

  const { data } = useGetCryptosQuery(100);
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery(count);

  const [newsCrypto, setNewsCrypto] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const filteredData = cryptoNews?.filter((news) =>
      news.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setNewsCrypto(filteredData);
  }, [cryptoNews, searchTerm]);

  if (isFetching) return "Loading...";

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col
          span={24}
          style={{
            display: "flex",
            gap: "2rem",
          }}
        >
          <Input
            type="text"
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setSearchTerm(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Crypto">Cryptocurrency</Option>
            {data?.data?.coins?.map((currency) => (
              <Option value={currency.name}>{currency.name}</Option>
            ))}
          </Select>
        </Col>
      )}
      {newsCrypto?.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a
              href={news.url}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.title}
                </Title>
                <img src={newsIcon} alt="News" style={{ height: "90px" }} />
              </div>
              <p>
                {news.description > 100
                  ? `${news.description.substring(0, 99)}...`
                  : `${news.description}`}
              </p>
              <div className="provider-container">
                <div></div>
                <Text>{moment(news.date).startOf("ss").fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
