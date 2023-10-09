import React, { useEffect, useState } from "react";
import cx from "classnames";
import { Button, Card, Carousel, Col, Row } from "react-bootstrap";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";

//Custom file and components import

import db from "../firebase/index.js";

//CSS File Import
import "../App.css";
import Styles from "./Styles.module.css";
import {
  FieldArray,
  useFormik,
  FormikProvider,
} from "formik";
import { useReadData } from "../hooks/useReadData";
import { questions as questionsData } from "../contexts/constant";
import { toast } from "react-toastify";
import OptionCard from "./OptionCard.jsx";
import OptionContainer from "./OptionContainer.jsx";



const CustomSwiper = () => {
  // const {generalQuestions} = useReadData()

  const data = localStorage.getItem("user");
  const user = JSON.parse(data);

  const writeQuizeData = async (uid, values) => {
    const quizeRef =
      uid && collection(db, `quiz-data/${user.email}/${user.uid}`);
    const userRef = doc(quizeRef, user.uid);
    await setDoc(userRef, { ...values });
  };

  const handleSubmit = (values) => {
    console.log(values);
    debugger
    try {
      user.uid && writeQuizeData(user.uid, values.questions);
    } catch (error) {
      toast.error(error);
    }
  };

  const formik = useFormik({
    initialValues: { questions: [] },
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: true,
  });

  return (
    <FormikProvider
      value={formik}
    >
      <form onSubmit={formik.handleSubmit}>
      <FieldArray
        name="questions"
        render={(arrayHelper) => (
          <>
                  <Carousel indicators={false} interval={null}>
                  {questionsData?.length !== 0 &&
              questionsData?.map((item, queIndex) => {
                return (
                  <Carousel.Item key={item.id}>
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

                          {item.options && (
                            <OptionContainer item={item} queIndex={queIndex} arrayHelper={arrayHelper}/>
                          )}
                        </Col>
                        {item.button && (
                          <Button
                            type="submit"
                            className={Styles.submit_button}
                          >
                            Submit quiz
                          </Button>
                        )}
                      </>
                    </Carousel.Item>
                )
                    
                    })}
                  </Carousel>
               
          </>
        )}
      />
      </form>
    </FormikProvider>
  );
};

export default CustomSwiper;
