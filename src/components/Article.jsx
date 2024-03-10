// Se importa la biblioteca de React
import React from 'react';

// Se define el componente Article. Se desestructuran las props en las variables image, name y age
const Article = ({ image, name, age }) => {
   // Se devuelve la estructura del artículo con la información recibida a través de las props
  return (
    <article className="person">
      <img src={image} alt="" />
      <div>
        <h4>{name}</h4>
        <p>{age} años</p>
      </div>
    </article>
  );
}
// Se exporta el componente Main para que pueda ser utilizado en otros archivos
export default Article;