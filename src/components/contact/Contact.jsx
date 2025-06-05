import { VscArrowRight } from "react-icons/vsc";
import { Button, Input, Textarea } from "../../components/index";
import styles from "./contact.module.css";

const Contact = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
    // You can add more logic here to handle the input change
  };

  return (
    <div>
      <section className={styles.contact} id="contact">
        <h1>Contact</h1>
        <p>Contact information</p>
      </section>
      <form>
        <div>
          <Input
            type="text"
            placeholder="Enter First Name"
            className={styles.input}
            onChange={handleChange}
            label="First Name"
          />
        </div>
        <div>
          <Input
            type="email"
            placeholder="Enter Email"
            className={styles.input}
            onChange={handleChange}
            label="Email"
          />
        </div>
        <div>
          <Input
            type="password"
            placeholder="Enter Password"
            className={styles.input}
            onChange={handleChange}
            label="Password"
          />
        </div>
        <div>
          <Textarea
            className={styles.textarea}
            onChange={handleChange}
            label="Message"
            cols="30"
            rows="10"
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
