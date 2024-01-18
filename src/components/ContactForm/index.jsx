import './style.css'
import React, { useState } from 'react';

function ContactForm() {

  const [formData, setFormData] = useState({
    firstName: '', lastName: '',
    email: '', subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    firstName: '', lastName: '',
    email: '', subject: '',
    message: '',
  });

  // handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // error messages
    const newErrors = {
      firstName: formData.firstName ? '' : 'Please enter your first name.',
      lastName: formData.lastName ? '' : 'Please enter your last name.',
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        ? ''
        : 'Please provide a valid email address.',
      subject: formData.subject ? '' : 'Please provide a valid subject.',
      message: formData.message ? '' : 'Please enter your message.',
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error !== '')) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div>
      <h1>Enquiries</h1>
      <p>We would love to hear from you!</p>
      <p>Please fill out the contact form below.</p>
      <form className="needs-validation" onSubmit={handleSubmit}>
      <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationCustomFirstName">First name</label>
            <input type="text" className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
              id="validationCustomFirstName" name="firstName" placeholder="First Name" aria-describedby="inputGroupPrepend"
              value={formData.firstName} onChange={handleInputChange}/>
            <div className="invalid-feedback">{errors.firstName}</div>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="validationCustomLastName">Last name</label>
            <input type="text" className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
              id="validationCustomLastName" name="lastName" placeholder="Last Name" aria-describedby="inputGroupPrepend"
              value={formData.lastName} onChange={handleInputChange}/>
            <div className="invalid-feedback">{errors.lastName}</div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationCustomEmail">Email</label>
            <input type="text" className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              id="validationCustomEmail" name="email" placeholder="Email" aria-describedby="inputGroupPrepend"
              value={formData.email} onChange={handleInputChange}/>
            <div className="invalid-feedback">{errors.email}</div>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="validationCustomSubject">Subject</label>
            <input type="text" className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
              id="validationCustomSubject" name="subject" placeholder="Subject" aria-describedby="inputGroupPrepend"
              value={formData.subject} onChange={handleInputChange}/>
            <div className="invalid-feedback">{errors.subject}</div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-12 mb-3">
            <label htmlFor="validationCustomMessage">Message</label>
            <textarea className={`form-control ${errors.message ? 'is-invalid' : ''}`}
              id="validationCustomMessage" name="message" placeholder="Message"
              rows="4"
              value={formData.message} onChange={handleInputChange}></textarea>
            <div className="invalid-feedback">{errors.message}</div>
          </div>
        </div>

        <button className="btn btn-primary" type="submit">
          Submit form
        </button>
      </form>
    </div>
  );
}

export default ContactForm