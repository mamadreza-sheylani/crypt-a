import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  Exchanges,
  HomePage,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from "./components";
import "./App.css";
import MyChart from "./components/myChart";
const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/exchanges" element={<Exchanges />} />
              <Route
                exact
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              />
              <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route exact path="/news" element={<News />} />
              <Route exact path="/lchart" element={<MyChart />} />
            </Routes>
          </div>
        </Layout>
        <div className="footer" level={5} style={{ textAlign: "center" }}>
          <Typography.Title style={{ color: "white", fontSize: "18px" }}>
            CryptoVerse <br />
            All Right Reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/cryptocurrencies">Crypto Currencies</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
