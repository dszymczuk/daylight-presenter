import React from "react";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";


export default ({ field: { name }, form: { setFieldValue, setFieldTouched } }) => (
  <DatePicker
    customInput={
      <Form.Group controlId="date">
        <Form.Label>Date</Form.Label>
        <Form.Control type={"text"}/>
      </Form.Group>
    }
    onChange={value => {
      if (!!value) {
        const formattedDate = moment(value).format("DD.MM.YYYY");
        setFieldValue(name, formattedDate);
        setFieldTouched(name, true);
      }
    }}
    showMonthDropdown
    showYearDropdown
  />
)
