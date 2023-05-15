import imagemforca from "./assets/forca0.png"
import palavras from "./palavras.js";

export default function Jogo(){

    
  
    return (
        <div className="forca">
        <img className="imagemforca" src={imagemforca} alt="" />
        <button className="botaoescolher">Escolher palavra</button>
      </div>
    )
  }

  

 export default function SortearPalavra() {
    const [disabled, setDisabled] = useState(false)
  }