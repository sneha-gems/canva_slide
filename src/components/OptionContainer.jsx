import OptionCard from "./OptionCard";
import cx from "classnames";
import Styles from "./Styles.module.css";
import { useState } from "react";
import { useFormikContext } from "formik";
import { matchOptions, matchSupplements } from "../contexts/constant";

const OptionContainer = (props) => {
  const {
    item,
    queIndex,
    setinitialValues,
    handleSubmitOptions,
    handleUnSelectQusestionRemove,
  } = props;
  const { values } = useFormikContext();

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleClick = (e, text) => {
    setSelectedOptions((prev) =>
      prev.includes(text) ? prev.filter((opt) => opt !== text) : [...prev, text]
    );

    if (item.answers?.includes(text)) {
      item.answers = item?.answers.filter((opt) => opt !== text);
      if (item.questionId === "gq-8") {
        const url = matchOptions(text, values.questionsData);
        handleUnSelectQusestionRemove(e, url);
      }
      if (item.questionId === "gq-5") {
        const url = matchSupplements(text);
        handleUnSelectQusestionRemove(e, url);
      }
    } else {
      item.answers.push(text);
      if (item.questionId === "gq-8") {
        const url = matchOptions(text, values.questionsData);
        handleSubmitOptions(e, url);
      }
      if (item.questionId === "gq-5") {
        const index = values.questionsData.findIndex(
          (obj) => obj.questionId === "gq-6"
        );
        values.questionsData[index].options = item.answers;
        setinitialValues([...values.questionsData]);
        const url = matchSupplements(text);
        handleSubmitOptions(e, url);
        if (!(item.answers.length <= 3)) {
          alert("Select top 3");
          item.answers = item?.answers.filter((opt) => opt !== text);
          setSelectedOptions((prev) =>
            prev.includes(text)
              ? prev.filter((opt) => opt !== text)
              : [...prev, text]
          );
        }
      }
    }
  };

  return (
    <>
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
              queIndex={queIndex}
              key={`options-${index}-${option}`}
              selectedOptions={selectedOptions}
              index={index}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default OptionContainer;
