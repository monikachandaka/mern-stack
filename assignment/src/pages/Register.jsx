import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import { alignPropType } from 'react-bootstrap/esm/types';
function Register() {

  const [details, setDetails] = useState({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  phone: '',
  address: '',
});

  return (
   <>
    <h1>Registration Form</h1>
    <div id="form-container">
    <Form>
      <Row className="mb-3">
       
       <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" placeholder="Enter full name" required />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPhone">
          <Form.Label>Phone No:</Form.Label>
          <Form.Control type="tel" pattern="[6-9][0-9]{9}" required placeholder="Enter phone number" />
        </Form.Group>
      </Row>



        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" required placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label> Create Password:</Form.Label>
          <Form.Control type="password" required placeholder="Password" />
        </Form.Group>
      </Row>

       <Form.Group className="mb-3">
        <Form.Label> Check me out </Form.Label>
          <br />
        <span>If You  Already Have Register Click here to {" "} <a href="/login">Login</a>
        </span>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
   </>
  );
}


export default Register;