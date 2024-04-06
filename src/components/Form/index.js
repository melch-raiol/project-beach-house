import emailjs from "@emailjs/browser";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [checkinDate, setCheckinDate] = useState("");
  const [checkoutDate, setCheckoutDate] = useState("");
  const [quantity, setQuantity] = useState("")

  function handleEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || subject === "" || message === "") {
      return toast.error("PREENCHA TODOS OS CAMPOS!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }

    const templateParams = {
      from_name: name,
      message,
      email,
      subject,
      checkinDate,
      checkoutDate,
      quantity
    };
    console.log(name, message, email, subject, checkinDate);//remover
    emailjs
      .send(
        "service_2ri0lrh",
        "template_x7uwisq",
        templateParams,
        "JSFEXBGrKf3nNCe_r"
      )
      .then(
        (res) => {
          console.log("Email enviado", res.status, res.text);//remover
          setName("");
          setEmail("");
          setSubject("");
          setCheckinDate("");
          setCheckoutDate("")
          setQuantity("")
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
      <h1 className="tolk-to-us section-title">Fale com a gente</h1>
      <form onSubmit={handleEmail} className="form">
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
        <div className="div-date"> 
          <div className="div-span-date">
            <span>Data de entrada</span>
            <input 
            className="input-contact date" 
            type="date"  
            onChange={(e) => setCheckinDate(e.target.value)}
            value={checkinDate}
            />
          </div>
          <div className="div-span-date">
            <span>Data de saída</span>
            <input 
             className="input-contact date" 
             type="date"  
             onChange={(e) => setCheckoutDate(e.target.value)}
             value={checkoutDate}
            />
        </div>
        </div>
        <input
         className="input-contact" 
         type="number"  
         onChange={(e) => setQuantity(e.target.value)}
         min="1" 
         step="12"
         value={quantity}
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
