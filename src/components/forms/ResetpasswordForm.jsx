import { useFormik } from "formik";
import { Form, Row, Button } from "react-bootstrap";

const ResetpasswordForm = () => {
  const formik = useFormik({
    initialValues: { email: "" },
    onSubmit: (values) => alert(JSON.stringify(values)),
  });

  
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Row>
          <Form.Label>Email</Form.Label>
        </Row>
        <Row>
          <input
            type={"email"}
            name='email'
            placeholder="Enter your email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </Row>
        <Row>
            <Button type='submit'>Send Request</Button>
        </Row>
      </form>
    </>
  );
};

export default ResetpasswordForm;
