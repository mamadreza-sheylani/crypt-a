import React, { useEffect, useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card, Input } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Loader from "./loader";
/* crypto api in services/newsApi.js */

const { Title, Text } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("cryptocurrency");
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({
    newsCategory: newsCategory,
    count: simplified ? 10 : 100,
  });
  const { data: cryptosList } = useGetCryptosQuery(100);

  if (isFetching) return <Loader />;
  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="select a crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="cryptocurrency">CryptoCurrency</Option>
            {cryptosList?.data?.coins.map((coin, idx) => (
              <Option value={coin.name} key={idx}>
                {coin.name}
              </Option>
            ))}
          </Select>
        </Col>
      )}
      {cryptoNews?.value.map((news, idx) => (
        <Col xs={24} sm={12} lg={8} key={idx}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.name}
                </Title>
                <img
                  src={
                    news?.image?.thumbnail?.contentUrl ||
                    `https://picsum.photos/100/100`
                  }
                  style={{ maxWidth: "200px", maxHeight: "200px" }}
                  alt={news.name}
                />
              </div>
              <p>
                {news?.description > 100
                  ? `${news.description.substring(0, 10)}...`
                  : news.description}
              </p>
              <div className="provider-container">
                <div>
                  <Avatar
                    src={
                      news?.provider[0]?.image?.thumbnail.contentUrl ||
                      `https://picsum.photos/40/40`
                    }
                    alt="news provider"
                  />
                  <Text className="provider-name">
                    {news?.provider[0]?.name}
                  </Text>
                </div>
                <Text>
                  {moment(news?.datePublished).startOf("ss").fromNow()}
                </Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
