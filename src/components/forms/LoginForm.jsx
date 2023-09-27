import { useFormik } from "formik";
import { Row, Form, Button } from "react-bootstrap";
import Layout from "./Layout";

const LoginForm = () => {

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Layout>
      <form onSubmit={formik.handleSubmit}>
        <Row>
          <Form.Label>Email</Form.Label>
          <input
            type={"email"}
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </Row>
        <Row>
          <Form.Label>Password</Form.Label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </Row>
        <Row>
          <Button type="submit">Login</Button>
        </Row>
      </form>
    </Layout>
  );
};

export default LoginForm;
