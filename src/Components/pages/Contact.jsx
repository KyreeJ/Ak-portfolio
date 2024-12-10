import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<{ success: boolean, error: string }>({
    success: false,
    error: '',
  });

  const handleInputChange = (
    e
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ success: false, error: 'All fields are required.' });
      return;
    }

   
   
    if(!emailPattern.test(formData.email)) {
      setFormStatus({ success: false, error: 'Please enter a valid email address.' });
      return;
    }


    setFormStatus({ success: false, error: '' });

    
    setTimeout(() => {
      setFormStatus({ success: true, error: '' });
      setFormData({ name: '', email: '', message: '' }); 
    }, 1000);
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>

      {formStatus.success && <p className="success-message">Your message has been sent!</p>}
      {formStatus.error && <p className="error-message">{formStatus.error}</p>}

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your message"
            rows={4}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
    </div>
  );
}
