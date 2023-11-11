import { Button, FloatingLabel, Form } from "react-bootstrap";
import "./Signup.css";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Signup = (props) => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const nameRef = useRef("");
  const numberRef = useRef("");
  const professionRef = useRef("");

  const submitHandler = async (e) => {
      e.preventDefault();
      const user = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };
      localStorage.setItem("userDetail", JSON.stringify(user));

      alert("You are successfully signed up");

      emailRef.current.value = "";
      passwordRef.current.value = "";
      nameRef.current.value = "";
      numberRef.current.value = "";
      professionRef.current.value = "";
  };

  return (
    <Form className="signup" onSubmit={submitHandler}>
      <h3 className="text-center my-4">SignUp</h3>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control
          type="email"
          placeholder="name@example.com"
          ref={emailRef}
          required
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingPassword"
        label="Password"
        className="mb-3"
      >
        <Form.Control
          type="password"
          placeholder="Password"
          ref={passwordRef}
          required
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingName"
        label="Name"
        className="mb-3"
      >
        <Form.Control
          type="text"
          placeholder="text"
          ref={nameRef}
          required
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingPhone"
        label="Phone"
        className="mb-3"
      >
        <Form.Control
          type="number"
          placeholder="text"
          ref={numberRef}
          required
        />
      </FloatingLabel>
      <FloatingLabel controlId="floatingSelect" label="Profession" className="mb-3">
      <Form.Select aria-label="Floating label select example" ref={professionRef}>
        <option value="">Open this select menu</option>
        <option value="education">Education</option>
        <option value="health">Health</option>
        <option value="services">Services</option>
        <option value="government">Government</option>
      </Form.Select>
    </FloatingLabel>
      <div className="d-grid">
        <Button variant="primary" size="md" type="submit" className="mb-2">
          Sign Up
        </Button>
        <p className="text-center">Already a user <Link to="/login">Login</Link></p>
      </div>
    </Form>
  );
};

export default Signup;
