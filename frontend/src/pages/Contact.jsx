import { useState } from 'react';
import { useToast } from '../components/Toast';

const API_URL = 'http://localhost:5000/api/contact';

function Contact() {
    const { addToast } = useToast();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            addToast('Message sent successfully! I\'ll get back to you soon.', 'success');
            setFormData({ name: '', email: '', message: '' });

        } catch (err) {
            addToast(err.message || 'Failed to send message. Please try again.', 'error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="page">
            <div className="container">
                <div className="page-header">
                    <h1>Get In Touch</h1>
                    <p>Have a project in mind? Let's work together!</p>
                </div>

                <div className="contact-container">
                    <div className="contact-info">
                        <div className="contact-item">
                            <div className="contact-item-icon"><span className="material-symbols-outlined">mail</span></div>
                            <div>
                                <h4>Email</h4>
                                <p>ahmidris2030@gmail.com</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-item-icon"><span className="material-symbols-outlined">location_on</span></div>
                            <div>
                                <h4>Location</h4>
                                <p>Addis Ababa, Ethiopia</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-item-icon"><span className="material-symbols-outlined">work</span></div>
                            <div>
                                <h4>Availability</h4>
                                <p>Open for freelance projects</p>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit} noValidate>
                        <h3>Send me a message</h3>

                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-input"
                                placeholder="Your name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && <span className="form-error">{errors.name}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-input"
                                placeholder="your.email@example.com"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <span className="form-error">{errors.email}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                className="form-textarea"
                                placeholder="Tell me about your project..."
                                value={formData.message}
                                onChange={handleChange}
                            />
                            {errors.message && <span className="form-error">{errors.message}</span>}
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={isSubmitting}
                            style={{ width: '100%' }}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
