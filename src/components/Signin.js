import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useRef } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
import { userActions } from "../stores/user";

const Signin = (props) => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const dispatch = useDispatch();
  const history = useHistory();

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const signInUser = {
        email: emailRef.current.value,
        password: passwordRef.current.value
      };

      const signUpUser = localStorage.getItem("userDetail");
      if(JSON.stringify(signInUser) === signUpUser){
        alert("Successful");
        dispatch(userActions.loggedIn());
        history.push("/movies");
      }else{
        alert("Wrong credential");
      }

      emailRef.current.value = "";
      passwordRef.current.value = "";

    } catch (error) {
      console.log(error);

      emailRef.current.value = "";
      passwordRef.current.value = "";
    }
    
  };

  return (
    <Form className="signup" onSubmit={submitHandler}>
      <h3 className="text-center my-4">Login</h3>
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
      <div className="d-grid">
        <Button variant="primary" size="md" type="submit" className="mb-2">
          Login
        </Button>
        <p className="text-center">New User <Link to="/">SignUp</Link></p>
      </div>
    </Form>
  );
};

export default Signin;
