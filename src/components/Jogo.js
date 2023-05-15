import imagemforca0 from "./assets/forca0.png"
import imagemforca1 from "./assets/forca1.png"
import imagemforca2 from "./assets/forca2.png"
import imagemforca3 from "./assets/forca3.png"
import imagemforca4 from "./assets/forca4.png"
import imagemforca5 from "./assets/forca5.png"
import imagemforca6 from "./assets/forca6.png"
import React from "react";


import palavras from "../palavras.js";

export default function Jogo(props) {
  const { palavra, setPalavra, setDisabled, disabledclasse, setDisabledclasse, letrasSelecionadas, setLetrasSelecionadas, letrasDisabled, setLetrasDisabled, erros, setErros, letraposta, setLetraposta } = props;
  const imagensForca = [imagemforca0, imagemforca1, imagemforca2, imagemforca3, imagemforca4, imagemforca5, imagemforca6];
  const [palavraEscolhida, setPalavraEscolhida,] = React.useState(false);
  const { palavraerrada, setPalavraerrada } = props;

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
    }
  }

  return (
    <div className="forca">
      <img className="imagemforca" data-test="game-image" src={imagensForca[erros]} alt="" />
      <button className="botaoescolher" data-test="choose-word" onClick={() => escolherPalavra()}>Escolher palavra</button>
      <div className="teclado">
        <ul data-test="word" className="listaletras">
          {palavra.map((letra, indice) => (
            <li className={palavraerrada}  key={indice}>
              {letrasSelecionadas.includes(letra) || erros === 6 ? letra : "_"}
            </li>)
          )}
        </ul>
      </div>
    </div>
  );
}
