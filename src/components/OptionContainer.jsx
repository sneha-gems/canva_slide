import OptionCard from "./OptionCard";
import cx from "classnames";
import Styles from "./Styles.module.css";
import { useState } from "react";
import { useFormikContext } from "formik";

const OptionContainer = (props) => {
  const { item, queIndex, arrayHelper } = props;
  const {values} = useFormikContext()
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleClick = (e) => {

    setSelectedOptions((prev) =>
      prev.includes(e.target.value)
        ? prev.filter((opt) => opt !== e.target.value)
        : [...prev, e.target.value]
    );
  arrayHelper.push({...item, options: selectedOptions})

  };

  console.log('selectedOptions', selectedOptions)
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
              key={`options-${index}`}
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
