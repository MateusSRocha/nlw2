import React from 'react';

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
          <header>
            <img
              src="https://images.unsplash.com/photo-1556302132-40bb13638500?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80"
              alt="Professor"
            />
            <div>
              <strong>Patric Evra Lamá</strong>
              <span>Quimíca</span>
            </div>
          </header>
          <p>
            Entusiasta das melhores tecnologias de quimíca avançada.
            <br />
            <br />
            Apaixonado por explodir coisas em laboratório e por mudar a vida das
            pessoas através de experiências
          </p>
          <footer>
            <p>
              Preço/hora
              <strong>80,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="whatsapp" />
              Entrar em contato
            </button>
          </footer>
        </article>
    );
}

export default TeacherItem;