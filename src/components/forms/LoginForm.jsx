import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useFormik } from "formik";
import { Row, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import TextInput from "../inputs/TextInput";
import Layout from "./Layout";

const LoginForm = () => {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (values) => {
      const auth = getAuth();
      signInWithEmailAndPassword(
        auth,
        formik.values.email,
        formik.values.password
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          toast.success('Successfully sign in')
          navigate('/')
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorMessage)
        });

      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Layout>
      <form onSubmit={formik.handleSubmit}>
        <Row>
          <Form.Label>Email</Form.Label>
          <TextInput
            type={"email"}
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </Row>
        <Row>
          <Form.Label>Password</Form.Label>
          <TextInput
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
