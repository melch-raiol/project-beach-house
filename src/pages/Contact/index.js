import './styles.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer'
import ImgContact from '../../assets/contact.jpg';

function Contact() {

    return (
        <div className="container-contact">
            <Header />
            <img
                className='img-background-contact'
                src={ImgContact}
            />
            <div className='title-contact'>
                <span>Contact</span>
            </div>

            <div className='container-form'>
                <div className='info-form'>
                    informações
                </div>
                <form className='form-contact'>
                    <input
                        className='input-contact'
                        type='name'
                        placeholder='Nome'
                    />
                    <input
                        className='input-contact'
                        type='email'
                        placeholder='Email'
                    />
                    <input
                        className='input-contact'
                        type='text'
                        placeholder='Assunto'
                    />
                    <textarea
                        className='input-contact message'
                        type='text'
                        placeholder='Menssagem'
                    />
                </form>
            </div>

            <Footer />
        </div>
    )
};

export default Contact;