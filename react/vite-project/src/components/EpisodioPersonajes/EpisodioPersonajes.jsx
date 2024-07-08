import { useEffect,useState  } from "react";

export function EpisodioPersonajes() {
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
        <div className="grilla_3x3">      
          {personajes.map((personaje, index) => (
            <div key={index} className="cartas">
              <h2>Nombre: {personaje.name}</h2>
              <img src={personaje.image}/>
              <p> id: {personaje.id}</p>
              <p> Status: {personaje.status}</p>
              <p> Especie: {personaje.species} </p>
              <p> Genero: {personaje.gender}</p>
            </div>
        ))}
        </div>        
        </>
     )}
   </>
  );
}
