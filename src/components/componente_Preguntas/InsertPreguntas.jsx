import { useState } from 'react';
import "/src/assets/styles/style_Preguntas/preguntasF.css";

export default function AskQuestion({imagen}) {
  const [question, setQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim()) {
      console.log('Question submitted:', question);
      setQuestion('');
    }
  };

  return (
    <div className="ask-question-overlay">
      <div className="ask-question-card">
        <div className="user-avatar">
          <img src={imagen}></img>
        </div>
        
        <h2 className="ask-question-title">Haznos una pregunta</h2>
        
        <form onSubmit={handleSubmit} className="ask-question-form">
          <input
            type="text"
            placeholder="Escribe algo..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="ask-question-input"
          />
        </form>
      </div>
    </div>
  );
}

export function InsertTitle() {
    return (
    <div className="title-insert">
        <h1>¿No encuentras tu pregunta?</h1>
        <p>Dejanos tu duda en la casilla inferior</p>
    </div>
    )
}
