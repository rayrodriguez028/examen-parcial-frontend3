const Card = ({persona}) => {
  return (
    <>
    <h4>Hola {persona.nombre}!</h4>
    <h4>Sabemos que tu  color favorito es el: {persona.color}.</h4>
    </>
  );
};

export default Card;
