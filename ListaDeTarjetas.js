import React from 'react'
import Tarjeta from './Tarjeta'

const pokemones =[
  {
    url:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/365.png"  ,
    titulo:  Walrein,
    categoria: rompehielo ,
  },
  {
    url:"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/180.png " ,
    titulo: Flaaffy ,
    categoria: lana ,
  },
  {
    url: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/661.png" ,
    titulo:Fletcling  ,
    categoria: petirrojo,
  }
  
]

const ListaDeTarjetas = (props) => {
  return (
    <>

    
    <article>
      {pokemones.map (pokemon=> <Tarjeta 
                                  pokemon = {pokemon} 
                                   />)}
      
      
      </article>

      

      <style jsx>{`
                article{
                  display:flex;
                  flex-wrap:wrap;
                }
                `}</style>
    </>
              )
}

export default ListaDeTarjetas