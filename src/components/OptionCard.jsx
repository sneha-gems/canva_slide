import { Card } from "react-bootstrap";
import Styles from "../components/Styles.module.css";
import cx from "classnames";

const OptionCard = ({
  text,
  queIndex,
  handleClick,
  selectedOptions,
  index,
}) => {
  return (
    <div
      className={
        selectedOptions.includes(text)
          ? Styles.option_container_active
          : Styles.option_container
      }
    >
      <Card className={cx(Styles.custum_height, "border-0")}>
        <Card.Body className="d-flex justify-content-center align-items-center">
          <div
            name={`questions[${queIndex}].options[${index}]`}
            className={cx(Styles.option_text, "input-card")}
            onClick={(e) => handleClick(e, text)}
          >
            {text}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default OptionCard;
