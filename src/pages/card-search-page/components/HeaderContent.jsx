import homePageIcon from '../assets/images/house.png';
import HeaderLink from './HeaderLink';

const LINKS_NAME = {
  COMMUNICATOR: 'Коммуникатор',
  CARDS: 'Карточки',
}

function HeaderContent() {
  return (
    <div className="wrapper header__content">
      <nav className="header__navigation">
        <img className="header__icon" src={ homePageIcon } alt="home" />
        <HeaderLink text={ LINKS_NAME.COMMUNICATOR } />
        |
        <HeaderLink text={ LINKS_NAME.CARDS } />
      </nav>
    </div>
  )
}

export default <HeaderContent />