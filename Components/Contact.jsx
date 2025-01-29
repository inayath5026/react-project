const Contact = () => {
    return (
        <div className="contact-container">
            <h2 id="contact-heading">Contact Us</h2>
            <p id="contact-description">If you have any questions or feedback, feel free to reach out to us!</p>
            
            <form id="contact-form">
                <div className="form-group" id="name-group">
                    <label htmlFor="name" id="name-label">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your Name" required />
                </div>
                <div className="form-group" id="email-group">
                    <label htmlFor="email" id="email-label">Email</label>
                    <input type="email" id="email" name="email" placeholder="Your Email" required />
                </div>
                <div className="form-group" id="message-group">
                    <label htmlFor="message" id="message-label">Message</label>
                    <textarea id="message" name="message" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" id="submit-btn">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;