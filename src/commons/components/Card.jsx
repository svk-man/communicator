import '../styles/card.css';
import soundSwitcher from '../images/sound-solid.svg';
import API from '../../card-search-page/apis';

function Card(props) {
  const { name, image } = props;

  return (
    <div className="card">
      <div className="card__interaction">
        <img className="card__sound" src={ soundSwitcher } />
        <img className="card__image" src={ image } />
      </div>
      <h4 className="card__name">
        { name }
      </h4>
    </div>
  )
}

export default Card