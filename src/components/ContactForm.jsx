import { Component } from 'react';
import { PiPaperPlaneTiltLight } from 'react-icons/pi';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageSent: false,
      isSending: false,
      error: null,
    };
  }

  sendEmail = async (event) => {
    event.preventDefault();
    this.setState({ isSending: true });

    const formData = new FormData(event.target);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9\s]{9,}$/;
    const textRegex = /[a-zA-Z]{3,}/;

    if (
      !formData.get('user_name') ||
      !formData.get('user_email') ||
      !formData.get('user_phone') ||
      !formData.get('user_message')
    ) {
      this.setState({ error: 'Por favor, completa todos los campos.', isSending: false });
      return;
    }
    if (!textRegex.test(formData.get('user_name'))) {
      this.setState({ error: 'Por favor, ingresa un nombre válido.', isSending: false });
      return;
    }

    if (!emailRegex.test(formData.get('user_email'))) {
      this.setState({
        error: 'Por favor, ingresa una dirección de e-mail válido.',
        isSending: false,
      });
      return;
    }

    if (!phoneRegex.test(formData.get('user_phone'))) {
      this.setState({ error: 'Por favor, ingresa un teléfono válido.', isSending: false });
      return;
    }

    try {
      await emailjs.sendForm(
        'service_dg8rkkm',
        'template_jn98lus',
        event.target,
        'PMNJcQ5EmPS6MlWe8'
      );
      this.setState({ messageSent: true, error: null, isSending: false });
    } catch (error) {
      console.log(error);
      this.setState({
        error:
          'Lo siento, tu mensaje no ha podido ser enviado. Puedes ponerte en contacto conmigo a través de LinkedIn desde el menú de Redes Sociales',
        isSending: false,
      });
    }
  };

  render() {
    const { messageSent, error, isSending } = this.state;

    return (
      <>
        <div className="div-form">
          <form onSubmit={this.sendEmail}>
            {messageSent ? (
              <div className="success-message">
                <p>
                  ¡Tu mensaje ha sido enviado!
                  <br /> Muchas gracias por ponerte en contacto conmigo, en
                  breve recibirás mi respuesta.
                </p>
                <PiPaperPlaneTiltLight className="icon-plane" />
              </div>
            ) : (
              <>
                {error && (
                  <div className="error-message">
                    <p>{error}</p>
                  </div>
                )}

                <div>
                  <label>
                    Nombre:
                    <input type="text" name="user_name" />
                  </label>
                </div>

                <div>
                  <label>
                    E-mail:
                    <input type="email" name="user_email" />
                  </label>
                </div>

                <div>
                  <label>
                    Teléfono:
                    <input type="tel" name="user_phone" />
                  </label>
                </div>

                <div className="textarea-message">
                  <label className="textarea-message">
                    Mensaje:
                    <textarea
                      name="user_message"
                    ></textarea>
                  </label>
                </div>

                <button className="button_submit" type="submit" disabled={isSending} style={{ backgroundColor: '#fff' }}>
                  {isSending ? 'Enviando...' : 'Enviar'}
                </button>
              </>
            )}
          </form>
        </div>
        <div className="background-opacity" />
      </>
    );
  }
}

export default ContactForm;
