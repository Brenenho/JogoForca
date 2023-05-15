import palavras from "../palavras.js";
import React from "react";
import Jogo from "./Jogo.js"
import Letras from "./Letras.js"


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
      <Jogo palavraerrada={palavraerrada} setPalavraerrada={setPalavraerrada} letrasDisabled={letrasDisabled} setLetrasDisabled={setLetrasDisabled} palavra={palavra} setPalavra={setPalavra} erros={erros} setErros={setErros} setDisabled={setDisabled} disabledclasse={disabledclasse} setDisabledclasse={setDisabledclasse} letrasSelecionadas={letrasSelecionadas} setLetrasSelecionadas={setLetrasSelecionadas} />
      <Letras palavraerrada={palavraerrada} setPalavraerrada={setPalavraerrada} letrasDisabled={letrasDisabled} setLetrasDisabled={setLetrasDisabled} letraposta={letraposta} setLetraposta={setLetraposta} disabled={disabled} setDisabled={setDisabled} erros={erros} setErros={setErros} letrasSelecionadas={letrasSelecionadas} setLetrasSelecionadas={setLetrasSelecionadas} palavra={palavra} disabledclasse={disabledclasse} setDisabledclasse={setDisabledclasse} />
    </div>
  );
}
export default App;
