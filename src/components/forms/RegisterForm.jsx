import { useFormik } from "formik";
import { Button, Col, Form, Row } from "react-bootstrap";
import Layout from "./Layout";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import TextInput from "../inputs/TextInput";
import db from '../../firebase/index.js';
import { collection, doc, setDoc } from "firebase/firestore";


const initialValues = {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
};



const RegisterForm = () => {
  const navigate = useNavigate();

  const collectionRef = collection(db, 'users')

  const writeUserData = async (userId, name, values) => {
    const userRef = doc(collectionRef, userId)
    await setDoc(userRef, {userId: userId, name: name, ...values});
  }

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          try {
            writeUserData(user.uid, values.userName, { ...values });
          } catch (error) {
            toast.error(error);
          }
          
          toast.success("user created successfully.");
          navigate("/signin");

          // ...
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorMessage);
          // ..
        });
    },
  });

  return (
    <Layout>
      <form onSubmit={formik.handleSubmit}>
        <Row className="m-3">
          <Col xs={6}>
            <Row>
              <Form.Label className="form-label">First Name</Form.Label>
            </Row>
            <Row>
              <TextInput
                type={"text"}
                name="firstName"
                placeholder="First name"
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
            </Row>
          </Col>
          <Col xs={6}>
            <Row>
              <Form.Label className="form-label">Last Name</Form.Label>
            </Row>
            <Row>
              <TextInput
                type={"text"}
                name="lastName"
                placeholder="Last name"
                onChange={formik.handleChange}
                value={formik.values.lastName}
              />
            </Row>
          </Col>
        </Row>
        <Row className="m-3">
          <Col xs={6}>
            <Row>
              <Form.Label className="form-label">User Name</Form.Label>
            </Row>
            <Row>
              <TextInput
                type={"text"}
                name="userName"
                placeholder="User name"
                onChange={formik.handleChange}
                value={formik.values.userName}
              />
            </Row>
          </Col>
          <Col>
            <Row>
              <Form.Label className="form-label">Email</Form.Label>
            </Row>
            <Row>
              <TextInput
                type={"email"}
                name="email"
                placeholder="Email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </Row>
          </Col>
        </Row>
        <Row className="m-3">
          <Col>
            <Row>
              <Form.Label className="form-label">Password</Form.Label>
            </Row>
            <Row>
              <TextInput
                type={"password"}
                name="password"
                placeholder="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </Row>
          </Col>
          <Col>
            <Row>
              <Form.Label className="form-label">Confirm password</Form.Label>
            </Row>
            <Row>
              <TextInput
                type={"password"}
                name="confirmPassword"
                placeholder="confirm Password"
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
              />
            </Row>
          </Col>
        </Row>
        <div className="text-center my-3">
          <Button type="submit" className="btn btn-primary w-75 register-btn">
            Register
          </Button>
        </div>
        <div>
          <p className="text-center login-text">
            Already an account? <a href="/signin" className="text-decoration-none"><span>Login</span></a>
          </p>
        </div>
      </form>
    </Layout>
  );
};

export default RegisterForm;
