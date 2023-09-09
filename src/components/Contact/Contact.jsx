import React, { useRef } from "react";
import "./Contact.css";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import {toast} from 'react-hot-toast';

const Contact = () => {

  const {
    setValue,
    getValues,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const form = useRef();


  const onSubmit = (data) => {

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, "template_o2c7r47", form.current, "qg11O4YvW6jSQBobI", {
            to_name : process.env.REACT_APP_TO_EMAIL_1,
            from_name : process.env.REACT_APP_FROM_EMAIL_1,
            name : data.name,
            email : data.email,
            subject : data.subject,
            message : data.message
      })
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, "template_fs6pgsx", form.current, "qg11O4YvW6jSQBobI", {
        to_name : data.email,
        from_name : process.env.REACT_APP_FROM_EMAIL_1,
        name : data.name
  })
  .then((result) => {
      console.log(result.text);
      toast.success("We'll be in touch soon.Thanks.");
  }, (error) => {
      console.log(error.text);
      toast.error("Please,Try Again.Thanks. ");
  });
  }

  return (
    <div className="contact-section" id="contactme">
      <div className="contact-upper">
        <div className="contact-heading">Contact Me</div>
        <div className="contact-subheading">
          Questions, Thoughts, Or Just Want To Say Hello ?
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="contact-lower" ref={form}>
        <input
          type="text"
          id="name"
          name="name"
          className="input-field"
          placeholder="Enter Name"
          {...register("name", { required: true })}
        />
        {errors.name && <span className="errMsg">Name Required</span>}
        <input
          type="text"
          id="email"
          name="email"
          className="input-field"
          placeholder="Enter Email"
          {...register("email", { required: true })}
        />
        {errors.email && <span className="errMsg">Email Required</span>}
        <input
          type="text"
          id="subject"
          name="subject"
          className="input-field"
          placeholder="Enter Subject"
          {...register("subject", { required: true })}
        />
        {errors.subject && <span className="errMsg">Subject Required</span>}
        <textarea
          id="name"
          name="name"
          className="input-field"
          rows="5"
          placeholder="Enter Your Thoughts"
          {...register("message", { required: true })}
        ></textarea>
        {errors.message && <span className="errMsg">Message Required</span>}

        <button className="btn-pink" id="btn" type="submit">
          Send{" "}
        </button>
      </form>
    </div>
  );
};

export default Contact;
