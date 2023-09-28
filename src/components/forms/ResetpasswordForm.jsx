import { useFormik } from "formik";
import { Form, Row, Button } from "react-bootstrap";
import TextInput from "../inputs/TextInput";

const ResetpasswordForm = () => {
  const formik = useFormik({
    initialValues: { email: "" },
    onSubmit: (values) => alert(JSON.stringify(values)),
  });

  
  return (
    <>
      <form className="m-3 reset_password_container" onSubmit={formik.handleSubmit}>
        <Row >
          <Form.Label className="form-label">Email</Form.Label>
        </Row>
        <Row>
          <TextInput
            type={"email"}
            name='email'
            placeholder="Enter your email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </Row>
        <div className="text-center my-3">
          <Button type="submit" className="btn btn-primary w-100 register-btn">
          Send Request
          </Button>
        </div>
      </form>
    </>
  );
};

export default ResetpasswordForm;
