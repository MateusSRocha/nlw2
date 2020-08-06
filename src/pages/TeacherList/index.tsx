import React from "react";

import PageHeader from "../../components/PageHeader";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg"

import "./styles.css";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week-day">Dia da semana</label>
            <input type="text" id="week-day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>
      <main>
        <article className="teacher-item">
          <header>
            <img src="https://images.unsplash.com/photo-1556302132-40bb13638500?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80" alt="Professor"/>
            <div>
              <strong>Patric Evra Lamá</strong>
              <span>Quimíca</span>
            </div>
          </header>
          <p>
            Entusiasta das melhores tecnologias de quimíca avançada.
            <br/><br/>
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências
          </p>
          <footer>
            <p>
              Preço/hora
              <strong>80,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="whatsapp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
      </main>
    </div>
  );
}

export default TeacherList;
