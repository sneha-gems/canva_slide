import OptionCard from "./OptionCard";
import cx from "classnames";
import Styles from "./Styles.module.css";
import { useEffect, useState } from "react";
import { useFormikContext } from "formik";
import { matchOptions, matchSupplements, questions } from "../contexts/constant";
import { useReadData } from "../hooks/useReadData";

const OptionContainer = (props) => {
  const { item, queIndex, setinitialValues, handleSubmitOptions } = props;
  const { values } = useFormikContext()

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleClick = (e) => {
    setSelectedOptions((prev) =>
      prev.includes(e.target.value)
        ? prev.filter((opt) => opt !== e.target.value)
        : [...prev, e.target.value]
    );

    if (item.questionId === 'gq-8') {
      const url = matchOptions(e.target.value, values.questionsData);
      handleSubmitOptions(e, url)
    }

    item.answers?.includes(e.target.value)
      ? item.answers = item?.answers.filter((opt) => opt !== e.target.value)
      : item.answers.push(e.target.value)

    if (item.questionId === 'gq-5') {
      const index = values.questionsData.findIndex((obj) => obj.questionId === "gq-6");
      values.questionsData[index].options = item.answers
      setinitialValues([...values.questionsData])
      const url = matchSupplements(e.target.value)
      handleSubmitOptions(e, url)
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
