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
          <Input
            type="text"
            name="firstName"
            placeholder="First Name"
            className={styles.input}
            onChange={handleChange}
            label="First Name"
            value={form.firstName}
          />
          <Input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className={styles.input}
            onChange={handleChange}
            label="Last Name"
            value={form.lastName}
          />
        </div>
        <div>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            className={styles.input}
            onChange={handleChange}
            label="Email"
            value={form.email}
          />
        </div>
        <div>
          <Textarea
            name="message"
            className={styles.textarea}
            onChange={handleChange}
            label="Message"
            cols="30"
            rows="10"
            value={form.message}
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
