import React, { useEffect, useState } from "react";
import cx from "classnames";
import { Button, Card, Carousel, Col, Row } from "react-bootstrap";
import { collection, getDocs } from "firebase/firestore";

//Custom file and components import
import TextInput from "./inputs/TextInput";
import db from "../firebase/index.js";

//CSS File Import
import "../App.css";
import Styles from "./Styles.module.css";
import { useFormik } from "formik";
import { useReadData } from "../hooks/useReadData";
import { questions } from "../contexts/constant";

const OptionCard = ({ text, index }) => {
  const handleClick = (e) => {
    console.log("value", e.target.value);
  };
  return (
    <div className={Styles.option_container} key={`options-${index}`}>
      <Card className={cx(Styles.custum_height, "border-0")}>
        <Card.Body className="d-flex justify-content-center align-items-center">
          {/* <p className={Styles.option_text}>{text}</p></Card.Body> */}
          <input
            name={`questions[${index}].options`}
            type={"text"}
            value={text}
            readOnly
            className={cx(Styles.option_text, "input-card")}
            onClick={handleClick}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

const CustomSwiper = () => {
  // const {generalQuestions} = useReadData()

  // const updatedGeneralQuestions = generalQuestions.filter((item, index) => generalQuestions.indexOf(item) === index)
  // console.log('generalQuestions', generalQuestions)

  const handleSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: { questions: [...questions] },
    onSubmit: handleSubmit,
  });

  return (
    <Carousel indicators={false} interval={null}>
      {questions?.length !== 0 &&
        questions?.map((item) => {
          return (
            <Carousel.Item key={item.id}>
              <form onSubmit={formik.handleSubmit} key={item.id}>
                <>
                  <Col>
                    {item.title && (
                      <Row
                        className={cx(
                          Styles.outer_option_container,
                          Styles.title_container,
                          "justify-content-center"
                        )}
                      >
                        <h1>{item.title}</h1>
                      </Row>
                    )}
                    {item.subtitle && <h4>{item.subtitle}</h4>}

                    {item.question && (
                      <Row>
                        <div
                          className={cx(
                            Styles.custom_align_center,
                            "mb-4 text-wrap"
                          )}
                        >
                          <h3>{item?.question}</h3>
                        </div>
                      </Row>
                    )}
                    {item.example && (
                      <Row
                        className={cx(
                          Styles.container_example,
                          Styles.custom_align_center,
                          "mb-4"
                        )}
                      >
                        <p className="fw-bold my-0">{item.example}</p>
                      </Row>
                    )}
                    {item.subtext && (
                      <p className={Styles.italic_text}>{item.subtext}</p>
                    )}
                    {/* {item.input === "text" && (
                <TextInput type="text" />
              )} */}
                    {item.options && (
                      <div>
                        <div
                          className={cx(
                            item.options.length === 7
                              ? Styles.more_option_container
                              : Styles.outer_option_container,
                            "justify-content-center"
                          )}
                        >
                          {item.options.map((option, index) => (
                            <OptionCard
                              text={option}
                              index={index}
                              key={`options-${index}`}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </Col>
                  <Button type="submit">Submit quiz</Button>
                </>
              </form>
            </Carousel.Item>
          );
        })}
    </Carousel>
  );
};

export default CustomSwiper;
