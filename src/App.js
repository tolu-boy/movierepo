import React, { useEffect, useState } from "react";
import Nav from "./components/header/Nav";
import "antd/dist/antd.css";
import "./App.css";
import rec from "./images/rec.png";
import { Row, Col, Form, Input, Card } from "antd";

function App() {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState("optional");
  const [movies, setMovies] = useState([]);

  const FetchData = async () => {
    const response = await fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=5bfed286`
    );
    const FetchedApi = await response.json();
    setMovies(FetchedApi);
  };

  useEffect(() => {
    FetchData();
  }, []);

  console.log(movies, "ppp");

  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };
  return (
    <div className="App">
      <Nav />

      <div className="img-bg">
        <img src={rec} alt="" className="image-show" />
        <Row>
          <Col span={4}>
            <p className="watch-incredible"> Watch something incredible</p>
          </Col>
        </Row>
      </div>

      <div className="search-form">
        <Form
          form={form}
          layout="vertical"
          initialValues={{ requiredMarkValue: requiredMark }}
          onValuesChange={onRequiredTypeChange}
          requiredMark={requiredMark}
        >
          <Form.Item label="Search" required>
            <Input />
          </Form.Item>
        </Form>

        <Row>
          <Col span={4} className="movie-card">
            <p>Movie Category Name</p>
            <Card bordered={true} style={{ width: 300 }}>
              <p className="card-name">{movies.Actors}</p>
            </Card>
          </Col>

         
        </Row>
      </div>
    </div>
  );
}

export default App;
