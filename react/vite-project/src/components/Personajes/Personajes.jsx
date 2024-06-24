import { useEffect, useState } from "react";

export function Personajes() {
    const [personajes, setPersonaje] = useState([]);

   useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
    .then(response => response.json())
    .then(personajes => setPersonaje(personajes.results));
   },[]); 


   return( 
   <>
     {!personajes ? (
       <> loading... </> 
      ) : (
        <>
        {personajes.map((personaje, index) => (
        <div>
          <h2>
             Nombre: {personaje.name}
             status: {personaje.status}
          </h2>
          <p> specie: {personaje.species} </p>
        </div>
        ))}
        </>
     )}
   </>
  );
}