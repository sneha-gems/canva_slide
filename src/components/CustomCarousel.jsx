import React, { useCallback, useContext, useEffect, useState } from "react";
import cx from "classnames";
import { Button, Card, Carousel, Col, Row } from "react-bootstrap";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";

//Custom file and components import

import db from "../firebase/index.js";

//CSS File Import
import "../App.css";
import Styles from "./Styles.module.css";
import { FieldArray, Formik } from "formik";
import { useReadData } from "../hooks/useReadData";
import { questions as questionsData } from "../contexts/constant";
import { toast } from "react-toastify";
import OptionContainer from "./OptionContainer.jsx";
import { authContext } from "../contexts/AuthContext.js";
import { useNavigate } from "react-router-dom";

const submitBtn = {
  id: 73,
  button: "submit",
};

const CustomSwiper = () => {
  const { generalQuestions } = useReadData();
  const { handleLogout } = useContext(authContext);
  const navigate = useNavigate();

  const data = localStorage.getItem("user");
  const user = JSON.parse(data);

  const [initialValues, setinitialValues] = useState(generalQuestions);

  useEffect(() => {
    setinitialValues(generalQuestions);
  }, [generalQuestions]);

  const writeQuizeData = async (uid, values) => {
    const quizeRef =
      uid && collection(db, `quiz-data/${user.email}/${user.uid}`);
    const userRef = doc(quizeRef, user.uid);
    await setDoc(userRef, { ...values });
  };

  const fetchQuestions = useCallback(async (apiUrl) => {
    let fetchData = [];
    const querySnapshot =
      Boolean(apiUrl) && (await getDocs(collection(db, apiUrl)));
    querySnapshot &&
      querySnapshot.forEach((doc) => {
        fetchData = !fetchData.find((item) => item.id === doc.data()?.id)
          ? [{ ...doc.data(), answers: [] }, ...fetchData].sort(
            (a, b) => a.id - b.id
          )
          : [...fetchData];
      });
    return fetchData;
  }, []);

  const handleSubmitOptions = (e, url) => {
    e.preventDefault();
    fetchQuestions(url)
      .then((res) => {
        const arr = [...initialValues, ...res];
        setinitialValues([...arr]);
      })
      .catch((err) => console.log(err));
  };

  const handleUnSelectQusestionRemove = (e, url) => {
    e.preventDefault();

    fetchQuestions(url)
      .then((res) => {
        const uniqueArr = initialValues.filter((item, index, self) => {
          const matchingItem = res.find((el) => el.id === item.id);
          return matchingItem
            ? self.findIndex((el) => el.id === item.id) !== index
            : true;
        });
        setinitialValues([...uniqueArr]);
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (values) => {
    try {
      user.uid && writeQuizeData(user.uid, values.questionsData);
      handleLogout();
      toast.success("Successfully submit your quiz");
      navigate("/signin");
    } catch (error) {
      toast.error(error);
    }
  };

  const questions =
    initialValues.length !== 0 ? [...initialValues, submitBtn] : initialValues;
  return (
    <Formik
      initialValues={{ questionsData: questions }}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
      enableReinitialize
      validateOnChange
    >
      {({ values, handleSubmit }) => {
        return !values.questionsData.length === 0 ? (
          <p>NO DATA</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <FieldArray
              name="questions"
              render={(arrayHelper) => (
                <>
                  <Carousel indicators={false} interval={null}>
                    {values?.questionsData?.length !== 0 &&
                      values?.questionsData?.map((item, queIndex) => {
                        return (
                          <Carousel.Item key={`item-${item.id}-${queIndex}`}>
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
                                    <p className="fw-bold my-0">
                                      {item.example}
                                    </p>
                                  </Row>
                                )}
                                {item.subtext && (
                                  <p className={Styles.italic_text}>
                                    {item.subtext}
                                  </p>
                                )}

                                {item.options && (
                                  <OptionContainer
                                    handleSubmitOptions={handleSubmitOptions}
                                    handleUnSelectQusestionRemove={
                                      handleUnSelectQusestionRemove
                                    }
                                    initialValues={initialValues}
                                    setinitialValues={setinitialValues}
                                    item={item}
                                    queIndex={queIndex}
                                    arrayHelper={arrayHelper}
                                  />
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
                        );
                      })}
                  </Carousel>
                </>
              )}
            />
          </form>
        );
      }}
    </Formik>
  );
};

export default CustomSwiper;
