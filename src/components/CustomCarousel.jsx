import React from "react";
import { Card, Carousel, Col, Row } from "react-bootstrap";
import Styles from "./Styles.module.css";
import "../App.css";
import { questions } from "../constant";
import TextInput from "./inputs/TextInput";
import cx from "classnames";

// const Slide = React.forwardRef((props, ref) => {
//   const {question} = props
//   return (
//     <Carousel.Item ref={ref}>
//         <h2>{question}</h2>
//           <TextInput type="text"/>
//       </Carousel.Item>
//   )
// })

const OptionCard = ({text}) => {
  return (
    <div className={Styles.option_container}>
      <Card className={cx(Styles.custum_height,"border-0")}>
        <Card.Body className="d-flex justify-content-center align-items-center">
          <p className={Styles.option_text}>{text}</p></Card.Body>
      </Card>
    </div>
  );
};

const CustomSwiper = () => {
  return (
    <Carousel indicators={false} interval={null}>
      {questions.map((item) => {
        return (
          <Carousel.Item key={item.id}>
            <Col>
              {item.title && (
                <Row className={cx(Styles.outer_option_container,Styles.title_container, 'justify-content-center')}>
                  <h1>{item.title}</h1>
                </Row>
              )}
              {item.subtitle && (
                <h4>{item.subtitle}</h4>
              )}

              {item.question && (
                <Row>
                  <div
                  className={cx(Styles.custom_align_center, "mb-4 text-wrap")}
                  >
                  <h3>{item?.question}</h3>
                  </div>
                </Row>
              )}
              {item.example && (
                <Row
                  className={cx(
                    Styles.container_example,
                    Styles.custom_align_center, 'mb-4'
                  )}
                >
                  <p className="fw-bold my-0">{item.example}</p>
                </Row>
              )}
              {item.subtext && <p className={Styles.italic_text}>{item.subtext}</p>}
              {item.input === "text" && (
                <TextInput type="text" />
              )}
               { item.options && (
                <div>
                  <div className={cx(item.options.length === 7 ? Styles.more_option_container : Styles.outer_option_container, "justify-content-center")}>
                    {item.options.map((option) => <OptionCard text={option}/>)}
                  </div>
                </div>
                
              )}
            </Col>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default CustomSwiper;
