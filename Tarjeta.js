import React from 'react'
import Boton from './Boton'

const Tarjeta = (props) => {
  return (
    <>
    <figure>
    <img src={props.pokemon.url} alt="pokemon"/>

    <div>
      <figcaption>{props.pokemon.titulo}</figcaption>
    <p>{props.pokemon.categoria}</p>
    <Boton></Boton>
    </div>

    </figure>

    <style jsx >{`{figure:
                    color: red,
                    background-color: green,
                    padding:10px 20px ,
                    border-radius: "5px",
                    fontSize: "1.5rem",
                  }
                  div{
                    display:flex;
                    flex-direction: column;
                    align-items: center;
                    padding:10px;
                  }
                  p{
                    text-align:center;
                  }
    `}</style>

    <Boton/>
    </>
  )
}

export default Tarjeta