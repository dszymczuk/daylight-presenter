import React from "react";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from './datepicker.module.scss';

export default ({ field: { name, value }, form: { setFieldValue, setFieldTouched } }) => {
  return (
    <div className={styles.datepickerWrapper}>
      <Form.Group controlId={name}>
        <Form.Label>Date</Form.Label>
        <DatePicker
          customInput={<Form.Control value={value}/>}
          onChange={value => {
            if (!!value) {
              setFieldValue(name, value);
              setFieldTouched(name, true);
            }
          }}
          dateFormat={'dd.MM.yyyy'}
          selected={value}
          maxDate={new Date()}
          showMonthDropdown
          showYearDropdown
        />
      </Form.Group>
    </div>
  )
}
