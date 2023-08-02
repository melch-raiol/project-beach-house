import emailjs from "@emailjs/browser";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";
import ContactInfo from "../ContactInfo";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || subject === "" || message === "") {
      return toast.error("PREENCHA TODOS OS CAMPOS!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_luee47e",
        "template_6uqb2v6",
        templateParams,
        "XA3RcIqj9J19FAQkU"
      )
      .then(
        (res) => {
          console.log("Email enviado", res.status, res.text);
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        },
        (error) => {
          console.log("ERROR: ", error);
        }
      );
    openAlert();
  }

  function openAlert() {
    return toast.success("EMAIL ENVIADO COM SUCESSO", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  }

  return (
    <div className="container-form">
      <ToastContainer />
      <ContactInfo />
      <form onSubmit={handleEmail} className="form">
        <h2>Fale com a gente</h2>
        <input
          className="input-contact"
          type="name"
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          className="input-contact"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          className="input-contact"
          type="text"
          placeholder="Assunto"
          onChange={(e) => setSubject(e.target.value)}
          value={subject}
        />
        <textarea
          className="input-contact message"
          type="text"
          placeholder="Mensagem"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button className="input-contact button-send">Enviar</button>
      </form>
    </div>
  );
}
