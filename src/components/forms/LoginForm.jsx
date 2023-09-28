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
          // const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorMessage)
        });
    },
  });

  return (
    <Layout textTitle="Login">
      <form className="m-3" onSubmit={formik.handleSubmit}>
        <Row>
          <Form.Label className="form-label">Email</Form.Label>
          <TextInput
            type={"email"}
            name="email"
            placeholder="Enter your email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </Row>
        <Row className="mt-3">
          <Form.Label className="form-label">Password</Form.Label>
          <TextInput
            type="password"
            name="password"
            placeholder="enter your password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <div className=" mt-3">
            <a href="/reset" className="text-decoration-none forgot_password_container"><p>Forgot Password ?</p></a>
          </div>
        </Row>
        <div className="text-center my-3">
          <Button type="submit" className="btn btn-primary w-75 register-btn">
            Login
          </Button>
        </div>
        <div>
          <p className="text-center login-text">
            Don't have an account? <a href="/signup" className="text-decoration-none"><span>Sign up</span></a>
          </p>
        </div>
      </form>
    </Layout>
  );
};

export default LoginForm;
