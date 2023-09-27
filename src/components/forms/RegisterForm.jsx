import { useFormik } from "formik";
import { Button, Col, Form, Row } from "react-bootstrap";
import Layout from "./Layout";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { getDatabase, ref, set } from "firebase/database";

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
              <Form.Label>First Name</Form.Label>
            </Row>
            <Row>
              <input
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
              <Form.Label>Last Name</Form.Label>
            </Row>
            <Row>
              <input
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
              <Form.Label>User Name</Form.Label>
            </Row>
            <Row>
              <input
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
              <Form.Label>Email</Form.Label>
            </Row>
            <Row>
              <input
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
              <Form.Label>Password</Form.Label>
            </Row>
            <Row>
              <input
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
              <Form.Label>Confirm password</Form.Label>
            </Row>
            <Row>
              <input
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
