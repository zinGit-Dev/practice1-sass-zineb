
import "./index.scss"

const Button = ({text ="Home", type="home"})=> {
   //destructuring de las props, es un objeto que lo puedes declarar dentro o fuera
    return (
        <div className = {`button button--hover button--${type}`} >
        <label className="button__text">{text}</label>
    </div>
    )
  }
  export default Button