import React from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Button, Card, Row, Col, Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";

const Content = (props) => {
  const [isLoading, setIsLoading] = useState([]);
  const [mydata, setData] = useState([]);
  const { category } = props;
  useEffect(() => {
    function apiGet() {
      setIsLoading(true);
      fetch(`https://inshorts.deta.dev/news?category=${category}`)
        .then((response) => response.json())
        .then((json) => {
          console.log("updating..");
          setData(json.data);
          setIsLoading(false);
        });
    }
    apiGet();
    const interval = setInterval(() => {
      fetch(`https://inshorts.deta.dev/news?category=${category}`)
        .then((response) => response.json())
        .then((json) => {
          console.log("updating..");
          setData(json.data);
        });
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      key="diva"
      className={`container justify-content-center align-items-center my-5 bg-${props.mode}`}
      id="cgh"
    >
      {isLoading ? (
        <Container className="text-center">
          <Spinner
            variant={`${props.mode === "light" ? "dark" : "light"}`}
            animation="border"
            role="status"
          >
            <span className="visually-hidden text-center">Loading...</span>
          </Spinner>
        </Container>
      ) : (
        <Container key="conta" fluid>
          <Row key="rows" xs={1} md={3} className={`my-4 bg-${props.mode}`}>
            {mydata.map((value, index) => {
              return (
                <>
                  <Col
                    className={`container-fluid my-3 bg-${props.mode} text-${
                      props.mode === "light" ? "dark" : "light"
                    }`}
                  >
                    <Card key={index}
                      className={`mx-2 shadow- bg-${props.mode} text-${
                        props.mode === "light" ? "dark" : "light"
                      }`}
                      style={{ borderRadius: "10px !important" }}
                    >
                      <Card.Img
                        variant="top"
                        src={value.imageUrl}
                        style={{ borderRadius: "10px 10px 0px 0px" }}
                      />
                      <Card.Body>
                        <Card.Title
                          className={`text-${
                            props.mode === "light" ? "dark" : "secondary"
                          }`}
                        >
                          {value.date}
                        </Card.Title>
                        <Card.Text
                          className={`text-${
                            props.mode === "light" ? "dark" : "light"
                          }`}
                        >
                          {value.content}
                        </Card.Text>
                        <Card.Link href={value.readMoreUrl}>
                          <Button
                            variant={`${
                              props.mode === "light" ? "primary" : "secondary"
                            }`}
                            text="dark"
                          >
                            View More
                          </Button>
                        </Card.Link>
                      </Card.Body>
                    </Card>
                  </Col>
                </>
              );
            })}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Content;
