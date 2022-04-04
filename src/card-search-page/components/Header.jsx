import homePageIcon from '../images/house.png';
import OtherPageLink from './Other-page-link';

function HeaderContent() {
  return (
    <div className="wrapper header__content">
      <nav className="header__navigation">
        <img className="header__icon" src={ homePageIcon } />
        <OtherPageLink text="Коммуникатор" />
        |
        <OtherPageLink text="Карточки" />
      </nav>
    </div>
  )
}

export default <HeaderContent />