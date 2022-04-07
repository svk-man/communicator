import { HomeNavigationLink } from "./Nav-link";
import communicatorImage from '../images/communicator.png';
import pictogramsImage from '../images/pictograms.png';

export function LinkList() {
  return (
    <nav className="home__navigation">
      <div className="home__navigation__wrapper">
        <HomeNavigationLink img={ communicatorImage } text="Коммуникатор" />
        <HomeNavigationLink img={ pictogramsImage } text="Карточки" />
      </div>
    </nav>
  )
}