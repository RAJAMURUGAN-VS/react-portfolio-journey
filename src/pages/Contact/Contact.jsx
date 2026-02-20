import './Contact.css'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'

const Contact = () => {
  const formRef = useRef()
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm(
      'service_f5tatud',
      'template_01opc87',
      formRef.current,
      'IgdYSWc67wUqnj_M6'
    )
    .then(() => {
      alert('Message sent successfully!')
      formRef.current.reset()
    })
    .catch(() => {
      alert('Failed to send message')
    })
  }

  return (
    <section className="contact-container">
      <div className="contact-content">
        <h1 className="contact-heading">Contact Me</h1>
        <p className="contact-subtext">
          I'm open to internships, collaborations, and opportunities.
        </p>
      </div>
      <div className="contact-form-container">
        <form ref={formRef} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact