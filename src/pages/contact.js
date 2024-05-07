import React from 'react';
import { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="singlepage__contentContainer">
        <h1 className="singlepage__headerTitle">Contact</h1>
      </div>
      <div className="singlepage__content">
        <div className="container">
          <h3 className="">Drop me a Message</h3>
          <form
            action="https://formsubmit.co/mailtomkra@duck.com"
            method="POST"
          >
            <div className="form-group">
              <div className="form-row">
                <div className="col">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="col">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email Address"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <textarea
                placeholder="Your Message"
                className="form-control"
                name="message"
                rows="10"
                required
              ></textarea>
            </div>

            <div className="privacy">
              <input type="checkbox" id="privacy" name="privacy" required />
              <label htmlFor="privacy">
                I have read and accept the{' '}
                <a href="/privacydisclaimer">Privacy Policy</a>.
              </label>
            </div>
            <button type="submit" className="hero__button button primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
