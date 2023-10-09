import { Card } from "react-bootstrap";
import Styles from '../components/Styles.module.css';
import cx from 'classnames' 



const OptionCard = ({ text, queIndex, handleClick, selectedOptions, index }) => {
    // const [selectedOptions, setSelectedOptions] = useState([])
    // console.log('formik', formik.values.questions)
  
    // const handleClick = (e) => {
      
    //   setSelected((prev) => (prev === e.target.value ? "" : e.target.value));
    //   setSelectedOptions((prev) => [ ...prev,  e.target.value])
    //   arrayHelper.push({...question, options: [e.target.value]})
    // };
  
    // useEffect(() => {
    //   console.log('selectedOptions', selectedOptions)
  
    // }, [selectedOptions])
  
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

  export default OptionCard