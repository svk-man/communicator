import '../assets/styles/card.css';

function Card(props) {
  const { name, image } = props;

  return (
    <div className="card">
      <div className="card__interaction">
        <button className="card__sound" />
        <img className="card__image" src={ image } alt="name" />
      </div>
      <h4 className="card__name">
        { name }
      </h4>
    </div>
  )
}

export default Card;
