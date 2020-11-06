import React from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './SignUp.css';


function SignUp() {
	return (
	<div className="signUpBox">
	<Form>
	<FormGroup>
    <h3>Sign up to start learning!</h3>
        <Label>Name</Label>
        <Input type="name" name="name" id="name" placeholder="Mary Jones" />
      </FormGroup>
      <FormGroup>
        <Label>Email</Label>
        <Input type="email" name="email" id="email" placeholder="test@test.com" />
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input type="password" name="password" id="password" placeholder="password" />
      </FormGroup>
      <FormGroup>
        <Label>Why do you want to learn coding?</Label>
        <Input type="textarea" name="learnersummary" id="learnersummary">
        </Input>
      </FormGroup>
      <Button className="submit">Sign Up!</Button>
	  </Form>
	  </div>
	);
}

export default SignUp;