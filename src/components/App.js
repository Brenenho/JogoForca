import palavras from "./palavras.js";
import React from "react";
import imagemforca from "./assets/forca0.png"

function App() {
  const [palavra, setPalavra] = React.useState([]);
  const [disabled, setDisabled] = React.useState(true);
  const [letrasSelecionadas, setLetrasSelecionadas] = React.useState([]);
  const [letrasDisabled, setLetrasDisabled] = React.useState(true);

  const [disabledclasse, setDisabledclasse] = React.useState("palavra");

  return (
    <div className="App">
      <Jogo letrasDisabled={letrasDisabled} setLetrasDisabled={setLetrasDisabled} palavra={palavra} setPalavra={setPalavra} setDisabled={setDisabled} disabledclasse={disabledclasse} setDisabledclasse={setDisabledclasse} letrasSelecionadas={letrasSelecionadas} setLetrasSelecionadas={setLetrasSelecionadas} />
      <Letras letrasDisabled={letrasDisabled} setLetrasDisabled={setLetrasDisabled} disabled={disabled} setDisabled={setDisabled} letrasSelecionadas={letrasSelecionadas} setLetrasSelecionadas={setLetrasSelecionadas} palavra={palavra} disabledclasse={disabledclasse} setDisabledclasse={setDisabledclasse} />
    </div>
  );
}

function Letras(props) {
  const { letrasSelecionadas, setLetrasSelecionadas } = props;
  const { disabled, setDisabled } = props;
  const { palavra, disabledclasse, setDisabledclasse, letrasDisabled, setLetrasDisabled } = props;


  function clicarLetra(event, letras) {
    let novoarray = [...letrasSelecionadas];
    novoarray.push(letras);
    setLetrasSelecionadas(novoarray);
    console.log(novoarray);
    event.target.className = "palavra desabilitada";

    event.target.disabled = true;
  }

  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  return (
    <div className="palavras">
      {alfabeto.map((letra) => (
        <button
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


function Jogo(props) {
  const { palavra, setPalavra, setDisabled, disabledclasse, setDisabledclasse, letrasSelecionadas, setLetrasSelecionadas, letrasDisabled, setLetrasDisabled } = props;

  const [palavraEscolhida, setPalavraEscolhida] = React.useState(false);

  function resetJogo() {
    setPalavra([]);
    setDisabled(true);
    setLetrasSelecionadas([]);
    setLetrasDisabled(true);
    setPalavraEscolhida(false);
  }

  function escolherPalavra(event) {
    if (palavraEscolhida) {
      resetJogo();
    } else {
      setLetrasSelecionadas([]);
      setLetrasDisabled(false);
      setDisabled(false);

      let palavraSortida = palavras[Math.floor(Math.random() * palavras.length)];
      let array = palavraSortida.split('');

      setPalavra(array);
      setPalavraEscolhida(true);
    }
  }

  return (
    <div className="forca">
      <img className="imagemforca" src={imagemforca} alt="" />
      <button className="botaoescolher" onClick={() => escolherPalavra()}>Escolher palavra</button>
      <div className="teclado">
        <ul className="listaletras">
          {palavra.map((letra, indice) => (
            <li key={indice}>
              {letrasSelecionadas.includes(letra) ? letra : "_"}
            </li>)
          )}
        </ul>
      </div>
    </div>
  );
}


export default App;
