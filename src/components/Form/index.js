import emailjs from "@emailjs/browser";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Aluguel das casas");
  const [message, setMessage] = useState("");
  const [checkinDate, setCheckinDate] = useState("");
  const [checkoutDate, setCheckoutDate] = useState("");
  const [adultQuantity, setAdultQuantity] = useState("");
  const [childQuantity, setChildQuantity] = useState("");

  const handleAdultSelection = (event) => {
    setAdultQuantity(event.target.value);
  };

  const handleChildSelection = (event) => {
    setChildQuantity(event.target.value);
  };

  function handleEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
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
      adultQuantity,
      childQuantity
    };
    console.log(name, message, email, subject, checkinDate, adultQuantity);//remover
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
          setMessage("");
          setAdultQuantity("")
          setChildQuantity("")
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
          placeholder="seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          className="input-contact"
          type="email"
          placeholder="seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        {/* <input
          className="input-contact"
          type="text"
          placeholder="Assunto"
          onChange={(e) => setSubject(e.target.value)}
          value={subject}
        /> */}
        <div className="div-date"> 
          <div className="div-span-date">
            <span className="span-form">Data de entrada:</span>
            <input 
            className="input-contact date" 
            type="date"  
            onChange={(e) => setCheckinDate(e.target.value)}
            value={checkinDate}
            />
          </div>
          <div className="div-span-date">
            <span className="span-form">Data de saída:</span>
            <input 
             className="input-contact date" 
             type="date"  
             onChange={(e) => setCheckoutDate(e.target.value)}
             value={checkoutDate}
            />
        </div>
        </div> 
        <div className="div-date">
        <div className="div-span-date">
        <span className="span-form span-form-select">Quantidade de adultos:</span>
         <select  className="input-contact date" id="numero" value={adultQuantity} onChange={handleAdultSelection}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div className="div-span-date">
          <span className="span-form span-form-select">Quantidade de crianças:</span>
         <select  className="input-contact date" id="numero" value={childQuantity} onChange={handleChildSelection}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        </div>
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
