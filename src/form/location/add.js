import React, { useContext } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { Field, Formik } from 'formik';
import DatePicker from "./../../components/datepicker";
import { Location as LocationContext } from "../../contexts/locations";
import moment from 'moment';
import validationSchema from './validationSchema';
import Input from "../../components/input";
import initialValues from "./initialValues";

const dateFormat = "DD.MM.YYYY";

const AddLocationForm = () => {
  const { addLocation } = useContext(LocationContext);

  return (
    <div>
      <Formik
        initialValues={{
          ...initialValues,
          date: moment(initialValues.date, dateFormat).toDate()
        }}
        enableReinitialize={true}
        onSubmit={(values, actions) => {
          addLocation({
            ...values,
            date: moment(values.date).format(dateFormat),
          });
        }}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          (<Form
            onSubmit={handleSubmit}
          >
            <Card>
              <Card.Header as="h5">
                <span>Add new location</span>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col>
                    <Field name={"name"} component={Input} label={"Name"}/>
                  </Col>
                  <Col>
                    <Field name={"lat"} component={Input} label={"Lat"}/>
                  </Col>
                  <Col>
                    <Field name={"lng"} component={Input} label={"Lng"}/>
                  </Col>
                  <Col>
                    <Field name={"date"} component={DatePicker}/>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Button variant="success" block type="submit">Add location</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Form>)
        )}
      </Formik>
    </div>
  )
};

export default AddLocationForm;