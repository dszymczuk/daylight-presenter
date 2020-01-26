import { Form } from "react-bootstrap";
import React from "react";

const Input = ({ label, field, field: { name }, form: { errors } }) => (
  <Form.Group controlId={name}>
    <Form.Label>{label}</Form.Label>
    <Form.Control type={'text'} value={field.value} onChange={field.onChange} isInvalid={errors[name]}/>
    {errors[name] && <Form.Control.Feedback type="invalid">
      {errors[name]}
    </Form.Control.Feedback>}
  </Form.Group>
);

export default Input;