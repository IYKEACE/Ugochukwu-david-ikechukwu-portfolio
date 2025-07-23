import { useState } from "react";
import { VscArrowRight } from "react-icons/vsc";
import { Button, Input, Textarea } from "../../components/index";
import styles from "./contact.module.css";

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !form.firstName.trim() ||
      !form.lastName.trim() ||
      !form.email.trim() ||
      !form.message.trim()
    ) {
      alert("Please complete the form before submitting");
      return;
    }
    alert("Form submitted completely!");
    // Submit logic here
  };

  return (
    <div>
      <section className={styles.contact} id="contact">
        <h1>Contact</h1>
        <p>Contact information</p>
      </section>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className={styles.input}
            onChange={handleChange}
            value={form.firstName}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className={styles.input}
            onChange={handleChange}
            value={form.lastName}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={styles.input}
            onChange={handleChange}
            value={form.email}
          />
        </div>
        <div>
          <textarea
            name="message"
            className={styles.textarea}
            onChange={handleChange}
            cols="30"
            rows="10"
            value={form.message}
            placeholder="Your message here..."
          />
        </div>
        <div>
          <Button type="submit" className={styles.button}>
            Submit
            <VscArrowRight className={styles.icon} />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
