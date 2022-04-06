import homePageIcon from '../assets/images/house.png';
import HeaderLink from './HeaderLink';

function HeaderContent() {
  return (
    <div className="wrapper header__content">
      <nav className="header__navigation">
        <img className="header__icon" src={ homePageIcon } alt="" />
        <HeaderLink text="Коммуникатор" />
        |
        <HeaderLink text="Карточки" />
      </nav>
    </div>
  )
}

export default <HeaderContent />