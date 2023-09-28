import { Card } from "react-bootstrap";

const Layout = ({textTitle='Register', children }) => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center register-container pages_background_color custom_font_family">
        <Card className="border-0">
          <Card.Body>
            <div className="wrapper">
            <div className="container">
            <div class="image-container text-center">
                    <img src=".././impulse.png" alt='logo image'/>
                </div>
                <div class="mb-5 text-center">
                    <h3 class="mx-auto">{textTitle}</h3>
                </div>
            </div>
            {children}
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Layout;
