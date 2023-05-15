import palavras from "./palavras.js";
import React from "react";
import imagemforca0 from "./assets/forca0.png"
import imagemforca1 from "./assets/forca1.png"
import imagemforca2 from "./assets/forca2.png"
import imagemforca3 from "./assets/forca3.png"
import imagemforca4 from "./assets/forca4.png"
import imagemforca5 from "./assets/forca5.png"
import imagemforca6 from "./assets/forca6.png"

function App() {
  const [palavra, setPalavra] = React.useState([]);
  const [disabled, setDisabled] = React.useState(true);
  const [letrasSelecionadas, setLetrasSelecionadas] = React.useState([]);
  const [letrasDisabled, setLetrasDisabled] = React.useState(true);
  let [erros, setErros] = React.useState(0);
  const [disabledclasse, setDisabledclasse] = React.useState("palavra");
  const [palavraerrada, setPalavraerrada] = React.useState("");
  const [letraposta, setLetraposta] = React.useState("a");

  return (
    <div className="App">
      <Jogo palavraerrada={palavraerrada} setPalavraerrada={setPalavraerrada} letrasDisabled={letrasDisabled} setLetrasDisabled={setLetrasDisabled} palavra={palavra} setPalavra={setPalavra} erros={erros} setErros={setErros}  setDisabled={setDisabled} disabledclasse={disabledclasse} setDisabledclasse={setDisabledclasse} letrasSelecionadas={letrasSelecionadas} setLetrasSelecionadas={setLetrasSelecionadas} />
      <Letras palavraerrada={palavraerrada} setPalavraerrada={setPalavraerrada} letrasDisabled={letrasDisabled} setLetrasDisabled={setLetrasDisabled} letraposta={letraposta} setLetraposta={setLetraposta} disabled={disabled} setDisabled={setDisabled} erros={erros} setErros={setErros} letrasSelecionadas={letrasSelecionadas} setLetrasSelecionadas={setLetrasSelecionadas} palavra={palavra} disabledclasse={disabledclasse} setDisabledclasse={setDisabledclasse} />
    </div>
  );
}

function Letras(props) {
  const { letrasSelecionadas, setLetrasSelecionadas } = props;
  const { disabled, setDisabled } = props;
  let { palavra, disabledclasse, setDisabledclasse, letrasDisabled, setLetrasDisabled, erros, setErros, letraposta, setLetraposta } = props;
  const {palavraerrada, setPalavraerrada} = props;


  function clicarLetra(event, letras) {
    let novoarray = [...letrasSelecionadas];
    novoarray.push(letras);
    setLetrasSelecionadas(novoarray);
    if (!palavra.includes(letras)) {
      
      
      
      
      setErros((erros) => erros + 1)
      console.log(erros + 1)
      
    }

    
    if (erros + 1 === 6) {
      setDisabled(true)
      setPalavraerrada("")
    }

    
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
  const { palavra, setPalavra, setDisabled, disabledclasse, setDisabledclasse, letrasSelecionadas, setLetrasSelecionadas, letrasDisabled, setLetrasDisabled, erros, setErros, letraposta, setLetraposta } = props;
  const imagensForca = [imagemforca0, imagemforca1, imagemforca2, imagemforca3, imagemforca4, imagemforca5, imagemforca6];
  const [palavraEscolhida, setPalavraEscolhida, ] = React.useState(false);
  const {palavraerrada, setPalavraerrada} = props;

  function resetJogo() {
    setPalavra([]);
    setDisabled(true);
    setLetrasSelecionadas([]);
    setLetrasDisabled(true);
    setPalavraEscolhida(false);
    setErros(0)
    setPalavraerrada("")
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
      console.log(palavraSortida)
      console.log(array)
      console.log(palavra)
    }
  }

  return (
    <div className="forca">
      <img className="imagemforca" src={imagensForca[erros]} alt="" />
      <button className="botaoescolher" onClick={() => escolherPalavra()}>Escolher palavra</button>
      <div className="teclado">
        <ul className="listaletras">
          {palavra.map((letra, indice) => (
            <li className={palavraerrada} key={indice}>
              {letrasSelecionadas.includes(letra) || erros === 6  ? letra : "_"}
            </li>)
          )}
        </ul>
      </div>
    </div>
  );
}


export default App;
