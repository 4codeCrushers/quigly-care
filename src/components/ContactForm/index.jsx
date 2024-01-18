import './style.css'

function ContactForm() {
  return (
    <div className="contact-form-container">
      <div className="row">
        <div className="col-md-12">
          <h1>Enquiries</h1>
          <p>We would love to hear from you!</p>
          <p>Please fill out the contact form below.</p>
          <form className="needs-validation" noValidate>
            <div className="form-row">
              <div className="col-md-4 mb-3">
                <label htmlFor="validationCustomFirstName">First name</label>
                <input type="text" className="form-control" id="validationCustomFirstName" placeholder="First Name" aria-describedby="inputGroupPrepend" required/>
                <div className="invalid-feedback">Please enter your first name.</div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="validationCustomLastName">Last name</label>
                <input type="text" className="form-control" id="validationCustomLastName" placeholder="Last Name" aria-describedby="inputGroupPrepend" required/>
                <div className="invalid-feedback">Please enter your last name.</div>
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-6 mb-3">
                <label htmlFor="validationCustom03">Email</label>
                <input type="email" className="form-control" id="validationCustom03" placeholder="Email" required/>
                <div className="invalid-feedback">Please provide a valid contact email address.</div>
              </div>
              <div className="col-md-4 mb-3">
                <label htmlFor="validationCustom04">Subject</label>
                <input type="text" className="form-control" id="validationCustom04" placeholder="Subject" required/>
                <div className="invalid-feedback">Please provide a valid subject.</div>
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-6 mb-3">
                <label htmlFor="validationCustom05">Message</label>
                <textarea className="form-control" id="validationCustom05" placeholder="Message" rows="4" required></textarea>
                <div className="invalid-feedback">Please enter your message.</div>
              </div>
            </div>
            <button className="btn btn-primary" type="submit"> Submit form </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm