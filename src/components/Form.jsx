import React from 'react'

const Form = () => {
  return (
    <div>
       <div className="contact_box">
      <h1>Contacto</h1>
      <form
        target="_blank"
        action="https://formsubmit.co/gabaiz88@gmail.com"
        method="POST"
      >
        <div>
          <div className="first_row">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Nombre Completo"
                required
                minlength="2"
                maxlength="30"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                minlength="6"
                maxlength="30"
              />
            </div>
          </div>
        </div>
        <div className="text_area">
          <textarea
            placeholder="Deja tu mensaje"
            name="message"
            required
            minlength="10"
            maxlength="3000"
          ></textarea>
        </div>
        <button id="contact_button" type="submit" className="button_contact">
          Enviar
        </button>
      </form>
    </div>
    </div>
  );
};

export default Form;
