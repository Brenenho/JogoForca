
import React from "react";


export default function Letras(props) {
  const { letrasSelecionadas, setLetrasSelecionadas } = props;
  const { disabled, setDisabled } = props;
  let { palavra, disabledclasse, setDisabledclasse, letrasDisabled, setLetrasDisabled, erros, setErros, letraposta, setLetraposta } = props;
  const { palavraerrada, setPalavraerrada } = props;


  function clicarLetra(event, letras) {
    let novoarray = [...letrasSelecionadas];
    novoarray.push(letras);
    setLetrasSelecionadas(novoarray);
    if (!palavra.includes(letras)) {
      setErros((erros) => erros + 1)
      console.log(erros + 1)
    }


    if (!palavra.includes(letras)) {
      if (erros + 1 === 6) {
        
      
      setDisabled(true)
      setPalavraerrada("errada")
      }
    }

    let acertos = 0;

    for (let i = 0; i < palavra.length; i++) {
      if (letrasSelecionadas.includes(palavra[i])) {
        acertos++;
      }
    }

    if (acertos + 1 === palavra.length) {
      setPalavraerrada("certa")
    }

    console.log(acertos);


    event.target.className = "palavra desabilitada";

    event.target.disabled = true;
  }

  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  return (
    <div className="palavras">
      {alfabeto.map((letra) => (
        <button
          data-test="letter"
          key={letra}
          disabled={disabled}
          onClick={(event) => clicarLetra(event, letra)}
          className={disabledclasse}

        >
          {letra}
        </button>
      ))}
    </div>
  );
}