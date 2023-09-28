import { useFormik } from "formik";
import { Button, Col, Form, Row } from "react-bootstrap";
import Layout from "./Layout";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { getDatabase, ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";
import TextInput from "../inputs/TextInput";

const initialValues = {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function writeUserData(userId, name, values) {
  const db = getDatabase();
  set(ref(db, '/users/' + userId), {
    username: name,
    ...values
  });
}


const RegisterForm = () => {
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          writeUserData( user.uid, values.userName, {...values})
          toast.success("user created successfully.");
          navigate('/signin')

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
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
                placeholder="confirmPassword"
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
              />
            </Row>
          </Col>
        </Row>
        <Row className="m-3">
          <Button type="submit">Register</Button>
        </Row>
      </form>
    </Layout>
  );
};

export default RegisterForm;
