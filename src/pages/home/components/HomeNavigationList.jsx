import HomeNavigationLink from './HomeNavigationLink';
import LINK_NAMES from '../link-names';
import communicatorImage from '../assets/images/communicator.png';
import pictogramsImage from '../assets/images/pictograms.png';

function HomeNavigationList() {
  return (
    <nav className="home__navigation">
      <div className="home__navigation__wrapper">
        <HomeNavigationLink image={ communicatorImage } text={ LINK_NAMES.COMMUNICATOR } />
        <HomeNavigationLink image={ pictogramsImage } text={ LINK_NAMES.CARDS } />
      </div>
    </nav>
  )
}

export default HomeNavigationList;
