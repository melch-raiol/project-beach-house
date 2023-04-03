import './styles.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer'
import ImgContact from '../../assets/contact.jpg';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    function handleEmail(e) {
        e.preventDefault();

        if (name === '' || email === '' || subject === '' || message === '') {
            alert("Preencha todos os campos");
            return;
        };

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        };

        emailjs.send("service_luee47e", "template_6uqb2v6", templateParams, "XA3RcIqj9J19FAQkU")
            .then((res) => {
                console.log("Email enviado", res.status, res.text);
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
            }, (error) => {
                console.log("ERROR: ", error);
            });
    };

    return (
        <div className="container-contact">
            <Header />
            <img
                className='img-background-contact'
                src={ImgContact}
            />

            <div className='container-form'>

                <div className='title-contact'>
                    <span>Contato</span>
                </div>

                <div className='info-form'>
                    informações
                </div>

                <form
                    onSubmit={handleEmail}
                    className='form-contact'
                >
                    <input
                        className='input-contact'
                        type='name'
                        placeholder='Nome'
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <input
                        className='input-contact'
                        type='email'
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <input
                        className='input-contact'
                        type='text'
                        placeholder='Assunto'
                        onChange={(e) => setSubject(e.target.value)}
                        value={subject}
                    />
                    <textarea
                        className='input-contact message'
                        type='text'
                        placeholder='Menssagem'
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                    />

                    <button
                        className='input-contact button-send'
                    >
                        Enviar
                    </button>
                </form>
            </div>

            <Footer />
        </div>
    )
};

export default Contact;