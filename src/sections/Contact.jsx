import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setisLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setisLoading(true);

    try {
      console.log("form submitted", formData);
      await emailjs.send(
        "service_9qnsagr",
        "template_20zsmrb",
        {
          from_name: formData.name,
          to_name: "Ziyad",
          from_email: formData.email,
          to_email: "huzeifaziyad@gmail.com",
          message: formData.message,
        },
        "9sfg4I9EGqkqKYwLl",
      );

      setisLoading(false);
      showAlertMessage("success", "Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setisLoading(false);
      console.error("Error sending email:", error);
      showAlertMessage(
        "danger",
        "Failed to send message, Please try again later!",
      );
    }

    //service_9qnsagr
    //template_20zsmrb
  };

  return (
    <section
      id="contact"
      className="relative flex items-center c-space section-spacing"
    >
      <Particles
        className="absolute inset-0 z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Get In Touch</h2>
          <p className="font-normal text-neutral-400">
            Feel free to reach out if you have any questions or want to
            collaborate!
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="field-input fields-input-focus"
              placeholder="Your Full Name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="field-input fields-input-focus"
              placeholder="Your Email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              type="text"
              id="message"
              className="field-input fields-input-focus"
              placeholder="What's on your mind?"
              autoComplete="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center
            rounded-md cursor-pointer bg-radial from-lavender to-royal
            hover-animation"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
