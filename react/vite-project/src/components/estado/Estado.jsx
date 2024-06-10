//hooks (ganchos) --> useState

import { useEffect, useState } from "react"

//camelcase es la manera de escribir en la cual cada palabra  nueva arranca con mayuscula



export const Estado = () => {
  const[contador, setContador] = useState(0);

  const handleClick = () => {
    setContador(contador + 1);
  };

//el usEffect se va a ejecutar la cantidad de veces que las dependencias se actuliacen
//si no te pasan dependencias se ejecturara solo al principio de la app
//en el primer render
//si no se le pasa el array de dependecias siempre se va a ejecutar
  useEffect(() => {
    console.log("el contado se a actualizado")
  }, [contador]);

  const arrayPersonajes = [
    {
        name: "Rick",
        lastName: "Sanchez",
        planet: "earth",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
    {
        name: "Morty",
        lastName: "Smith",
        planet: "earth",
        image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    },
   
  ]

  return (
    <>
      <div className="grilla_3x3">
        {   //cuando despues de la funcion flecha hay un parentesis significa que el return es implicito
            //es decir que se va a retornar todo lo que esta en el parentesis
            //return implicito
            arrayPersonajes.map((personaje, i) => (
                <div key={i}>
                  <h2> FullName: {personaje.name} {personaje.lastName} {""} </h2>
                  <p> Planet: {personaje.planet}</p>
                  <img src={personaje.image} alt="description" />
                </div>

            ))     
            //return explicitio
            /*arrayPersonajes.map(() => (
               <>           
               </>           
            ))*/
        }                         
      </div>
      <button onClick={handleClick}>Aumentar</button>
      <p>{contador}</p>
    </>
  );
};



