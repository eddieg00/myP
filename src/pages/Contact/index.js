import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("mgebqnvp");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <section className="contact">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            className="input-field"
          />
        </div>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          id="message"
          name="message"
          className="textarea-field"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting} className="submit-button">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
