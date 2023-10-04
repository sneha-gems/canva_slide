import React, { useState } from "react";
import cx from "classnames";
import { Button, Card, Carousel, Col, Row } from "react-bootstrap";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";

//Custom file and components import

import db from "../firebase/index.js";

//CSS File Import
import "../App.css";
import Styles from "./Styles.module.css";
import { FieldArray, useFormik } from "formik";
import { useReadData } from "../hooks/useReadData";
import { questions } from "../contexts/constant";
import { toast } from "react-toastify";

const OptionCard = ({ text, index,queIndex, formik }) => {

  const [selected, setSelected] = useState("")

  const handleClick = (e) => {
    delete formik?.values?.questions?.[queIndex]?.options
    setSelected((prev) => prev === e.target.value ? "" : e.target.value)
  };

  return (
    <div className={selected === text ? Styles.option_container_active :Styles.option_container} key={`options-${index}`}>
      <Card className={cx(Styles.custum_height, "border-0")}>
        <Card.Body className="d-flex justify-content-center align-items-center">
          <input
            name={`questions[${queIndex}].options[${index}]`}
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

const data = localStorage.getItem('user')
const user = JSON.parse(data)

  const writeQuizeData = async (uid, values) => {
  const quizeRef = uid && collection(db, `quiz-data/${user.email}/${user.uid}`)
    const userRef =  doc(quizeRef, user.uid)
    await setDoc(userRef, { ...values});
  }

const handleSubmit = (values) => {
  console.log(values);
  try {
    user.uid && writeQuizeData(user.uid, values.questions)
  } catch (error) {
    toast.error(error)
  }
};

  const formik = useFormik({
    initialValues: { questions: [...questions] },
    onSubmit: handleSubmit,
  });

  return (
    <Carousel indicators={false} interval={null}>
      {questions?.length !== 0 &&
        questions?.map((item, queIndex) => {
          return (
            <Carousel.Item key={item.id}>
              <form onSubmit={formik.handleSubmit} key={item.id}>
                <>
                {/* <FieldArray name="questions"/>  */}
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
                              queIndex={queIndex}
                              formik={formik}
                              key={`options-${index}`}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </Col>
                  {item.button &&
                  <Button type="submit" className={Styles.submit_button}>Submit quiz</Button>}
                </>
              </form>
            </Carousel.Item>
          );
        })}
    </Carousel>
  );
};

export default CustomSwiper;
