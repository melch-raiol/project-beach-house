import ContactInfo from "../../ContactInfo";
import Form from "../../Form";
import "./styles.css";

export default function LayoutContact() {
  return (
    <div className="container" id="section-5">
      <div className="contact">
        <ContactInfo />
        <Form />
      </div>
    </div>
  );
}
