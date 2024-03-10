// Se importa la biblioteca de React
import React from "react";
// Se importa el listado de personas desde el archivo data
import Personas from "../data";
// Se importa el componente Article
import Article from "./Article";

// Se define el componente Main.
// En este caso, no se le pasa ninguna prop al componente sino que dado que el listado de personas es fijo, no se considera necesario pasarlo como componente.
// Si fuera necesario reutilizar este componente con otro listado de personas, sería mejor pasar el listado con una prop.
const Main = () => {
  // Se calcula el total de personas
  let total = Personas.length;
  // Se devuelve el contenido principal del componente Main
  // Se utilizará la funcion map para renderizar el componente Article por cada persona del listado.
  return (
    <main>
      <section className="container">
        <h3>Hoy hay {total} cumpleaños</h3>
        {Personas.map((person) => (
          <Article
            key={person.id}
            image={person.image}
            name={person.name}
            age={person.age}
          />
        ))}
      </section>
    </main>
  );
};

// Se exporta el componente Main para que pueda ser utilizado en otros archivos
export default Main;
