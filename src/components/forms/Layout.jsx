import { Card, Row } from "react-bootstrap";

const Layout = ({ children }) => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center register-container">
        <Card style={{ width: "45rem" }}>
          <Card.Body>
            <div className="d-flex justify-content-center align-items-center">
                <Row>
              <Row>
                <img alt="image here" />
              </Row>
              <Row>
                <h2>Register</h2>
              </Row>
              </Row>
            </div>
            {children}
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Layout;
