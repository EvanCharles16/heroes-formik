import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "react-bootstrap";
import Axios from "axios";
import foto from "../logo.jpeg";
import "./Form.css";

class InputForm extends Component {
  handleSubmit = (values, actions) => {
    const URL = `http://localhost:5500/heroes`;
    Axios.post(URL, { values }).then((res) => {
      actions.setSubmitting(false);
      actions.resetForm();
      window.alert("Kamu Berhasil menyimpan data");
      console.log(res);
    });
  };

  render() {
    return (
      <Formik
        initialValues={{
          fullName: "",
          born: "",
          died: "",
          description: "",
          establishment: "",
          imgURL: "",
        }}
        validate={(values) => {
          let errors = {};
          if (!values.fullName) {
            errors.fullName = (
              <small className="form-text text-danger">Name is required</small>
            );
            return errors;
          }
        }}
        onSubmit={this.handleSubmit}
        render={(formProps) => {
          return (
            <div className="container">
              <div className="row justify-content-center ">
                <div className="col-6">
                  <div className="card p-5 mt-5">
                    <img src={foto} alt="foto-pahlawan" />
                    <hr />
                    <Form>
                      <div className="form-group">
                        <Field
                          type="text"
                          name="fullName"
                          placeholder="Full Name"
                          className="form-control"
                        />
                        <ErrorMessage name="fullName" />
                      </div>
                      <div className="form-group">
                        <Field
                          type="number"
                          name="born"
                          placeholder="Date of Birth"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          type="number"
                          name="died"
                          placeholder="Died"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          type="text"
                          name="description"
                          placeholder="Description"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          type="number"
                          name="establishment"
                          placeholder="Establishment"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <Field
                          type="text"
                          name="imgURL"
                          placeholder="Image URL"
                          className="form-control"
                        />
                      </div>

                      <Button variant="outline-primary" type="submit">
                        Save
                      </Button>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      />
    );
  }
}
export default InputForm;
