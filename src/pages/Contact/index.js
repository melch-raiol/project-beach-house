import emailjs from "@emailjs/browser";
import { useState } from "react";
import ImgContact from "../../assets/contact.jpg";
import ImgWhatsapp from "../../assets/whatsapp-icon.png";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./styles.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
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
    <div className="container-contact">
      <ToastContainer />
      <Header />
      <img className="img-background-contact" src={ImgContact} />
      <img className="img-whatsapp" src={ImgWhatsapp} />
      <div className="container-form">
        <div className="title-contact">
          <span>Contato</span>
        </div>

        <div className="div-info-and-form">
          <div className="info-form">
            <span className="title-info">Casas da Praia da Sepultura</span>
            <span>Rua Chincharro, 309 - Centro - Bombinhas / SC</span>
            <span>
              whatsapp:
              <a
                target="_blank"
                href="https://wa.me/5547997551106?text=Ol%C3%A1%21"
              >
                +55 47 99755-1106
              </a>
            </span>
            <span>casasdasepultura@gamil.com</span>
          </div>

          <form onSubmit={handleEmail} className="form-contact">
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
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
